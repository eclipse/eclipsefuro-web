name: metafield
type: MetaField
description: fields of meta info
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
    meta:
        type: furo.FieldMeta
        description: meta informatioxn of a field
        __proto:
            number: 1
        __ui: null
        meta: null
        constraints: {}
    constraints:
        type: map<string,furo.FieldConstraint>
        description: constraints for a field
        __proto:
            number: 2
        __ui: null
        meta: null
        constraints: {}
