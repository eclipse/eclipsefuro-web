{
  "name": "task",
  "type": "Task",
  "description": "Task data description",
  "__proto": {
    "package": "task",
    "imports": [
      "furo/reference.proto"
    ],
    "targetfile": "task.proto"
  },
  "fields": {
    "id": {
      "description": "Identity of a task",
      "type": "string",
      "meta": {
        "label": "Id",
        "default": "",
        "hint": "",
        "readonly": true
      },
      "constraints": {},
      "__proto": {
        "number": 1
      }
    },
    "display_name": {
      "description": "Localized String representation of a task",
      "type": "string",
      "meta": {
        "label": "task.display_name.label",
        "default": "",
        "hint": "task.display_name.hint",
        "readonly": true
      },
      "constraints": {},
      "__proto": {
        "number": 2
      }
    },
    "description": {
      "description": "Short task description",
      "type": "string",
      "meta": {
        "label": "task.desc.label",
        "default": "",
        "hint": ""
      },
      "constraints": {
        "required": {
          "is": "true",
          "message":"is required"
        },
        "max": {
          "is": 180,
          "message": "task.desc.maxlength"
        }
      },
      "__proto": {
        "number": 3
      }
    },
    "estimated_time": {
      "description": "Estimated time in days",
      "type": "int32",
      "meta": {
        "label": "Est. days",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "__proto": {
        "number": 4
      }
    },
    "owner": {
      "description": "Owner of a task",
      "type": "furo.Reference",
      "meta": {
        "label": "person.type.sex.label",
        "default": {
          "link":{
            "rel": "list",
            "href": "/mockdata/persons/list.json",
            "method": "Get",
            "type": "person.Person",
            "service": "PersonService"
          }
        },
        "hint": "",
        "no_result_hint": "",
        "options": {
          "list": [
            {
              "id": "unknown",
              "display_name": "person.type.sex.unknown.label",
              "selected": false,
              "@type": "type.googleapis.com/furo.Optionitem"
            },
            {
              "id": "female",
              "display_name": "person.type.sex.female.label",
              "selected": true,
              "@type": "type.googleapis.com/furo.Optionitem"
            },
            {
              "id": "male",
              "display_name": "person.type.sex.male.label",
              "selected": false,
              "@type": "type.googleapis.com/furo.Optionitem"
            }
          ]
        }
      },
      "constraints": {},
      "__proto": {
        "number": 5
      }
    },
    "subtasks": {
      "description": "List of subtasks",
      "type": "task.Task",
      "meta": {
        "label": "Subtask",
        "default": "",
        "hint": "",
        "repeated": true
      },
      "constraints": {},
      "__proto": {
        "number": 6
      }
    }
  }
}
