{
  "name": "date",
  "type": "Date",
  "description": "Date, https://github.com/googleapis/googleapis/blob/master/google/date.proto ",
  "__proto": {
    "package": "google.type",
    "imports": [],
    "targetfile": "date.proto"
  },
  "fields": {
    "display_name": {
      "description": "Localized String representation of date",
      "type": "string",
      "meta": {
        "label": "Datum",
        "default": "",
        "hint": "",
        "readonly": true
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 4
      }
    },
    "year": {
      "description": "Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year.",
      "type": "int32",
      "meta": {
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 1
      }
    },
    "month": {
      "description": "Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day.",
      "type": "int32",
      "meta": {
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 2
      }
    },
    "day": {
      "description": "Day of month. Must be from 1 to 31 and valid for the year and month, or 0. if specifying a year by itself or a year and month where the day is not significant.",
      "type": "int32",
      "meta": {
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 3
      }
    }
  }
}
