name: EmptyEntity
type: EmptyEntity
description: |
    Entitycontainer which holds a empty entity. So links and meta is all you can send.
    Use this as a create response to send propper HATEOAS back to the client without the need
    to send the complete object.
lifecycle: null
__proto:
    package: furo.signatures
    targetfile: signatures.proto
    imports:
        - furo/furo.proto
    options:
        cc_enable_arenas: "true"
        csharp_namespace: Furo.Signatures
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/furo/signatures;signaturespb
        java_multiple_files: "true"
        java_outer_classname: SignaturesProto
        java_package: pro.furo.signatures
        objc_class_prefix: FPB
fields:
    links:
        type: furo.Link
        description: the Hateoas links
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: furo.signatures.EmptyEntity.links.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    meta:
        type: furo.Meta
        description: Meta for the response
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: furo.signatures.EmptyEntity.meta.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
