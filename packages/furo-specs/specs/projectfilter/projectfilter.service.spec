name: ProjectfilterService
version: 0.0.1
description: service specs for the projectfilter api
lifecycle:
    deprecated: false
    info: This version is still valid
__proto:
    package: projectfilterservice
    targetfile: projectfilterservice.proto
    imports:
        - projectfilter/projectfilter.proto
        - google/protobuf/empty.proto
    options:
        go_package: /projectfilterservice
services:
    Get:
        description: The Get method takes zero or more parameters, and returns a ProjectfilterEntity which contains a Projectfilter
        data:
            request: ""
            response: projectfilter.ProjectfilterEntity
            bodyfield: ""
        deeplink:
            description: ""
            href: /mockdata/projects/filter/get.json
            method: GET
            rel: self
        query: {}
        rpc_name: GetProjectfilter
