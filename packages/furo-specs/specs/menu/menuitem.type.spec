name: menuitem
type: Menuitem
description: Item of a contextual menu
__proto:
    package: menu
    targetfile: menu.proto
    imports:
        - google/protobuf/any.proto
    options:
        java_outer_classname: MenuApi
        java_package: com.acme.menu
fields:
    icon:
        type: string
        description: Leading icon of the menu
        __proto:
            number: 1
            oneof: ""
        __ui: null
        meta: null
        constraints: {}
    display_name:
        type: string
        description: String representation of the menu item. Menu item text
        __proto:
            number: 2
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: ""
            options: null
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
    disabled:
        type: bool
        description: Display actions as disabled when they can only be used sometimes, under certain conditions. They should be displayed as disabled rather than removing them.
        __proto:
            number: 3
            oneof: ""
        __ui: null
        meta:
            default: "false"
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    command:
        type: string
        description: Keyboard command hint
        __proto:
            number: 4
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    action:
        type: string
        description: String representation of the menu item action
        __proto:
            number: 5
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    leading_divider:
        type: bool
        description: Item has a leading divider line
        __proto:
            number: 6
            oneof: ""
        __ui: null
        meta:
            default: "false"
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    children:
        type: menu.Menuitem
        description: Children of this item
        __proto:
            number: 7
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    flags:
        type: string
        description: Attribute flags e.g. important, negative, positive
        __proto:
            number: 8
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: ""
            options: null
            readonly: true
            repeated: true
            typespecific: null
        constraints: {}
    payload:
        type: google.protobuf.Any
        description: Optional payload
        __proto:
            number: 9
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: ""
            options: null
            readonly: true
            repeated: true
            typespecific: null
        constraints: {}
