name: Quota
type: Quota
description: |+
    Quota configuration helps to achieve fairness and budgeting in service
     usage.

     The metric based quota configuration works this way:
     - The service configuration defines a set of metrics.
     - For API calls, the quota.metric_rules maps methods to metrics with
       corresponding costs.
     - The quota.limits defines limits on the metrics, which will be used for
       quota checks at runtime.

     An example quota configuration in yaml format:

        quota:
          limits:

          - name: apiWriteQpsPerProject
            metric: library.googleapis.com/write_calls
            unit: "1/min/{project}"  # rate limit for consumer projects
            values:
              STANDARD: 10000


          # The metric rules bind all methods to the read_calls metric,
          # except for the UpdateBook and DeleteBook methods. These two methods
          # are mapped to the write_calls metric, with the UpdateBook method
          # consuming at twice rate as the DeleteBook method.
          metric_rules:
          - selector: "*"
            metric_costs:
              library.googleapis.com/read_calls: 1
          - selector: google.example.library.v1.LibraryService.UpdateBook
            metric_costs:
              library.googleapis.com/write_calls: 2
          - selector: google.example.library.v1.LibraryService.DeleteBook
            metric_costs:
              library.googleapis.com/write_calls: 1

      Corresponding Metric definition:

          metrics:
          - name: library.googleapis.com/read_calls
            display_name: Read requests
            metric_kind: DELTA
            value_type: INT64

          - name: library.googleapis.com/write_calls
            display_name: Write requests
            metric_kind: DELTA
            value_type: INT64

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
    limits:
        type: google.api.QuotaLimit
        description: List of `QuotaLimit` definitions for the service.
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
            label: label.Quota.limits
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    metric_rules:
        type: google.api.MetricRule
        description: |-
            List of `MetricRule` definitions, each one mapping a selected method to one
             or more metrics.
        __proto:
            number: 4
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Quota.metric_rules
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
