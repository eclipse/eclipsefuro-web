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


*cdn*:
```js
<script type="module"
        src="https://cdn.jsdelivr.net/npm/@furo/precompiled@{{.collection}}/dist/{{.module}}.js">
</script>
```

{{"{{"}}% api "_{{.module}}-description.md" %{{"}}"}}

## What is inside
{{"{{"}}% api "_{{.module}}-inside.md" %{{"}}"}}

{{"{{"}}% api "_{{.module}}-footer.md" %{{"}}"}}
