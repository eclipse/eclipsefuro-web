name: Filter
type: Filter
description: Filter root object
lifecycle: null
__proto:
    package: furo.filter
    targetfile: filter.proto
    imports: []
    options:
        cc_enable_arenas: "true"
        csharp_namespace: Furo.Filter
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/furo/filter;filterpb
        java_multiple_files: "true"
        java_outer_classname: FilterProto
        java_package: pro.furo.filter
        objc_class_prefix: FPB
fields:
    clause:
        type: filter.Condition
        description: Root bracket with ors inside, this is the most complex but most flexible way to define a filter
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
