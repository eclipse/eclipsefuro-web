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
    options:
        go_package: /UniversaltestService
services:
    Create:
        description: Creates a new universaltest
        data:
            request: universaltest.Universaltest
            response: universaltest.UniversaltestEntity
            bodyfield: ""
        deeplink:
            description: ""
            href: /mockdata/universaltests
            method: POST
            rel: create
        query: {}
        rpc_name: Createuniversaltest
