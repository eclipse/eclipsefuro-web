---
title: "{{.pkg.name}}"
bookCollapseSection: true
bookToc: false
weight: 100
---

# {{.pkg.name}}
**{{.pkg.name}}** <small>v{{.pkg.version}}</small>
{{.pkg.description}}

{{"{{"}}% api "_{{.module}}-head.md" %{{"}}"}}

### Installation
*npm*:
```bash
npm i -S {{.pkg.name}}`
```


{{"{{"}}% api "_{{.module}}-description.md" %{{"}}"}}

## What is inside
{{"{{"}}% api "_{{.module}}-inside.md" %{{"}}"}}

{{"{{"}}% api "_{{.module}}-footer.md" %{{"}}"}}
