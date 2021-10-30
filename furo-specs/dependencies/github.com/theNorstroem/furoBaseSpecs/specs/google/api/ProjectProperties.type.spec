name: ProjectProperties
type: ProjectProperties
description: |-
    A descriptor for defining project properties for a service. One service may
     have many consumer projects, and the service may want to behave differently
     depending on some properties on the project. For example, a project may be
     associated with a school, or a business, or a government agency, a business
     type property on the project may affect how a service responds to the client.
     This descriptor defines which properties are allowed to be set on a project.

     Example:

        project_properties:
          properties:
          - name: NO_WATERMARK
            type: BOOL
            description: Allows usage of the API without watermarks.
          - name: EXTENDED_TILE_CACHE_PERIOD
            type: INT64
__proto:
    package: google.api
    targetfile: consumer.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: ConsumerProto
        java_package: com.google.api
fields:
    properties:
        type: google.api.Property
        description: List of per consumer project-specific properties.
        __proto:
            number: 1
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.ProjectProperties.properties
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
