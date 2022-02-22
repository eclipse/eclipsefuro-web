name: Condition
type: Condition
description: Filter condition
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
    fld:
        type: string
        description: Field
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
            repeated: false
            typespecific: null
        constraints:
            required:
                is: "true"
                message: fld is required
    is:
        type: string
        description: The comparator like gt, eq,...
        __proto:
            number: 2
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
            repeated: false
            typespecific: null
        constraints: {}
    val:
        type: string
        description: The value as string, parse and convert this for your field
        __proto:
            number: 3
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
            repeated: false
            typespecific: null
        constraints: {}
    aoc:
        type: furo.filter.Condition
        description: |-
            And bracket with ors inside
            Nesting means and, siblings means or
        __proto:
            number: 4
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
