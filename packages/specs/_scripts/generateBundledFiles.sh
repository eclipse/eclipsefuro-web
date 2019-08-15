#! /bin/bash

# https://github.com/gogo/protobuf/issues/325
 simple-generator -d _tmp/services.json  -t _scripts/templates/bundled.services.proto.tmpl > build/protos/bundled_services.proto
 simple-generator -d _tmp/types.json -t _scripts/templates/bundled.messages.proto.tmpl > build/protos/bundled_messages.proto

