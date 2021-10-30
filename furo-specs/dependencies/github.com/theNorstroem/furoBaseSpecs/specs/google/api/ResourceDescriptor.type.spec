name: ResourceDescriptor
type: ResourceDescriptor
description: |-
    A simple descriptor of a resource type.

     ResourceDescriptor annotates a resource message (either by means of a
     protobuf annotation or use in the service config), and associates the
     resource's schema, the resource type, and the pattern of the resource name.

     Example:

         message Topic {
           // Indicates this message defines a resource schema.
           // Declares the resource type in the format of {service}/{kind}.
           // For Kubernetes resources, the format is {api group}/{kind}.
           option (google.api.resource) = {
             type: "pubsub.googleapis.com/Topic"
             name_descriptor: {
               pattern: "projects/{project}/topics/{topic}"
               parent_type: "cloudresourcemanager.googleapis.com/Project"
               parent_name_extractor: "projects/{project}"
             }
           };
         }

     The ResourceDescriptor Yaml config will look like:

         resources:
         - type: "pubsub.googleapis.com/Topic"
           name_descriptor:
             - pattern: "projects/{project}/topics/{topic}"
               parent_type: "cloudresourcemanager.googleapis.com/Project"
               parent_name_extractor: "projects/{project}"

     Sometimes, resources have multiple patterns, typically because they can
     live under multiple parents.

     Example:

         message LogEntry {
           option (google.api.resource) = {
             type: "logging.googleapis.com/LogEntry"
             name_descriptor: {
               pattern: "projects/{project}/logs/{log}"
               parent_type: "cloudresourcemanager.googleapis.com/Project"
               parent_name_extractor: "projects/{project}"
             }
             name_descriptor: {
               pattern: "folders/{folder}/logs/{log}"
               parent_type: "cloudresourcemanager.googleapis.com/Folder"
               parent_name_extractor: "folders/{folder}"
             }
             name_descriptor: {
               pattern: "organizations/{organization}/logs/{log}"
               parent_type: "cloudresourcemanager.googleapis.com/Organization"
               parent_name_extractor: "organizations/{organization}"
             }
             name_descriptor: {
               pattern: "billingAccounts/{billing_account}/logs/{log}"
               parent_type: "billing.googleapis.com/BillingAccount"
               parent_name_extractor: "billingAccounts/{billing_account}"
             }
           };
         }

     The ResourceDescriptor Yaml config will look like:

         resources:
         - type: 'logging.googleapis.com/LogEntry'
           name_descriptor:
             - pattern: "projects/{project}/logs/{log}"
               parent_type: "cloudresourcemanager.googleapis.com/Project"
               parent_name_extractor: "projects/{project}"
             - pattern: "folders/{folder}/logs/{log}"
               parent_type: "cloudresourcemanager.googleapis.com/Folder"
               parent_name_extractor: "folders/{folder}"
             - pattern: "organizations/{organization}/logs/{log}"
               parent_type: "cloudresourcemanager.googleapis.com/Organization"
               parent_name_extractor: "organizations/{organization}"
             - pattern: "billingAccounts/{billing_account}/logs/{log}"
               parent_type: "billing.googleapis.com/BillingAccount"
               parent_name_extractor: "billingAccounts/{billing_account}"

     For flexible resources, the resource name doesn't contain parent names, but
     the resource itself has parents for policy evaluation.

     Example:

         message Shelf {
           option (google.api.resource) = {
             type: "library.googleapis.com/Shelf"
             name_descriptor: {
               pattern: "shelves/{shelf}"
               parent_type: "cloudresourcemanager.googleapis.com/Project"
             }
             name_descriptor: {
               pattern: "shelves/{shelf}"
               parent_type: "cloudresourcemanager.googleapis.com/Folder"
             }
           };
         }

     The ResourceDescriptor Yaml config will look like:

         resources:
         - type: 'library.googleapis.com/Shelf'
           name_descriptor:
             - pattern: "shelves/{shelf}"
               parent_type: "cloudresourcemanager.googleapis.com/Project"
             - pattern: "shelves/{shelf}"
               parent_type: "cloudresourcemanager.googleapis.com/Folder"
__proto:
    package: google.api
    targetfile: resource.proto
    imports:
        - google/protobuf/descriptor.proto
    options:
        cc_enable_arenas: "true"
        go_package: google.golang.org/genproto/googleapis/api/annotations;annotations
        java_multiple_files: "true"
        java_outer_classname: ResourceProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    type:
        type: string
        description: |-
            The resource type. It must be in the format of
             {service_name}/{resource_type_kind}. The `resource_type_kind` must be
             singular and must not include version numbers.

             Example: `storage.googleapis.com/Bucket`

             The value of the resource_type_kind must follow the regular expression
             /[A-Za-z][a-zA-Z0-9]+/. It should start with an upper case character and
             should use PascalCase (UpperCamelCase). The maximum number of
             characters allowed for the `resource_type_kind` is 100.
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
            label: label.ResourceDescriptor.type
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    pattern:
        type: string
        description: |-
            Optional. The relative resource name pattern associated with this resource
             type. The DNS prefix of the full resource name shouldn't be specified here.

             The path pattern must follow the syntax, which aligns with HTTP binding
             syntax:

                 Template = Segment { "/" Segment } ;
                 Segment = LITERAL | Variable ;
                 Variable = "{" LITERAL "}" ;

             Examples:

                 - "projects/{project}/topics/{topic}"
                 - "projects/{project}/knowledgeBases/{knowledge_base}"

             The components in braces correspond to the IDs for each resource in the
             hierarchy. It is expected that, if multiple patterns are provided,
             the same component name (e.g. "project") refers to IDs of the same
             type of resource.
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
            label: label.ResourceDescriptor.pattern
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    name_field:
        type: string
        description: |-
            Optional. The field on the resource that designates the resource name
             field. If omitted, this is assumed to be "name".
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
            label: label.ResourceDescriptor.name_field
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    history:
        type: unknown
        description: |-
            Optional. The historical or future-looking state of the resource pattern.

             Example:

                 // The InspectTemplate message originally only supported resource
                 // names with organization, and project was added later.
                 message InspectTemplate {
                   option (google.api.resource) = {
                     type: "dlp.googleapis.com/InspectTemplate"
                     pattern:
                     "organizations/{organization}/inspectTemplates/{inspect_template}"
                     pattern: "projects/{project}/inspectTemplates/{inspect_template}"
                     history: ORIGINALLY_SINGLE_PATTERN
                   };
                 }
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
            label: label.ResourceDescriptor.history
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    plural:
        type: string
        description: |-
            The plural name used in the resource name and permission names, such as
             'projects' for the resource name of 'projects/{project}' and the permission
             name of 'cloudresourcemanager.googleapis.com/projects.get'. It is the same
             concept of the `plural` field in k8s CRD spec
             https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/

             Note: The plural form is required even for singleton resources. See
             https://aip.dev/156
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
            label: label.ResourceDescriptor.plural
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    singular:
        type: string
        description: |-
            The same concept of the `singular` field in k8s CRD spec
             https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/
             Such as "project" for the `resourcemanager.googleapis.com/Project` type.
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
            label: label.ResourceDescriptor.singular
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    style:
        type: unknown
        description: |-
            Style flag(s) for this resource.
             These indicate that a resource is expected to conform to a given
             style. See the specific style flags for additional information.
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
            label: label.ResourceDescriptor.style
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
