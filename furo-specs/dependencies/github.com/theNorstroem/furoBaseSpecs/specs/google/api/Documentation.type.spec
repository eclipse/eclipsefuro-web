name: Documentation
type: Documentation
description: |-
    `Documentation` provides the information for describing a service.

     Example:
     <pre><code>documentation:
       summary: >
         The Google Calendar API gives access
         to most calendar features.
       pages:
       - name: Overview
         content: &#40;== include google/foo/overview.md ==&#41;
       - name: Tutorial
         content: &#40;== include google/foo/tutorial.md ==&#41;
         subpages;
         - name: Java
           content: &#40;== include google/foo/tutorial_java.md ==&#41;
       rules:
       - selector: google.calendar.Calendar.Get
         description: >
           ...
       - selector: google.calendar.Calendar.Put
         description: >
           ...
     </code></pre>
     Documentation is provided in markdown syntax. In addition to
     standard markdown features, definition lists, tables and fenced
     code blocks are supported. Section headers can be provided and are
     interpreted relative to the section nesting of the context where
     a documentation fragment is embedded.

     Documentation from the IDL is merged with documentation defined
     via the config at normalization time, where documentation provided
     by config rules overrides IDL provided.

     A number of constructs specific to the API platform are supported
     in documentation text.

     In order to reference a proto element, the following
     notation can be used:
     <pre><code>&#91;fully.qualified.proto.name]&#91;]</code></pre>
     To override the display text used for the link, this can be used:
     <pre><code>&#91;display text]&#91;fully.qualified.proto.name]</code></pre>
     Text can be excluded from doc using the following notation:
     <pre><code>&#40;-- internal comment --&#41;</code></pre>

     A few directives are available in documentation. Note that
     directives must appear on a single line to be properly
     identified. The `include` directive includes a markdown file from
     an external source:
     <pre><code>&#40;== include path/to/file ==&#41;</code></pre>
     The `resource_for` directive marks a message to be the resource of
     a collection in REST view. If it is not specified, tools attempt
     to infer the resource from the operations in a collection:
     <pre><code>&#40;== resource_for v1.shelves.books ==&#41;</code></pre>
     The directive `suppress_warning` does not directly affect documentation
     and is documented together with service config validation.
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
    summary:
        type: string
        description: |-
            A short summary of what the service does. Can only be provided by
             plain text.
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
            label: label.Documentation.summary
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    pages:
        type: google.api.Page
        description: The top level pages for the documentation set.
        __proto:
            number: 5
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Documentation.pages
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    rules:
        type: google.api.DocumentationRule
        description: |-
            A list of documentation rules that apply to individual API elements.

             **NOTE:** All service configuration rules follow "last one wins" order.
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
            label: label.Documentation.rules
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    documentation_root_url:
        type: string
        description: The URL to the root of documentation.
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
            label: label.Documentation.documentation_root_url
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    service_root_url:
        type: string
        description: |-
            Specifies the service root url if the default one (the service name
             from the yaml file) is not suitable. This can be seen in any fully
             specified service urls as well as sections that show a base that other
             urls are relative to.
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
            label: label.Documentation.service_root_url
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    overview:
        type: string
        description: |-
            Declares a single overview page. For example:
             <pre><code>documentation:
               summary: ...
               overview: &#40;== include overview.md ==&#41;
             </code></pre>
             This is a shortcut for the following declaration (using pages style):
             <pre><code>documentation:
               summary: ...
               pages:
               - name: Overview
                 content: &#40;== include overview.md ==&#41;
             </code></pre>
             Note: you cannot specify both `overview` field and `pages` field.
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
            label: label.Documentation.overview
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
