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
        - google/api/annotations.proto
        - experimentservice/reqmsgs.proto
    options:
        go_package: /experimentservice
        java_multiple_files: "true"
        java_outer_classname: ServiceProto
        java_package: com.example.tutorial.experimentservice
services:
    List:
        description: The List method takes zero or more parameters as input, and returns a ExperimentCollection of ExperimentEntity that match the input parameters.
        data:
            request: google.protobuf.Empty
            response: experiment.ExperimentCollection
            bodyfield: body
        deeplink:
            description: 'List: GET /mockdata/experiments google.protobuf.Empty , experiment.ExperimentCollection #The List method takes zero or more parameters as input, and returns a ExperimentCollection of ExperimentEntity that match the input parameters.'
            href: /mockdata/experiments
            method: GET
            rel: list
        query:
            q:
                constraints: {}
                description: Query term to search a experiment
                meta:
                    default: ""
                    placeholder: ""
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
            bodyfield: body
        deeplink:
            description: 'Create: POST /mockdata/experiments experiment.Experiment , experiment.ExperimentEntity #Creates a new Experiment'
            href: /mockdata/experiments
            method: POST
            rel: create
        query: {}
        rpc_name: CreateExperiment
    Get:
        description: The Get method takes zero or more parameters, and returns a ExperimentEntity which contains a Experiment
        data:
            request: google.protobuf.Empty
            response: experiment.ExperimentEntity
            bodyfield: body
        deeplink:
            description: 'Get: GET /mockdata/experiments/{exp}/get.json google.protobuf.Empty , experiment.ExperimentEntity #The Get method takes zero or more parameters, and returns a ExperimentEntity which contains a Experiment'
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
            bodyfield: body
        deeplink:
            description: 'Update: PATCH /mockdata/experiments/{exp} experiment.Experiment , experiment.ExperimentEntity #Updates a Experiment, partial updates are supported'
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
            bodyfield: body
        deeplink:
            description: 'Delete: DELETE /mockdata/experiments/{exp} google.protobuf.Empty , google.protobuf.Empty #Delete a Experiment'
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
            bodyfield: body
        deeplink:
            description: 'Release: POST /mockdata/experiments/1:release experiment.ExperimentEntity , google.protobuf.Empty #Releases experiment'
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
            bodyfield: body
        deeplink:
            description: 'CreateTemplate: POST /mockdata/experiments:createtemplate google.protobuf.Empty , experiment.Experiment #create an experiment template'
            href: /mockdata/experiments:createtemplate
            method: POST
            rel: createtemplate
        query: {}
        rpc_name: CreateTemplateExperiment
