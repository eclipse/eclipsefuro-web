#! /bin/bash

mkdir -p build/protos/bundled
# https://github.com/gogo/protobuf/issues/32
 simple-generator -d _tmp/services.json  -t _scripts/templates/bundled.services.proto.tmpl > build/protos/bundled/services.proto
 simple-generator -d _tmp/types.json  -t _scripts/templates/bundled.messages.proto.tmpl > build/protos/bundled/messages.proto

