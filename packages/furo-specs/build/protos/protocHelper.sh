#! /bin/bash

if [ -z "$2" ]
then
  echo 'missing argument, package folder is required'
exit 1
fi
BUILDPATHPROTOS=$1
THEPROTOFILE=$2

if [ ! -d $BUILDPATHPROTOS ]
then
    echo "Package folder /$BUILDPATHPROTOS DOES NOT exists."
    exit 1
fi
# https://github.com/gogo/protobuf/issues/325
cd $BUILDPATHPROTOS


mkdir -p ../pb/
mkdir -p ../java/
mkdir -p ../swagger/

protoc --proto_path=./ \
-I. \
-I/usr/local/include \
-I./google \
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
Mgoogle/type/date.proto=../google/type,\
Mgoogle/type/money.proto=../google/type,\
Mprotobuf/empty.proto=../protobuf,\
Mperson/person.proto=../person,\
Mproject/project.proto=../project,\
Mtask/task.proto=../task,\
Mtree/tree.proto=../tree,\
Mexperiment/experiment.proto=../experiment,\
Mprojectmember/projectmember.proto=../projectmember,\
plugins=grpc:../pb/ \--swagger_out=logtostderr=true:../swagger/ \--java_out=../java/ \--grpc-gateway_out=logtostderr=true:../pb/ \
$THEPROTOFILE
