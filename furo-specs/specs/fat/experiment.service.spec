name: UniversaltestService
version: 0.0.1
description: service specs for the universaltest api
lifecycle:
    deprecated: false
    info: This version is still valid
__proto:
    package: UniversaltestService
    targetfile: universaltestservice.proto
    imports:
        - universaltest/universaltest.proto
        - google/protobuf/empty.proto
        - fat/universaltest.proto
        - google/api/annotations.proto
        - UniversaltestService/reqmsgs.proto
    options:
        go_package: /UniversaltestService
        java_multiple_files: "true"
        java_outer_classname: UniversaltestserviceProto
        java_package: com.example.tutorial.UniversaltestService
services:
    Create:
        description: Creates a new universaltest
        data:
            request: universaltest.Universaltest
            response: universaltest.UniversaltestEntity
            bodyfield: body
        deeplink:
            description: 'Create: POST /mockdata/universaltests universaltest.Universaltest , universaltest.UniversaltestEntity #Creates a new universaltest'
            href: /mockdata/universaltests
            method: POST
            rel: create
        query: {}
        rpc_name: Createuniversaltest
