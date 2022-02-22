name: OAuthRequirements
type: OAuthRequirements
description: |-
    OAuth scopes are a way to define data and permissions on data. For example,
     there are scopes defined for "Read-only access to Google Calendar" and
     "Access to Cloud Platform". Users can consent to a scope for an application,
     giving it permission to access that data on their behalf.

     OAuth scope specifications should be fairly coarse grained; a user will need
     to see and understand the text description of what your scope means.

     In most cases: use one or at most two OAuth scopes for an entire family of
     products. If your product has multiple APIs, you should probably be sharing
     the OAuth scope across all of those APIs.

     When you need finer grained OAuth consent screens: talk with your product
     management about how developers will use them in practice.

     Please note that even though each of the canonical scopes is enough for a
     request to be accepted and passed to the backend, a request can still fail
     due to the backend requiring additional scopes or permissions.
__proto:
    package: google.api
    targetfile: auth.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: AuthProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    canonical_scopes:
        type: string
        description: |-
            The list of publicly documented OAuth scopes that are allowed access. An
             OAuth token containing any of these scopes will be accepted.

             Example:

                  canonical_scopes: https://www.googleapis.com/auth/calendar,
                                    https://www.googleapis.com/auth/calendar.read
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
            label: label.OAuthRequirements.canonical_scopes
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
