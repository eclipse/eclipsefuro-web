#! /bin/bash

if [ -z "$1" ]
then
  echo 'missing argument, package folder is required'
exit 1
fi

PACKAGE=$1
if [ ! -d build/protos/$PACKAGE ]
then
    echo "Package folder /build/protos/$PACKAGE DOES NOT exists."
    exit 1
fi
# https://github.com/gogo/protobuf/issues/325
cd build/protos/$PACKAGE
mkdir -p ../../pb/$PACKAGE
mkdir -p ../../java/$PACKAGE
mkdir -p ../../swagger/$PACKAGE

protoc --proto_path=../ \
-I. \
-I/usr/local/include \
-I../google \
-I../furo \
-I../project \
-I../task \
-I../tree \
-I../person \
-I$GOPATH/src \
-I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
--gogofast_out=.\
Mprotobuf/any.proto=github.com/gogo/protobuf/types,\
Mprotobuf/duration.proto=github.com/gogo/protobuf/types,\
Mprotobuf/struct.proto=github.com/gogo/protobuf/types,\
Mprotobuf/timestamp.proto=github.com/gogo/protobuf/types,\
Mprotobuf/wrappers.proto=github.com/gogo/protobuf/types,\
Mfuro/link.proto=../furo,\
Mfuro/meta.proto=../furo,\
Mgoogle/date.proto=../google,\
Mgoogle/money.proto=../google,\
Mprotobuf/empty.proto=../protobuf,\
Mprotobuf/any.proto=../protobuf,\
Mperson/person.proto=../person,\
Mtask/task.proto=../task,\
Mtree/tree.proto=../tree,\
Mproject/project.proto=../project,\
plugins=grpc:../../pb/$PACKAGE \
--swagger_out=logtostderr=true:../../swagger/$PACKAGE \
--java_out=../../java/ \
--grpc-gateway_out=logtostderr=true:../../pb/$PACKAGE \
*.proto
