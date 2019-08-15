{
  "name": "date",
  "type": "Date",
  "description": "Date, https://github.com/googleapis/googleapis/blob/master/google/type/date.proto ",
  "__proto": {
    "package": "google.type",
    "imports": []
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
      "type": "int",
      "meta": {
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 1,
        "type": "int32"
      }
    },
    "month": {
      "description": "Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day.",
      "type": "int",
      "meta": {
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 2,
        "type": "int32"
      }
    },
    "day": {
      "description": "Day of month. Must be from 1 to 31 and valid for the year and month, or 0. if specifying a year by itself or a year and month where the day is not significant.",
      "type": "int",
      "meta": {
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 3,
        "type": "int32"
      }
    }
  }
}
