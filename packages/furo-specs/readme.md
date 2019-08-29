# furo spec builder
## Prequisits
If you have Go installed

`simple-generator` has to be installed. Quick installation: `go get github.com/veith/simple-generator` .

if not: https://golang.org/doc/install

## Manual Installation
- mkdir my-spec-project
- cd my-spec-project
- npm init
- Run `npm install --save-dev @furo/specs` to install the tools.
- Add a `furo.spec.conf.json` to the root folder of your spec project. 
  An example of a config file can be found in the `~/node_modules/@furo/spec/` folder. 

> **TIPP** copy the example file, remove the packages, add your packages.
    

## Usage

To add packages, just add them in the packages section of the conf. 
Then run 
```shell script
./node_modules/@furo/specs/_scripts/init.js
```
to generate a initial structure for a spec. 
This consists of the *minimal type*, a *minimal service definition*, a *default entity spec*
and a *default collection spec*    

To build the furo data_environment.js, the swagger docs, the golang files for the grpc-gateway and the java interfaces run.

```shell script
./node_modules/@furo/specs/_scripts/build.js
```

## Preinstalled base types

Following base types are available by default:

- **furo.link** The default link type for HATEOAS links
- **furo.meta** Meta information for the single fields
- **furo.type.reference** A type to set a reference to another entity
- **google.protobuf.any** The any type, can be any type you make
- **google.type.date**  A type for handling dates (not datetime)
- **google.type.money**  A type for handling money
- **protobuf.empty**  A empty type which contains nothing
 

> **TIPP** Add the scripts to your package.json so you can run `npm run init` , `npm run build`,... 
>
 ```json
{ 
  "scripts": {
    "build": "node ./node_modules/@furo/specs/_scripts/build.js",
    "init": "node ./node_modules/@furo/specs/_scripts/init.js"
  }
}
```
## Config

- `init` This section is used to configure the init process
- `init.packages` The name of the packages you use. This will be used for the protoc, swagger, specs folderstructure,... If your specs already exist, the init scripts wont touch them.
- `init.excludes` The name of the packages you will skip.
- `ìnit.default_type_for_identities` Set here the identity type you want. Default value if not set: string
- `path_to_simplegenerator` Set the path to your simple-generator binary if you don't have a local environment e.g. ./bin/
- `spec_dir` Path to your spec directory.
- `custom_template_dir` If you want to use your own templates, set the path to your template directory relative from your project root. You have to supply all templates if you use this feature flag.
- `swagger` Generate swagger out when true 
- `java` Generate java stubs. 
- `grpc_gateway` Not yet implemented 
- `build_output_dir` Specify the directory for the build output. 
- `bundled` Options for the bundled build
    - `build` Set to true to generate and build a bundled version.
    - `package_name` The name will be used as package name for the bundled build.
    - `service_name` Name for your bundled service.
    - `proto_options` Individual declarations in a .proto file can be annotated here. [more about](https://developers.google.com/protocol-buffers/docs/proto3#options)
    - `imports` Add your imports for the service.proto and messages.proto
- `single` Options for the multifile build.
    - `build` Set to true to generate a multifile version
- `protoc_I` Additional protoc IMPORT_PATHs
- `protoc_M` Declares that furo/link.proto is associated with Go package ../furo. Add additional assocs here.   

## Example config

```json
{
  "init": {
    "packages": [
      "person",
      "project",
      "task",
      "tree",
      "experiment"
    ],
    "excludes": [],
    "default_type_for_identities": "string"
  },
  "path_to_simplegenerator": "./bin/simple-generator_linux_amd64",
  "spec_dir": "./specs",
  "_custom_tepmplate_dir": "./_scripts/templates",
  "swagger": true,
  "grpc_gateway": true,
  "java": true,
  "build_output_dir": "./build",
  "furo_env_name": "data_environment.js",
  "bundled": {
    "build": true,
    "package_name": "taskmanager",
    "service_name": "BundledService",
    "proto_options": {
      "csharp_namespace": "Google.Protobuf.WellKnownTypes",
      "go_package": "taskmanager",
      "java_package": "taskmanager",
      "java_outer_classname": "AnyProto",
      "java_multiple_files": true,
      "objc_class_prefix": "GPB"
    },
    "imports": [
      "google/protobuf/empty.proto",
      "google/protobuf/any.proto",
      "google/type/money.proto",
      "google/type/date.proto",
      "furo/link.proto",
      "furo/meta.proto",
      "furo/reference.proto"
    ]
  },
  "protoc_I": [
    "/usr/local/include",
    "$GOPATH/src",
    "$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis"
  ],
  "protoc_M": [
    "google/protobuf/any.proto=github.com/gogo/protobuf/types",
    "protobuf/duration.proto=github.com/gogo/protobuf/types",
    "protobuf/struct.proto=github.com/gogo/protobuf/types",
    "protobuf/timestamp.proto=github.com/gogo/protobuf/types",
    "protobuf/wrappers.proto=github.com/gogo/protobuf/types"
  ]
}


```
## Hooks
coming soon