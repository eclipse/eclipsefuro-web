name: meta
type: Meta
description: meta info
lifecycle: null
__proto:
    package: furo
    targetfile: furo.proto
    imports: []
    options:
        cc_enable_arenas: "true"
        csharp_namespace: Furo
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/furo;furopb
        java_multiple_files: "true"
        java_outer_classname: FuroProto
        java_package: pro.furo
        objc_class_prefix: FPB
fields:
    fields:
        type: map<string, furo.MetaField>
        description: fields of meta info
        __proto:
            number: 1
        __ui: null
        meta: null
        constraints: {}
