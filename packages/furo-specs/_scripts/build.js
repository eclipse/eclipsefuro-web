#!/usr/bin/env node


const fs = require('fs');
const os = require('os');
const path = require('path');
const execSync = require('child_process').execSync;

let config;
// config öffnen
if (fs.existsSync('./furo.spec.conf.json')) {
  config = JSON.parse(fs.readFileSync('./furo.spec.conf.json'));
} else {
  console.log("furo.spec.conf.json not found, you can copy an example from " + path.normalize(__dirname + "/../"));
  process.exit(1);
}

const TPLDirBundled = config.custom_template_dir || __dirname + "/templates/bundled";
const TPLDirSingle = config.custom_template_dir || __dirname + "/templates/single";
const TPLDirBase = config.custom_template_dir || __dirname + "/templates";
const BuildDir = path.normalize(process.cwd() + "/" + config.build_output_dir);

// set the path to the simple-generator binary, empty if locally available
const pathToSimpleGeneratorBinary = config.path_to_simplegenerator || "";

const ClientEnv = {services: [], types: []};
let cwd = process.cwd();
if (BuildDir.search(cwd) === -1) {
  // buildpath outside cwd
  console.log(BuildDir + "\nbuildpath outside current working directory, this is to dangerous, because we delete some files. Please update the config");
  process.exit(1);
}
// clean the build folder
sh("rm -rf", [BuildDir + "/*"]);
sh("mkdir -p", [BuildDir]);
sh("mkdir -p", ["./__tmp"]);


function sh(command, arguments) {
  execSync(command + " " + arguments.join(" "), {stdio: 'inherit'});
}


// Build up the file list
sh(__dirname + "/createSpecList.sh", [config.spec_dir, ...config.import_spec_dirs]);



// read the list with the filenames and build the main structure

const speclist = JSON.parse(fs.readFileSync("./__tmp/speclist.json"));
const Typelist = {};
const Servicelist = {"__bundled": {"imports": new Set, "groupedservices": []}, "targets": {}};


speclist.types.forEach((filename) => {
  let spec = JSON.parse(fs.readFileSync(filename));
  // client needs unmodified
  ClientEnv.types.push(JSON.parse(JSON.stringify(spec)));
  let target = spec.__proto.package.split(".").join("/") + "/" + spec.__proto.targetfile;
  // create if not exist
  if (!Typelist[target]) {
    Typelist[target] = {"imports": new Set, types: [], "options": {}, package: spec.__proto.package};
  }
  if (spec.__proto.imports) {
    spec.__proto.imports.forEach((i) => {
      Typelist[target].imports.add(i);
    });
  }

  if (spec.__proto.options) {
    for (let key in spec.__proto.options) {
      Typelist[target].options[key] = spec.__proto.options[key];
    }
  }

  // empty object for the oneofs
  spec.oneof_fields = {};
  // remove package internal type calls like person.Person => Person

  for (let f in spec.fields) {
    let field = spec.fields[f];
    //types, proto.types and map_to
    field.type = field.type.replace(Typelist[target].package + ".", "");

    // collect the oneofs
    if(field.__proto.oneof){
      // create oneof in spec if it does not exixst
      if(!spec.oneof_fields[field.__proto.oneof]){
        spec.oneof_fields[field.__proto.oneof] = {};
      }
      spec.oneof_fields[field.__proto.oneof][f] = field;
    }
  }

  Typelist[target].types.push(spec);
  if(config.hooks && config.hooks.type_completed){
    sh(config.hooks.type_completed, [path.normalize(filename),path.normalize(target)]);
  }
});




// obj to create the protocHelper.sh
let protoc = {mod: [], protoc_I: config.protoc_I, protoc_M: config.protoc_M, config: config};
for (let target in Typelist) {
  // make array from import set
  let type = Typelist[target];
  type.imports = Array.from(type.imports);
  // fill protoc file
  protoc.mod.push({"file": target, package: "../" + type.package.replace(".", "/")});

  // Write json files for messages
  sh("mkdir", ["-p", "./__tmp/_types/" + path.dirname(target)]);
  let jsonfilename = "./__tmp/_types/" + target + ".json";
  fs.writeFileSync(jsonfilename, JSON.stringify(type));
  sh("mkdir", ["-p", BuildDir + "/protos/" + path.dirname(target)]);
  sh(pathToSimpleGeneratorBinary + "simple-generator", ["-d", jsonfilename, "-t", TPLDirSingle + "/single.message.proto.tmpl", ">", BuildDir + "/protos/" + target])
}


speclist.services.forEach((filename) => {
  let spec = JSON.parse(fs.readFileSync(filename));
  let target = spec.__proto.package + "/" + spec.__proto.targetfile;
  // create if not exist
  if (!Servicelist.targets[target]) {
    Servicelist.targets[target] = {
      "imports": new Set,
      groupedservices: [],
      "options": {},
      package: spec.__proto.package
    };
  }
  if (spec.__proto.imports) {
    spec.__proto.imports.forEach((i) => {
      Servicelist.targets[target].imports.add(i);
      Servicelist.__bundled.imports.add(i);
    });
  }

  if (spec.__proto.options) {
    for (let key in spec.__proto.options) {
      Servicelist.targets[target].options[key] = spec.__proto.options[key];
    }
  }
  Servicelist.targets[target].groupedservices.push(spec);
  Servicelist.__bundled.groupedservices.push(spec);
  ClientEnv.services.push(spec);

});

