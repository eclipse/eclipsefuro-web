{
  "name": "Money",
  "type": "google.type.money",
  "description": "Represents an amount of money with its currency type. https://github.com/googleapis/googleapis/blob/master/google/type/money.proto",
  "fields": {
    "display_name": {
      "description": "String representation of money entity",
      "type": "string",
      "meta": {
        "default": "",
        "hint": "",
        "readonly": true
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 1
      }
    },
    "currency_code": {
      "description": "The 3-letter currency code defined in ISO 4217.",
      "type": "string",
      "meta": {
        "label": "Währungscode",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 2
      }
    },
    "units": {
      "description": "The whole units of the amount.",
      "type": "int",
      "meta": {
        "label": "Ganzahliger Währungsbetrag",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 3,
        "type": "int64"
      }
    },
    "nanos": {
      "description": "Number of nano (10^-9) units of the amount. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.",
      "type": "int",
      "meta": {
        "label": "Nanos",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 4,
        "type": "int64"
      }
    }
  }
}