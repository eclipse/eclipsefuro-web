#! /bin/bash

if [ -z "$1" ]
then
  echo 'missing argument, package folder is required'
exit 1
fi

BUILDPATHPROTOS=$1
if [ ! -d $BUILDPATHPROTOS ]
then
    echo "Package folder /$BUILDPATHPROTOS DOES NOT exists."
    exit 1
fi
# https://github.com/gogo/protobuf/issues/325
cd $BUILDPATHPROTOS
mkdir -p ../../pb/
mkdir -p ../../java/
mkdir -p ../../swagger/

# Include all baseTypes
protoc --proto_path=../ \
-I. \
-I/usr/local/include \
-I../google \
-I../furo \
-I$GOPATH/src \
-I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
--gogofast_out=.\
Mprotobuf/any.proto=github.com/gogo/protobuf/types,\
Mprotobuf/duration.proto=github.com/gogo/protobuf/types,\
Mprotobuf/struct.proto=github.com/gogo/protobuf/types,\
Mprotobuf/timestamp.proto=github.com/gogo/protobuf/types,\
Mprotobuf/wrappers.proto=github.com/gogo/protobuf/types,\
Mgoogle/date.proto=../google,\
Mgoogle/money.proto=../google,\
Mfuro/link.proto=../furo,\
Mfuro/meta.proto=../furo,\
Mgoogle/protobuf/empty.proto=../google/protobuf,\
Mgoogle/protobuf/any.proto=../google/protobuf,\
plugins=grpc:../../pb/ \
--swagger_out=logtostderr=true:../../swagger/ \
--java_out=../../java/ \
--grpc-gateway_out=logtostderr=true:../../pb/ \
*.proto
