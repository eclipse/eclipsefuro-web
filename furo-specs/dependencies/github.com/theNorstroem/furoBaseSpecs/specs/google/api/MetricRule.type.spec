name: MetricRule
type: MetricRule
description: |-
    Bind API methods to metrics. Binding a method to a metric causes that
     metric's configured quota behaviors to apply to the method call.
__proto:
    package: google.api
    targetfile: quota.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: QuotaProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    selector:
        type: string
        description: |-
            Selects the methods to which this rule applies.

             Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
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
            label: label.MetricRule.selector
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    metric_costs:
        type: google.api.MetricRule.MetricCostsEntry
        description: |-
            Metrics to update when the selected methods are called, and the associated
             cost applied to each metric.

             The key of the map is the metric name, and the values are the amount
             increased for the metric against which the quota limits are defined.
             The value must not be negative.
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
            label: label.MetricRule.metric_costs
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