for (let target in Servicelist.targets) {
  // make array from import set
  let service = Servicelist.targets[target];
  service.imports = Array.from(service.imports);
  // Write json files for services

  sh("mkdir", ["-p", "./__tmp/_services/" + path.dirname(target)]);
  let jsonfilename = "./__tmp/_services/" + target + ".json";
  fs.writeFileSync(jsonfilename, JSON.stringify(service));

  sh("mkdir", ["-p", BuildDir + "/protos/" + path.dirname(target)]);
  sh(pathToSimpleGeneratorBinary + "simple-generator", ["-d", jsonfilename, "-t", TPLDirSingle + "/single.service.proto.tmpl", ">", BuildDir + "/protos/" + target]);
  if(config.hooks && config.hooks.service_completed){
    sh(config.hooks.service_completed, [path.normalize(jsonfilename),path.normalize(target)]);
  }
}


Servicelist.__bundled.imports = Array.from(Servicelist.__bundled.imports);
Servicelist.__bundled.config = config.bundled;
Servicelist.__bundled.package = config.bundled.package_name;
Servicelist.__bundled.options = config.bundled.proto_options;

let jsonfilename = "./__tmp/_services/" + config.bundled.service_name + ".json";
fs.writeFileSync(jsonfilename, JSON.stringify(Servicelist.__bundled));

if (config.bundled.build) {
  sh("mkdir", ["-p", BuildDir + "/protos/__bundled/"]);
  sh(pathToSimpleGeneratorBinary + "simple-generator", ["-d", jsonfilename, "-t", TPLDirBundled + "/bundled.services.proto.tmpl", ">", BuildDir + "/protos/__bundled/" + config.bundled.service_name + ".proto"])
}


// environment build
let apiSpecs = "";

// add the services
let s = {};

ClientEnv.services.forEach((service) => {
  s[service.name] = service
});
apiSpecs = `export const Services =` + JSON.stringify(s);

let t = {};


ClientEnv.types.forEach((type) => {
  for (let f in type.fields) {
    let field = type.fields[f];
    if (field.meta && !(field.meta.default === null || field.meta.default === undefined)) {

      // convert to Object Literal when Json string was given
      try {
        field.meta.default =   JSON.parse(field.meta.default);
      } catch (e) {

      }

    }
  }
  t[type.__proto.package + "." + type.type] = type
});

apiSpecs += `\nexport const Types =` + JSON.stringify(t);
fs.writeFileSync(BuildDir + "/" + config.furo_env_name, apiSpecs);


// protoc helper
let jsonfile = "./__tmp/protocHelper.sh.json";
fs.writeFileSync(jsonfile, JSON.stringify(protoc));
sh(pathToSimpleGeneratorBinary + "simple-generator", ["-d", jsonfile, "-t", TPLDirBase + "/protocHelper.sh.tmpl", ">", "./__tmp/protocHelper.sh"]);
// make it executable
sh("chmod", ["755", "./__tmp/protocHelper.sh"]);

for (let target in Typelist) {
  sh("./__tmp/protocHelper.sh", [BuildDir + "/protos", target]);
}
for (let target in Servicelist.targets) {
  sh("./__tmp/protocHelper.sh", [BuildDir + "/protos", target]);
}


// build the single gateway
sh("mkdir", ["-p", BuildDir + "/single/pb"]);
sh(pathToSimpleGeneratorBinary + "simple-generator", ["-d", "./__tmp/_services/BundledService.json", "-t", TPLDirBase + "/grpc-gateway/single_transcoder.go.tmpl", ">", BuildDir + "/single/pb/gateway.go"]);

if (config.bundled.build) {
  sh("mkdir", ["-p", BuildDir + "/bundled/pb"]);
  for (let target in Servicelist.targets) {
    sh("./__tmp/protocHelper.sh", [BuildDir + "/protos", "__bundled/" + config.bundled.service_name + ".proto"]);
  }
  // build the bundled gateway
  sh(pathToSimpleGeneratorBinary + "simple-generator", ["-d", "./furo.spec.conf.json", "-t", TPLDirBase + "/grpc-gateway/bundled_transcoder.go.tmpl", ">", BuildDir + "/bundled/pb/gateway.go"])
  sh("cp", ["-r", BuildDir + "/pb/*", BuildDir + "/bundled/pb"]);
}

// clean up
sh("cp", ["-r", BuildDir + "/pb/*", BuildDir + "/single/pb"]);
sh("rm", ["-rf", BuildDir + "/pb"]);
sh("rm", ["-rf", BuildDir + "/single/pb/__bundled"]);

if(config.hooks && config.hooks.build_completed){
  sh(config.hooks.build_completed, [path.normalize(BuildDir)]);
}
