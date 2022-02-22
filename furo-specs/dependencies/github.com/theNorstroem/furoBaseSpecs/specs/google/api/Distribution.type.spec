name: Distribution
type: Distribution
description: |-
    `Distribution` contains summary statistics for a population of values. It
     optionally contains a histogram representing the distribution of those values
     across a set of buckets.

     The summary statistics are the count, mean, sum of the squared deviation from
     the mean, the minimum, and the maximum of the set of population of values.
     The histogram is based on a sequence of buckets and gives a count of values
     that fall into each bucket. The boundaries of the buckets are given either
     explicitly or by formulas for buckets of fixed or exponentially increasing
     widths.

     Although it is not forbidden, it is generally a bad idea to include
     non-finite values (infinities or NaNs) in the population of values, as this
     will render the `mean` and `sum_of_squared_deviation` fields meaningless.
__proto:
    package: google.api
    targetfile: distribution.proto
    imports:
        - google/protobuf/any.proto
        - google/protobuf/timestamp.proto
    options:
        go_package: google.golang.org/genproto/googleapis/api/distribution;distribution
        java_multiple_files: "true"
        java_outer_classname: DistributionProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    count:
        type: int64
        description: |-
            The number of values in the population. Must be non-negative. This value
             must equal the sum of the values in `bucket_counts` if a histogram is
             provided.
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
            label: label.Distribution.count
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    mean:
        type: double
        description: |-
            The arithmetic mean of the values in the population. If `count` is zero
             then this field must be zero.
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
            label: label.Distribution.mean
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    sum_of_squared_deviation:
        type: double
        description: |-
            The sum of squared deviations from the mean of the values in the
             population. For values x_i this is:

                 Sum[i=1..n]((x_i - mean)^2)

             Knuth, "The Art of Computer Programming", Vol. 2, page 232, 3rd edition
             describes Welford's method for accumulating this sum in one pass.

             If `count` is zero then this field must be zero.
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
            label: label.Distribution.sum_of_squared_deviation
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    range:
        type: google.api.Distribution.Range
        description: |-
            If specified, contains the range of the population values. The field
             must not be present if the `count` is zero.
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
            label: label.Distribution.range
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    bucket_options:
        type: google.api.Distribution.BucketOptions
        description: |-
            Defines the histogram bucket boundaries. If the distribution does not
             contain a histogram, then omit this field.
        __proto:
            number: 6
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Distribution.bucket_options
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    bucket_counts:
        type: int64
        description: |-
            The number of values in each bucket of the histogram, as described in
             `bucket_options`. If the distribution does not have a histogram, then omit
             this field. If there is a histogram, then the sum of the values in
             `bucket_counts` must equal the value in the `count` field of the
             distribution.

             If present, `bucket_counts` should contain N values, where N is the number
             of buckets specified in `bucket_options`. If you supply fewer than N
             values, the remaining values are assumed to be 0.

             The order of the values in `bucket_counts` follows the bucket numbering
             schemes described for the three bucket types. The first value must be the
             count for the underflow bucket (number 0). The next N-2 values are the
             counts for the finite buckets (number 1 through N-2). The N'th value in
             `bucket_counts` is the count for the overflow bucket (number N-1).
        __proto:
            number: 7
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Distribution.bucket_counts
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    exemplars:
        type: google.api.Distribution.Exemplar
        description: Must be in increasing order of `value` field.
        __proto:
            number: 10
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Distribution.exemplars
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
