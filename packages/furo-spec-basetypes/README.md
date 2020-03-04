# Furo spec base types

This package contains installable base types for a furo-spec project.

Some packages (like @furo/navigation) also supply installable types or type signatures which just are usable sample types.

The basetypes in @furo/specs/_baseTypes are deprecated.

``` 

├── furo
│   ├── big_decimal.type.spec
│   ├── link.type.spec
│   ├── meta.field.type.spec
│   ├── meta.fieldconstraint.type.spec
│   ├── meta.fieldmeta.type.spec
│   ├── meta.fieldoption.type.spec
│   ├── meta.optionitem.type.spec
│   ├── meta.type.spec
│   ├── property.type.spec
│   ├── property_integer.type.spec // deprecated, use the google wrapper type
│   ├── property_number.type.spec // deprecated, use the google wrapper type
│   ├── property_string.type.spec // deprecated, use the google wrapper type
│   ├── property_stringoption.type.spec // deprecated, use the google wrapper type
│   └── reference.type.spec
├── google
│   ├── protobuf
│   │   ├── any.type.spec
│   │   ├── bool.type.spec
│   │   ├── bytes.type.spec
│   │   ├── double.type.spec
│   │   ├── empty.type.spec
│   │   ├── field_mask.type.spec
│   │   ├── float.type.spec
│   │   ├── int32.type.spec
│   │   ├── int64.type.spec
│   │   ├── string.type.spec
│   │   ├── uint32.type.spec
│   │   └── uint64.type.spec
│   └── type
│       ├── date.type.spec
│       └── money.type.spec
└── package.json

```
