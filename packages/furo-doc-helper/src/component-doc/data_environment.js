export const Types = {
  'tree.Tree': {
    name: 'tree',
    type: 'Tree',
    description: 'Navigation tree type with recursive navigation nodes',
    __proto: { package: 'tree', targetfile: 'tree.proto', imports: [], options: null },
    fields: {
      id: {
        type: 'string',
        description: 'Id of the tree',
        meta: {
          label: 'id',
          hint: 'node id, must be uique',
          default: '',
          readonly: false,
          repeated: false,
          options: { list: [] },
        },
        constraints: null,
        __proto: { number: 1 },
      },
      display_name: {
        type: 'string',
        description: 'String representation of the tree',
        meta: {
          label: 'display_name',
          hint: '',
          default: '',
          readonly: true,
          repeated: false,
          options: { list: [] },
        },
        constraints: null,
        __proto: { number: 2 },
      },
      secondary_text: {
        type: 'string',
        description: 'Secondary text of the node',
        meta: {
          label: 'secondary_text',
          hint: '',
          default: '',
          readonly: false,
          repeated: false,
          options: { list: [] },
        },
        constraints: null,
        __proto: { number: 3 },
      },
      description: {
        type: 'string',
        description: 'description of the tree',
        meta: {
          label: 'description',
          hint: '',
          default: '',
          readonly: false,
          repeated: false,
          options: { list: [] },
          __ui: { component: 'furo-data-textarea-input', flags: ['full'] },
        },
        constraints: null,
        __proto: { number: 4 },
      },
      root: {
        type: 'tree.Navigationnode',
        description: 'Rootnode of the tree',
        meta: {
          label: 'Navigation node',
          hint: 'hint',
          default: '',
          readonly: false,
          repeated: false,
          options: { list: [] },
        },
        constraints: null,
        __proto: { number: 10 },
      },
    },
  },
  'tree.TreeEntity': {
    name: 'tree_entity',
    type: 'TreeEntity',
    description: 'TreeEntity with Tree',
    __proto: {
      package: 'tree',
      imports: ['furo/meta.proto', 'furo/link.proto'],
      targetfile: 'tree.proto',
    },
    fields: {
      data: { description: 'contains a tree.Tree', type: 'tree.Tree', __proto: { number: 1 } },
      links: {
        description: 'Hateoas links',
        type: 'furo.Link',
        meta: { repeated: true },
        __proto: { number: 2 },
      },
      meta: { description: 'Meta for the response', type: 'furo.Meta', __proto: { number: 3 } },
    },
  },
  'tree.Navigationnode': {
    name: 'navigationnode',
    type: 'Navigationnode',
    description: 'Item of the navigationtree',
    __proto: { package: 'tree', imports: ['furo/link.proto'], targetfile: 'tree.proto' },
    fields: {
      id: { description: 'Id of the node', type: 'string', __proto: { number: 1 } },
      display_name: {
        description: 'String representation of the node',
        type: 'string',
        meta: { readonly: true, 'tree-search-index': true },
        __proto: { number: 2 },
      },
      secondary_text: {
        description: 'Secondary text of the node',
        type: 'string',
        meta: { 'tree-search-index': true },
        __proto: { number: 3 },
      },
      description: {
        description: 'description of the node',
        meta: { 'tree-search-index': true },
        type: 'string',
        __proto: { number: 4 },
      },
      icon: { description: 'icon of the node', type: 'string', __proto: { number: 5 } },
      panel: {
        description:
          'Which panel (i.e. view, edit, display) opens the node type (which is defined in property link)',
        type: 'string',
        meta: { readonly: true, 'tree-search-index': false },
        __proto: { number: 6 },
      },
      key_words: {
        description: 'key words of the node',
        meta: { 'tree-search-index': true },
        type: 'string',
        __proto: { number: 7 },
      },
      has_error: { description: 'if node has error', type: 'bool', __proto: { number: 8 } },
      open: { description: 'node is open or not', type: 'bool', __proto: { number: 9 } },
      link: {
        description: 'Deeplink information of this node',
        type: 'furo.Link',
        __proto: { number: 10 },
      },
      is_group_label: {
        description: 'This node is a group label',
        type: 'bool',
        meta: { default: false },
        __proto: { number: 11 },
      },
      children: {
        description: 'Children of this node',
        type: 'tree.Navigationnode',
        meta: { repeated: true },
        __proto: { number: 12 },
      },
    },
  },
  'tree.TreeCollection': {
    name: 'tree_collection',
    type: 'TreeCollection',
    description: 'TreeCollection with repeated TreeEntity',
    __proto: {
      package: 'tree',
      imports: ['furo/meta.proto', 'furo/link.proto'],
      targetfile: 'tree.proto',
    },
    fields: {
      meta: { description: 'Meta for the response', type: 'furo.Meta', __proto: { number: 2 } },
      links: {
        description: 'Hateoas links',
        type: 'furo.Link',
        meta: { repeated: true },
        __proto: { number: 3 },
      },
      entities: {
        description: 'Contains a tree.TreeEntity repeated',
        type: 'tree.TreeEntity',
        meta: { repeated: true },
        __proto: { number: 4 },
      },
    },
  },
  'furo.Reference': {
    name: 'reference',
    type: 'Reference',
    description: 'reference',
    __proto: { package: 'furo', imports: ['furo/link.proto'], targetfile: 'reference.proto' },
    fields: {
      display_name: {
        description: 'String representation of the reference',
        type: 'string',
        meta: { readonly: true },
        constraints: {},
        __proto: { number: 1 },
      },
      id: { description: 'Id of the reference', type: 'string', __proto: { number: 2 } },
      link: { description: 'Hateoas link', type: 'furo.Link', __proto: { number: 3 } },
    },
  },
  'furo.MetaField': {
    name: 'metafield',
    type: 'MetaField',
    description: 'fields of meta info',
    __proto: { package: 'furo', imports: [], targetfile: 'meta.proto' },
    fields: {
      meta: {
        description: 'meta information of a field',
        type: 'furo.FieldMeta',
        __proto: { number: 1 },
      },
      constraints: {
        description: 'constraints for a field',
        type: 'map<string,furo.FieldConstraint>',
        __proto: { number: 2 },
      },
    },
  },
  'furo.StringOptionProperty': {
    name: 'string_option_property',
    type: 'StringOptionProperty',
    description: 'String type to use in property',
    __proto: { package: 'furo', imports: [], targetfile: 'property.proto' },
    fields: {
      display_name: {
        description: 'String representation of val',
        type: 'string',
        meta: { readonly: true },
        constraints: {},
        __proto: { number: 1 },
      },
      id: {
        description: 'The value, Id is used to make working with data-inputs easier',
        type: 'string',
        __proto: { number: 2 },
      },
    },
  },
  'furo.Optionitem': {
    name: 'optionitem',
    type: 'Optionitem',
    description: 'Items for fieldoption.list',
    __proto: { package: 'furo', targetfile: 'meta.proto', imports: [], options: null },
    fields: {
      id: {
        type: 'string',
        description: 'Id',
        __proto: { number: 1 },
        __ui: { component: '', flags: [], no_init: false, no_skip: true },
        meta: {
          label: 'Id',
          hint: '',
          default: '',
          readonly: false,
          repeated: false,
          options: { list: [] },
        },
        constraints: null,
      },
      display_name: {
        type: 'string',
        description: 'String representation',
        __proto: { number: 2 },
        __ui: { component: '', flags: [], no_init: false, no_skip: true },
        meta: {
          label: 'Display name',
          hint: '',
          default: '',
          readonly: false,
          repeated: false,
          options: { list: [] },
        },
        constraints: null,
      },
      selected: {
        type: 'bool',
        description: 'is the item selected',
        __proto: { number: 3 },
        __ui: { component: '', flags: [], no_init: false, no_skip: false },
        meta: {
          label: 'Selected',
          hint: '',
          default: '',
          readonly: false,
          repeated: false,
          options: { list: [] },
        },
        constraints: null,
      },
    },
  },
  'furo.NumberProperty': {
    name: 'number_property',
    type: 'NumberProperty',
    description: 'Number type with embedded meta',
    __proto: { package: 'furo', imports: [], targetfile: 'property.proto' },
    fields: { data: { description: 'data part', type: 'float', __proto: { number: 1 } } },
  },
  'furo.Fieldoption': {
    name: 'fieldoption',
    type: 'Fieldoption',
    description: 'Metas for a field',
    __proto: {
      package: 'furo',
      targetfile: 'meta.proto',
      imports: ['google/protobuf/any.proto'],
      options: null,
    },
    fields: {
      list: {
        type: 'google.protobuf.Any',
        description: 'a list with options, use furo.optionitem or your own',
        __proto: { number: 1 },
        __ui: { component: '', flags: ['full', 'condensed'], no_init: false, no_skip: false },
        meta: {
          label: '',
          hint: '',
          default: '',
          readonly: false,
          repeated: true,
          options: { list: [], flags: null },
        },
        constraints: null,
      },
      flags: {
        type: 'string',
        description:
          'Add flags for your field. This can be something like "searchable". \n//The flags can be used by generators, ui components,...\n',
        __proto: { number: 2 },
        __ui: { component: null, flags: [], no_init: false, no_skip: false },
        meta: {
          label: 'flags',
          hint: 'optional flags',
          default: null,
          readonly: false,
          repeated: true,
          options: { list: [], flags: null },
          typespecific: null,
        },
        constraints: null,
      },
    },
  },
  'furo.StringProperty': {
    name: 'string_property',
    type: 'StringProperty',
    description: 'String type to use in property',
    __proto: { package: 'furo', imports: ['furo/meta.proto'], targetfile: 'property.proto' },
    fields: { data: { description: 'data part', type: 'string', __proto: { number: 1 } } },
  },
  'furo.Meta': {
    name: 'meta',
    type: 'Meta',
    description: 'meta info',
    __proto: { package: 'furo', imports: [], targetfile: 'meta.proto' },
    fields: {
      fields: {
        description: 'fields of meta info',
        type: 'map<string, furo.MetaField>',
        __proto: { number: 1 },
      },
    },
  },
  'furo.IntegerProperty': {
    name: 'integer_property',
    type: 'IntegerProperty',
    description: 'Integer type with embedded meta',
    __proto: { package: 'furo', imports: [], targetfile: 'property.proto' },
    fields: {
      data: {
        description: 'Integer data part',
        type: 'int32',
        constraints: { step: { is: 1 } },
        __proto: { number: 1 },
      },
    },
  },
  'furo.Link': {
    name: 'link',
    type: 'Link',
    description: 'link',
    __proto: { package: 'furo', imports: [], targetfile: 'link.proto' },
    fields: {
      rel: { description: 'the relationship', type: 'string', __proto: { number: 1 } },
      method: { description: 'method of curl', type: 'string', __proto: { number: 2 } },
      href: { description: 'link', type: 'string', __proto: { number: 3 } },
      type: { description: 'mime type', type: 'string', __proto: { number: 4 } },
      service: {
        description: 'name of the service which can handle this link',
        type: 'string',
        __proto: { number: 5 },
      },
    },
  },
  'furo.FieldMeta': {
    name: 'fieldmeta',
    type: 'FieldMeta',
    description: 'Metas for a field',
    __proto: {
      package: 'furo',
      options: {},
      imports: ['google/protobuf/any.proto'],
      targetfile: 'meta.proto',
    },
    fields: {
      label: {
        description: 'The label',
        type: 'string',
        meta: { label: 'Label', hint: 'Also used for input-fields' },
        __proto: { number: 1 },
      },
      hint: {
        description: 'A hint',
        type: 'string',
        meta: { label: 'Hint', hint: 'Also used for input-fields' },
        __proto: { number: 2 },
      },
      default: {
        description: 'The default value as JSON string',
        type: 'string',
        meta: { label: 'Default value' },
        __proto: { number: 3 },
      },
      readonly: {
        description: 'readonly',
        type: 'bool',
        meta: { label: 'readonly' },
        __proto: { number: 4 },
      },
      repeated: {
        description: 'repeated',
        type: 'bool',
        meta: { label: 'repeated' },
        __proto: { number: 5 },
      },
      options: {
        description: 'Fieldoptions',
        type: 'furo.Fieldoption',
        meta: { label: 'options' },
        __proto: { number: 6 },
      },
      typespecific: {
        description: 'Put in type specific metas for your fields here',
        type: 'google.protobuf.Any',
        meta: { label: 'typespecific meta' },
        __proto: { number: 7 },
        __ui: { no_init: true },
      },
    },
  },
  'furo.FieldConstraint': {
    name: 'fieldconstraint',
    type: 'FieldConstraint',
    description: 'a single fieldconstraint',
    __proto: { package: 'furo', options: {}, imports: [], targetfile: 'meta.proto' },
    fields: {
      is: {
        description: 'the constraint value as string, even it is a number',
        type: 'string',
        meta: { label: 'is', hint: 'the constraint value as string, even it is a number' },
        __proto: { number: 1 },
      },
      message: {
        description: 'The message to display on constraint violation',
        type: 'string',
        meta: { label: 'message' },
        __proto: { number: 2 },
      },
    },
  },
  'furo.BigDecimal': {
    name: 'big_decimal',
    type: 'BigDecimal',
    description:
      'A BigDecimal is defined by two values: an arbitrary precision integer and a 32-bit integer scale. The value of the BigDecimal is defined to be unscaledValue*10^{-scale}.',
    __proto: { package: 'furo', imports: [], targetfile: 'bigdecimal.proto' },
    fields: {
      display_name: {
        description: 'String representation of BigDecimal entity',
        type: 'string',
        meta: { readonly: true },
        constraints: {},
        options: [],
        __proto: { number: 1 },
      },
      scale: {
        description:
          'If zero or positive, the scale is the number of digits to the right of the decimal point. If negative, the unscaled value of the number is multiplied by ten to the power of the negation of the scale. For example, a scale of -3 means the unscaled value is multiplied by 1000.',
        type: 'int32',
        meta: {},
        constraints: {},
        options: [],
        __proto: { number: 2 },
      },
      int_val: {
        description: 'The integer value of the BigDecimal',
        type: 'int64',
        meta: {},
        constraints: {},
        options: [],
        __proto: { number: 3 },
      },
    },
  },
  'furo.Property': {
    name: 'property',
    type: 'Property',
    description: 'Type to define property values with type information',
    __proto: {
      package: 'furo',
      imports: ['google/protobuf/any.proto'],
      targetfile: 'property.proto',
    },
    fields: {
      id: {
        description: 'Id of the property',
        type: 'string',
        meta: { label: 'Id' },
        constraints: { required: { is: 'true', message: 'is required' } },
        __proto: { number: 1 },
      },
      display_name: {
        description: 'String representation of the property',
        type: 'string',
        meta: { label: 'Property', readonly: true },
        constraints: {},
        __proto: { number: 2 },
      },
      data: {
        description: 'data part of the property',
        type: 'google.protobuf.Any',
        constraints: {},
        __proto: { number: 3 },
      },
      meta: { description: 'Meta for the response', type: 'furo.Meta', __proto: { number: 4 } },
      code: {
        description: 'property code for additional settings',
        type: 'string',
        __proto: { number: 5 },
      },
    },
  },
  'google.type.Money': {
    name: 'money',
    type: 'Money',
    description:
      'Represents an amount of money with its currency type. https://github.com/googleapis/googleapis/blob/master/google/money.proto',
    __proto: { package: 'google.type', imports: [], targetfile: 'money.proto' },
    fields: {
      display_name: {
        description: 'String representation of money entity',
        type: 'string',
        meta: { default: '', hint: '', readonly: true },
        constraints: {},
        options: [],
        __proto: { number: 1 },
      },
      currency_code: {
        description: 'The 3-letter currency code defined in ISO 4217.',
        type: 'string',
        meta: { label: 'Währungscode', default: '', hint: '' },
        constraints: {},
        options: [],
        __proto: { number: 2 },
      },
      units: {
        description: 'The whole units of the amount.',
        type: 'int64',
        meta: { label: 'Ganzahliger Währungsbetrag', default: '', hint: '' },
        constraints: {},
        options: [],
        __proto: { number: 3 },
      },
      nanos: {
        description:
          'Number of nano (10^-9) units of the amount. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.',
        type: 'int64',
        meta: { label: 'Nanos', default: '', hint: '' },
        constraints: {},
        options: [],
        __proto: { number: 4 },
      },
    },
  },
  'google.type.Date': {
    name: 'date',
    type: 'Date',
    description: 'Date, https://github.com/googleapis/googleapis/blob/master/google/date.proto ',
    __proto: { package: 'google.type', imports: [], targetfile: 'date.proto' },
    fields: {
      display_name: {
        description: 'Localized String representation of date',
        type: 'string',
        meta: { label: 'Datum', default: '', hint: '', readonly: true },
        constraints: {},
        options: [],
        __proto: { number: 4 },
      },
      year: {
        description:
          'Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year.',
        type: 'int32',
        meta: { default: '', hint: '' },
        constraints: {},
        options: [],
        __proto: { number: 1 },
      },
      month: {
        description:
          'Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day.',
        type: 'int32',
        meta: { default: '', hint: '' },
        constraints: {},
        options: [],
        __proto: { number: 2 },
      },
      day: {
        description:
          'Day of month. Must be from 1 to 31 and valid for the year and month, or 0. if specifying a year by itself or a year and month where the day is not significant.',
        type: 'int32',
        meta: { default: '', hint: '' },
        constraints: {},
        options: [],
        __proto: { number: 3 },
      },
    },
  },
  'google.protobuf.StringValue': {
    name: 'stringvalue',
    type: 'StringValue',
    description:
      'Wrapper message for `string`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'wrappers.proto' },
    fields: {
      value: {
        description: 'The JSON representation for `StringValue` is JSON string',
        type: 'string',
        __proto: { number: 1 },
      },
    },
  },
  'google.protobuf.FieldMask': {
    name: 'field_mask',
    type: 'FieldMask',
    description:
      'A field mask in update operations specifies which fields of the targeted resource are going to be updated. https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/field_mask.proto',
    __proto: {
      package: 'google.protobuf',
      options: {},
      imports: [],
      targetfile: 'field_mask.proto',
    },
    fields: {
      paths: {
        description:
          'The implementation of any API method which has a FieldMask type field in the request should verify the included field paths, and return an `INVALID_ARGUMENT` error if any path is duplicated or unmappable.',
        type: 'string',
        meta: { repeated: true },
        __proto: { number: 1 },
      },
    },
  },
  'google.protobuf.Int64Value': {
    name: 'int64value',
    type: 'Int64Value',
    description:
      'Wrapper message for `int64`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'wrappers.proto' },
    fields: {
      value: {
        description: 'The JSON representation for `Int64Value` is JSON string',
        type: 'int64',
        __proto: { number: 1 },
      },
    },
  },
  'google.protobuf.Empty': {
    name: 'empty',
    type: 'Empty',
    description: 'https://github.com/protocolbuffers/protobuf/blob/master/src/protobuf/empty.proto',
    __proto: { package: 'google.protobuf', imports: [], targetfile: 'empty.proto', options: {} },
    fields: {},
  },
  'google.protobuf.Int32Value': {
    name: 'int32value',
    type: 'Int32Value',
    description:
      'Wrapper message for `int32`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'wrappers.proto' },
    fields: {
      value: {
        description: 'The JSON representation for `Int32Value` is JSON number',
        type: 'int32',
        __proto: { number: 1 },
        constraints: {
          min: { is: '−2147483648', message: 'out of range' },
          max: { is: '2147483647', message: 'out of range' },
        },
      },
    },
  },
  'google.protobuf.BoolValue': {
    name: 'boolvalue',
    type: 'BoolValue',
    description:
      'Wrapper message for `bool`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'wrappers.proto' },
    fields: {
      value: {
        description: 'The JSON representation for `BoolValue` is JSON `true` and `false`',
        type: 'bool',
        __proto: { number: 1 },
      },
    },
  },
  'google.protobuf.FloatValue': {
    name: 'floatvalue',
    type: 'FloatValue',
    description:
      'Wrapper message for `float`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'wrappers.proto' },
    fields: {
      value: {
        description: 'The JSON representation for `FloatValue` is JSON number',
        type: 'float',
        __proto: { number: 1 },
      },
    },
  },
  'google.protobuf.BytesValue': {
    name: 'bytesvalue',
    type: 'BytesValue',
    description:
      'Wrapper message for `bytes`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'wrappers.proto' },
    fields: {
      value: {
        description: 'The JSON representation for `BytesValue` is JSON string',
        type: 'bytes',
        __proto: { number: 1 },
      },
    },
  },
  'google.protobuf.Any': {
    name: 'any',
    type: 'Any',
    description:
      'Any contains an arbitrary serialized protocol buffer message along with a\n// URL that describes the type of the serialized message. client uses type `ArrayBuffer` for the value field .  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/any.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'any.proto' },
    fields: {
      type_url: { type: 'string', __proto: { number: 1 } },
      value: { type: 'bytes', __proto: { number: 2 } },
    },
  },
  'google.protobuf.UInt32Value': {
    name: 'uint32value',
    type: 'UInt32Value',
    description:
      'Wrapper message for `uint32`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'wrappers.proto' },
    fields: {
      value: {
        description: 'The JSON representation for `UInt32Value` is JSON number',
        type: 'uint32',
        __proto: { number: 1 },
      },
    },
  },
  'google.protobuf.UInt64Value': {
    name: 'uint64value',
    type: 'UInt64Value',
    description:
      'Wrapper message for `uint64`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'wrappers.proto' },
    fields: {
      value: {
        description: 'The JSON representation for `UInt64Value` is JSON string',
        type: 'uint64',
        __proto: { number: 1 },
      },
    },
  },
  'google.protobuf.DoubleValue': {
    name: 'doublevalue',
    type: 'DoubleValue',
    description:
      'Wrapper message for `double`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'wrappers.proto' },
    fields: {
      value: {
        description: 'The JSON representation for `DoubleValue` is JSON number',
        type: 'double',
        __proto: { number: 1 },
      },
    },
  },
};
