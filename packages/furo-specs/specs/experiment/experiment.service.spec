name: ExperimentService
version: 0.0.1
description: service specs for the experiment api
lifecycle:
    deprecated: false
    info: This version is still valid
__proto:
    package: experimentservice
    targetfile: service.proto
    imports:
        - experiment/experiment.proto
        - google/protobuf/empty.proto
    options:
        go_package: /experimentservice
services:
    List:
        description: The List method takes zero or more parameters as input, and returns a ExperimentCollection of ExperimentEntity that match the input parameters.
        data:
            request: ""
            response: experiment.ExperimentCollection
            bodyfield: ""
        deeplink:
            description: Describe_the_query_params_if_you_have
            href: /mockdata/experiments
            method: GET
            rel: list
        query:
            q:
                constraints: {}
                description: Query term to search a experiment
                meta:
                    default: ""
                    hint: ""
                    label: Search
                    options: null
                    readonly: false
                    repeated: false
                    typespecific: null
                type: string
        rpc_name: ListExperiments
    Create:
        description: Creates a new Experiment
        data:
            request: experiment.Experiment
            response: experiment.ExperimentEntity
            bodyfield: ""
        deeplink:
            description: ""
            href: /mockdata/experiments
            method: POST
            rel: create
        query: {}
        rpc_name: CreateExperiment
    Get:
        description: The Get method takes zero or more parameters, and returns a ExperimentEntity which contains a Experiment
        data:
            request: ""
            response: experiment.ExperimentEntity
            bodyfield: ""
        deeplink:
            description: ""
            href: /mockdata/experiments/{exp}/get.json
            method: GET
            rel: self
        query: {}
        rpc_name: GetExperiment
    Update:
        description: Updates a Experiment, partial updates are supported
        data:
            request: experiment.Experiment
            response: experiment.ExperimentEntity
            bodyfield: ""
        deeplink:
            description: ""
            href: /mockdata/experiments/{exp}
            method: PATCH
            rel: update
        query: {}
        rpc_name: UpdateExperiment
    Delete:
        description: Delete a Experiment
        data:
            request: google.protobuf.Empty
            response: google.protobuf.Empty
            bodyfield: ""
        deeplink:
            description: ""
            href: /mockdata/experiments/{exp}
            method: DELETE
            rel: delete
        query: {}
        rpc_name: DeleteExperiment
    Release:
        description: Releases experiment
        data:
            request: experiment.ExperimentEntity
            response: google.protobuf.Empty
            bodyfield: ""
        deeplink:
            description: ""
            href: /mockdata/experiments/1:release
            method: POST
            rel: release
        query: {}
        rpc_name: ReleaseExperiment
    CreateTemplate:
        description: create an experiment template
        data:
            request: google.protobuf.Empty
            response: experiment.Experiment
            bodyfield: ""
        deeplink:
            description: ""
            href: /mockdata/experiments:createtemplate
            method: POST
            rel: createtemplate
        query: {}
        rpc_name: CreateTemplateExperiment
