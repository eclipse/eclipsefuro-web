name: Metric
type: Metric
description: |-
    A specific metric, identified by specifying values for all of the
     labels of a [`MetricDescriptor`][google.api.MetricDescriptor].
__proto:
    package: google.api
    targetfile: metric.proto
    imports:
        - google/api/label.proto
        - google/api/launch_stage.proto
        - google/protobuf/duration.proto
    options:
        go_package: google.golang.org/genproto/googleapis/api/metric;metric
        java_multiple_files: "true"
        java_outer_classname: MetricProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    type:
        type: string
        description: |-
            An existing metric type, see [google.api.MetricDescriptor][google.api.MetricDescriptor].
             For example, `custom.googleapis.com/invoice/paid/amount`.
        __proto:
            number: 3
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Metric.type
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    labels:
        type: map<string,string>
        description: |-
            The set of label values that uniquely identify this metric. All
             labels listed in the `MetricDescriptor` must be assigned values.
        __proto:
            number: 2
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Metric.labels
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
