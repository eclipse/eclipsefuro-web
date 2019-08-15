{
  "name": "Task",
  "type": "Task",
  "description": "Task data description",
  "__proto": {
    "package": "task",
    "imports": ["task.proto","person.proto"]
  },
  "fields": {
    "display_name": {
      "description": "Localized String representation of a task",
      "type": "string",
      "meta": {
        "label": "Task",
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
    "description": {
      "description": "Short task description",
      "type": "string",
      "meta": {
        "label": "Description",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 2
      }
    },
    "estimated_time": {
      "description": "Estimated time in days",
      "type": "int",
      "meta": {
        "label": "Est. days",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 3,
        "type": "int32"
      }
    },
    "owner": {
      "description": "Owner of a task",
      "type": "Person",
      "meta": {
        "label": "Owner",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 4,
        "type": "Person"
      }
    },
    "subtasks": {
      "description": "List of subtasks",
      "type": "Task",
      "meta": {
        "label": "Subtask",
        "default": "",
        "hint": "",
        "required": true
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 5,
        "type": "Task"
      }
    }
  }
}
