# Mockdata Structure

We use simple json files in a directory structure corresponding to the api hierarchy.

## Methods

Method           | File        |
 ----------------|-------------|
 `LIST`          | list.json   |
 `GET`           | get.json    |
 `CREATE`        | create.json |
 `UPDATE`        | update.json |
 `DELETE`        | delete.json |
 
 ## Data structure
 
```
mockdata/
├── README.md
├── persons
│   ├── 1
│   │   ├── delete.json
│   │   ├── get.json
│   │   └── update.json
│   ├── create.json
│   └── list.json
├── projects
│   ├── 1
│   │   ├── delete.json
│   │   ├── get.json
│   │   └── update.json
│   ├── 2
│   │   ├── delete.json
│   │   ├── get.json
│   │   └── update.json
│   ├── 3
│   │   ├── delete.json
│   │   ├── get.json
│   │   └── update.json
│   ├── 4
│   │   ├── delete.json
│   │   ├── get.json
│   │   └── update.json
│   ├── create.json
│   ├── list.json
│   └── members
├── tasks
│   ├── 1
│   │   ├── delete.json
│   │   ├── get.json
│   │   └── update.json
│   ├── create.json
│   └── list.json
└── trees
    └── list.json



```
 
