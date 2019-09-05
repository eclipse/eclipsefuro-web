{
  "name": "property_money",
  "type": "PropertyMoney",
  "description": "Money type with embedded meta",
  "__proto": {
    "package": "furo",
    "imports": [
      "furo/meta.proto",
      "google/type/money.proto"
    ],
    "targetfile": "property.proto"
  },
  "fields": {
    "data": {
      "description": "Money data part",
      "type": "google.type.Money",
      "__proto": {
        "number": 1
      }
    },
    "meta": {
      "description": "Meta for the property",
      "type": "furo.Meta",
      "__proto": {
        "number": 2
      }
    }
  }
}
