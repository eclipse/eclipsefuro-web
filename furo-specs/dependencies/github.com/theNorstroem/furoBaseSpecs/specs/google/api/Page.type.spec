name: Page
type: Page
description: |-
    Represents a documentation page. A page can contain subpages to represent
     nested documentation set structure.
__proto:
    package: google.api
    targetfile: documentation.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: DocumentationProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    name:
        type: string
        description: |-
            The name of the page. It will be used as an identity of the page to
             generate URI of the page, text of the link to this page in navigation,
             etc. The full page name (start from the root page name to this page
             concatenated with `.`) can be used as reference to the page in your
             documentation. For example:
             <pre><code>pages:
             - name: Tutorial
               content: &#40;== include tutorial.md ==&#41;
               subpages:
               - name: Java
                 content: &#40;== include tutorial_java.md ==&#41;
             </code></pre>
             You can reference `Java` page using Markdown reference link syntax:
             `[Java][Tutorial.Java]`.
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
            label: label.Page.name
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    content:
        type: string
        description: |-
            The Markdown content of the page. You can use <code>&#40;== include {path}
             ==&#41;</code> to include content from a Markdown file.
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
            label: label.Page.content
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    subpages:
        type: google.api.Page
        description: |-
            Subpages of this page. The order of subpages specified here will be
             honored in the generated docset.
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
            label: label.Page.subpages
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
