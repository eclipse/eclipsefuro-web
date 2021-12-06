---
title: {{.component}}
description: {{.decl.summary}}
weight: 50
---

# {{.component}}
**@furo/{{.module}}** <small>v{{.pkg.version}}</small>
<br>`import '@furo/{{.module}}/src/{{.component}}.js';`<small>{{range $ex := .cem.exports}}
<br>exports {{if eq $ex.kind "custom-element-definition"}}`{{"<" | noescape}}{{$ex.name}}>`{{else}}*{{$ex.name}}*{{end}} {{$ex.kind}}{{end}}{{if .decl.superclass.module}}
<br>extends *{{.decl.superclass.module}}*{{end}}{{if .decl.superclass.name}}
<br>superclass *{{.decl.superclass.name}}*{{end}}
{{- range $mixin := .decl.mixins}}
<br> mixes *{{$mixin.name}}*
{{- end}}</small>
<br><small>summary *{{.decl.summary}}*</small>

{{"{{"}}% api "_{{.component}}-head.md" %{{"}}"}}

{{if .decl.description}}{{noescape .decl.description }}{{end}}

{{"{{"}}% api "_{{.component}}-description.md" %{{"}}"}}


## Attributes and Properties
{{"{{"}}% api "_{{.component}}-properties.md" %{{"}}"}}

{{range $field := .decl.members}}{{$public:=true}}{{if $field.privacy}}{{ if eq $field.privacy "private"}}{{$public = false}}{{end}}{{end}}
{{if and (eq $field.kind "field") $public}}
### **{{$field.name}}**
{{if $field.attribute}}
<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">{{$field.attribute}}</span>{{if $field.reflects}} <small>**reflects**</small>{{end}}
{{if $field.type.text}}<small>`{{$field.type.text}}` {{end}}{{end}}{{if $field.default}}default: **{{$field.default}}**{{end}}</small>

{{if $field.description}}{{$field.description | noescape}}{{end}}
<br><br>
{{- end}}{{- end}}


{{- if .decl.events}}
## Events
{{"{{"}}% api "_{{.component}}-events.md" %{{"}}"}}
{{range $event := .decl.events}}
### **{{$event.name}}**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-{{$event.name}}</span>
→ <small>`{{$event.type.text}}`</small>

{{if $event.description}}{{$event.description | noescape}}{{end}}
<br><br>
{{- end}}{{- end}}

## Methods
{{"{{"}}% api "_{{.component}}-methods.md" %{{"}}"}}
{{range $method := .decl.members}}{{$public:=true}}{{if $method.privacy}}{{ if eq $method.privacy "private"}}{{$public = false}}{{end}}{{end}}
{{if and (eq $method.kind "method") $public}}
### **{{$method.name}}**
<small>**{{$method.name}}**({{range $p := $method.parameters}}*{{$p.name}}* `{{$p.type.text}}` {{end}}) ⟹ `{{if $method.return.type.text}}{{$method.return.type.text}}{{else}}void{{end}}`</small>

<small>{{if $method.parameters}}{{range $p := $method.parameters}}`{{$p.type.text}}` {{end}}{{else}}`*`{{end}}</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-{{kebabcase $method.name}}</span>

{{if $method.description}}{{$method.description | noescape}}{{end}}
{{range $p := $method.parameters}}
- <small>*{{$p.name}}* {{$p.description}}</small>{{end}}
<br><br>
{{- end}}{{- end}}


{{if .decl.slots}}
## Slots
{{"{{"}}% api "_{{.component}}-slots.md" %{{"}}"}}
{{range $slot := .decl.slots}}
### **{{if $slot.name}}{{$slot.name}}{{else}}default{{end}}**
Type: `{{$slot.type.text}}`

{{if $slot.description}}{{$slot.description | noescape}}{{end}}
<br><br>
{{- end}}{{- end}}


{{- if .decl.cssProperties}}
## Styling
{{"{{"}}% api "_{{.component}}-styling.md" %{{"}}"}}

The following custom properties  available for styling:

Custom property | Description
----------------|-------------
{{- range $style := .decl.cssProperties}}
`{{$style.name}}` | {{if $style.description}}{{$style.description | noescape}}{{end}} <hr> {{if $style.default}}<small>default: `{{$style.default}}`</small>{{end}} {{if $style.type.text}}<small>fallback: `{{$style.type.text}}`</small>{{end}}
{{- end}}

{{- end}}

{{"{{"}}% api "_{{.component}}-footer.md" %{{"}}"}}
{{"{{"}}% api "_{{.component}}-scripts.md" %{{"}}"}}
