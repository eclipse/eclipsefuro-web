---
title: {{.decl.name}}
description: {{.decl.summary}}
weight: 100
---

# {{.decl.name}}

**@furo/{{.module}}** <small>v{{.pkg.version}}</small>
<br>`import '@furo/{{.module}}/src/{{.path}}';`<small>{{range $ex := .cem.exports}}
<br>exports {{if eq $ex.kind "custom-element-definition"}}`{{"<" | noescape}}{{$ex.name}}>`{{else}}*{{$ex.name}}*{{end}} {{$ex.kind}}{{end}}{{if .decl.superclass.module}}
<br>extends *{{.decl.superclass.module}}*{{end}}{{if .decl.superclass.name}}
<br>superclass *{{.decl.superclass.name}}*{{end}}
{{- range $mixin := .decl.mixins}}
<br> mixes *{{$mixin.name}}*
{{- end}}</small>


**{{.decl.summary}}**

{{if .decl.description}}{{.decl.description | noescape}}{{end}}

## Attributes and Properties
{{"{{"}}% api "_{{.name}}-properties.md" %{{"}}"}}

{{range $field := .decl.members}}{{$public:=true}}{{if $field.privacy}}{{ if eq $field.privacy "private"}}{{$public = false}}{{end}}{{end}}
{{if and (eq $field.kind "field") $public}}
### **{{$field.name}}**
{{if $field.attribute}}
<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">{{$field.attribute}}</span>{{if $field.reflects}} <small>**reflects**</small>{{end}}
{{if $field.type.text}}<small>`{{$field.type.text}}` {{end}}{{end}}{{if $field.default}}default: **{{$field.default}}**{{end}}</small>

{{if $field.description}}{{$field.description | noescape}}{{end}}
<br><br>
{{- end}}{{- end}}



## Methods
{{"{{"}}% api "_{{.name}}-methods.md" %{{"}}"}}
{{range $method := .decl.members}}{{$public:=true}}{{if $method.privacy}}{{ if eq $method.privacy "private"}}{{$public = false}}{{end}}{{end}}
{{if and (eq $method.kind "method") $public}}
### **{{$method.name}}**
<small>**{{$method.name}}**({{range $p := $method.parameters}}*{{$p.name}}* `{{$p.type.text}}` {{end}}) ⟹ `{{if $method.return.type.text}}{{$method.return.type.text}}{{else}}void{{end}}`</small>

{{if $method.description}}{{$method.description | noescape}}{{end}}
{{range $p := $method.parameters}}
- <small>{{$p.name}} {{$p.description}}</small>{{end}}
<br><br>
{{- end}}{{- end}}
