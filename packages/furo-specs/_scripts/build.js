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

const ClientEnv = {services:[], types:[]};
let cwd = process.cwd();
if (BuildDir.search(cwd) === -1) {
    // buildpath outside cwd
    console.log(BuildDir + "\nbuildpath outside current working directory, this is to dangerous, because we delete some files. Please update the config");
    process.exit(1);
}
// clean the build folder
sh("rm -rf", [BuildDir + "/*"]);
sh("mkdir -p", [BuildDir]);


function sh(command, arguments) {
    execSync(command + " " + arguments.join(" "), {stdio: 'inherit'});
}

// Build up the file list
sh(__dirname + "/createSpecList.sh", [config.spec_dir, __dirname + "/../_baseTypes"]);

// read the list with the filenames and build the main structure

const speclist = JSON.parse(fs.readFileSync("./__tmp/speclist.json"));
const Typelist = {};
const Servicelist = {"__bundled": {"imports": new Set, "groupedservices": []}, "targets": {}};


speclist.types.forEach((filename) => {
    let spec = JSON.parse(fs.readFileSync(filename));
    let target = spec.__proto.package.replace(".", "/") + "/" + spec.__proto.targetfile;
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

    // remove package internal type calls like person.Person => Person

    for (let f in spec.fields) {
        let field = spec.fields[f];
        //types, proto.types and map_to
        field.type = field.type.replace(Typelist[target].package + ".", "");
        if (field.__proto && field.__proto.type) {
            field.__proto.type = field.__proto.type.replace(Typelist[target].package + ".", "");
        }
        if (field.__proto && field.__proto.map_to) {
            field.__proto.map_to = field.__proto.map_to.replace(Typelist[target].package + ".", "");
        }
    }
    ClientEnv.types.push(spec);
    Typelist[target].types.push(spec);

});
// obj to create the protocHelper.sh
let protoc = {mod: [], protoc_I: config.protoc_I, protoc_M: config.protoc_M, config: config};
for (let target in Typelist) {
    // make array from import set
    let type = Typelist[target];
    type.imports = Array.from(type.imports);
    // fill protoc file
    protoc.mod.push({"file": target, package: type.package.replace(".","/")});

    // Write json files for messages
    sh("mkdir", ["-p", "./__tmp/_types/" + path.dirname(target)]);
    let jsonfilename = "./__tmp/_types/" + target + ".json";
    fs.writeFileSync(jsonfilename, JSON.stringify(type));
    sh("mkdir", ["-p", BuildDir + "/protos/" + path.dirname(target)]);
    sh("simple-generator", ["-d", jsonfilename, "-t", TPLDirSingle + "/single.message.proto.tmpl", ">", BuildDir + "/protos/" + target])
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
    sh("simple-generator", ["-d", jsonfilename, "-t", TPLDirSingle + "/single.service.proto.tmpl", ">", BuildDir + "/protos/" + target])
}

if (config.bundled.build) {
    Servicelist.__bundled.imports = Array.from(Servicelist.__bundled.imports);
    Servicelist.__bundled.config = config.bundled;
    Servicelist.__bundled.package = config.bundled.package_name;
    Servicelist.__bundled.options = config.bundled.proto_options;
    let jsonfilename = "./__tmp/_services/" + config.bundled.service_name + ".json";
    fs.writeFileSync(jsonfilename, JSON.stringify(Servicelist.__bundled));
    sh("mkdir", ["-p", BuildDir + "/protos/__bundled/"]);
    sh("simple-generator", ["-d", jsonfilename, "-t", TPLDirBundled + "/bundled.services.proto.tmpl", ">", BuildDir + "/protos/__bundled/" + config.bundled.service_name + ".proto"])
}



// environment build
let apiSpecs = "";

// add the services
let s = {};

ClientEnv.services.forEach((service)=>{
    s[service.name] = service
});
apiSpecs = `export const Services =` + JSON.stringify(s);

let t = {};


ClientEnv.types.forEach((type)=>{
    t[type.__proto.package + "." + type.type] = type
});

apiSpecs += `\nexport const Types =` + JSON.stringify(t);
fs.writeFileSync(BuildDir+ "/" + config.furo_env_name , apiSpecs);





// protoc helper
let jsonfile = "./__tmp/protocHelper.sh.json";
fs.writeFileSync(jsonfile, JSON.stringify(protoc));
sh("simple-generator", ["-d", jsonfile, "-t", TPLDirBase + "/protocHelper.sh.tmpl", ">", "./__tmp/protocHelper.sh"]);
// make it executable
sh("chmod", ["755", "./__tmp/protocHelper.sh"]);

for (let target in Typelist) {
    sh("./__tmp/protocHelper.sh", [BuildDir + "/protos", target]);
}
for (let target in Servicelist.targets) {
    sh("./__tmp/protocHelper.sh", [BuildDir + "/protos", target]);
}
if (config.bundled.build) {
    for (let target in Servicelist.targets) {
        sh("./__tmp/protocHelper.sh", [BuildDir + "/protos", "__bundled/" + config.bundled.service_name + ".proto"]);
    }
}