{
  "name": "big_decimal",
  "type": "BigDecimal",
  "description": "A BigDecimal is defined by two values: an arbitrary precision integer and a 32-bit integer scale. The value of the BigDecimal is defined to be unscaledValue*10^{-scale}.",
  "__proto": {
    "package": "furo",
    "imports": [],
    "targetfile": "bigdecimal.proto"
  },
  "fields": {
    "display_name": {
      "description": "String representation of BigDecimal entity",
      "type": "string",
      "meta": {
        "readonly": true
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 1
      }
    },
    "scale": {
      "description": "If zero or positive, the scale is the number of digits to the right of the decimal point. If negative, the unscaled value of the number is multiplied by ten to the power of the negation of the scale. For example, a scale of -3 means the unscaled value is multiplied by 1000.",
      "type": "int32",
      "meta": {},
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 2
      }
    },
    "int_val": {
      "description": "The integer value of the BigDecimal",
      "type": "int64",
      "meta": {},
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 3
      }
    }
  }
}
