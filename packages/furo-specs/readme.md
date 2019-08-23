# furo spec builder
## Prequisits
`simple-generator` has to be installed. Quick installation: `go get github.com/veith/simple-generator` .

## Manual Installation
- Run `npm install --save-dev @furo/spec` to install the tools.
- Add a `furo.spec.conf.json` to the root folder of your spec project. 
  An example of a config file can be found in the `~/node_modules/@furo/spec/` folder. 

> **TIPP** copy the example file, remove the packages, add your packages.
    

## Usage

To add packages, just add them in the packages section of the conf. 
You can run `initFromConf.sh` to generate a initial structure for a package spec. 
This consists of the *minimal type*, a *minimal service definition*, a *default entity spec*
and a *default collection spec*     

> **TIPP** Add the scripts to your package.json so you can run `npm run init` , `npm run build`,... 
> 
## Config


- `packages` The name of the packages you use. This will be used for the protoc, swagger, specs folderstructure,... If your specs already exist, the init scripts wont touch them.
- `spec_dir` Path to your spec directory.
- `custom_template_dir` If you want to use your own templates, set the path to your template directory relative from your project root. You have to supply all templates if you use this feature flag.
- `swagger` Generate swagger out when true 
- `java` Generate java stubs. 
- `grpc_gateway` Not yet implemented 
- `build_output_dir` Specify the directory for the build output. 
- `bundled` Options for the bundled build
    - `build` Set to true to generate and build a bundled version.
    - `package_name` The name will be used as packagename for the bundled build.
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
  "packages": [
    "person",
    "project",
    "task",
    "tree",
    "experimental"
  ],
  "spec_dir": "specs",
  "custom_tepmplate_dir": "./_myTempls",
  "swagger": true,
  "grpc_gateway": true,
  "java": true,
  "build_output_dir": "./build",
  "bundled": {
    "build": true,
    "package_name": "com.acme.api",
    "service_name": "BundledService",
    "proto_options": {
      "csharp_namespace": "Google.Protobuf.WellKnownTypes",
      "go_package": "github.com/golang/protobuf/ptypes/any",
      "java_package": "com.acme",
      "java_outer_classname": "AnyProto",
      "java_multiple_files": true,
      "objc_class_prefix": "GPB"
    },
    "imports":  {
      "service" : [
         "google/api/annotations.proto",
         "messages.proto",
         "protobuf/empty.proto"
      ],
      "messages": [
        "google/protobuf/any.proto",
        "furo/meta.proto",
        "furo/link.proto"
      ]
    }
  },
  "single": {
    "build": true
  },
  "protoc_I": [
    "/usr/local/include",
    "../google",
    "../furo",
    "$GOPATH/src",
    "$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis"
  ],
  "protoc_M": [
    "protobuf/any.proto=github.com/gogo/protobuf/types",
    "protobuf/duration.proto=github.com/gogo/protobuf/types",
    "protobuf/struct.proto=github.com/gogo/protobuf/types",
    "protobuf/timestamp.proto=github.com/gogo/protobuf/types",
    "protobuf/wrappers.proto=github.com/gogo/protobuf/types",
    "furo/link.proto=../furo",
    "furo/meta.proto=../furo",
    "google/date.proto=../google",
    "google/money.proto=../google",
    "protobuf/empty.proto=../protobuf",
    "protobuf/any.proto=../protobuf"
  ]
}

```
