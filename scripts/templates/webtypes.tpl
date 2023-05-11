{
  "$schema": "https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json",
  "name": "Furo Data",
  "version": "1.0.0",
  "description-markup": "markdown",
  "js-types-syntax": "typescript",
  "contributions": {
    "html": {
      "elements": [
{{- range $i, $mod := .modules}}
{{- range $declaration := $mod.declarations}}
        {{if $i}}, {{end}}
        {
          "name": "{{$declaration.tagName}}",
          "source": {
            "module": "./{{$mod.path}}",
            "symbol": "{{$declaration.name}}"
          },
          "deprecated": false,
          "experimental": false,
          "icon": "icons/180.png",
          "priority": "normal",
          "description": "{{$declaration.description | replace "\n" "\\n"}}",
          "doc-url": "https://web-components.furo.pro/docs/modules/furo-data/{{$declaration.name}}/",
          "attributes": [
          {{- $mc := -1}}
          {{- range $field := $declaration.members}}{{$public:=true}}{{if $field.privacy}}{{ if eq $field.privacy "private"}}{{$public = false}}{{end}}{{end}}
          {{- if and (eq $field.kind "field") $public}}
          {{if $field.attribute}}
          {{- $mc = $mc | add1}}{{if $mc}}, {{end -}}
            {
              "name": "{{$field.attribute}}",
              "type": "{{$field.type.text}}",
              "description": "{{if $field.description}}{{$field.description  | replace "\n" "\\n"}}{{end}}"
              {{- if $field.default}},
              "default": "{{$field.default}}"{{end}}
            }
          {{- end}}
          {{- end}}
          {{- end}}
          ]

           {{- if $declaration.slots}},
        "slots": [{{range $ie, $slot := $declaration.slots}}
            {{if $ie}}, {{end -}}
            {
              "name": "{{$slot.name}}",
              "description": "{{if $slot.description}}{{$slot.description  | replace "\n" "\\n"}}{{end}}"
            }
          {{- end}} ]
{{- end}}
          ,
          "js": {
            "properties": [
            {{- $mc := -1}}
{{- range $field := $declaration.members}}{{$public:=true}}{{if $field.privacy}}{{ if eq $field.privacy "private"}}{{$public = false}}{{end}}{{end}}
{{- if and (eq $field.kind "field") $public}}
{{- $mc = $mc | add1}}{{if $mc}}, {{end -}}
              {
                "name": "{{$field.name}}",
                "type": "{{$field.type.text}}",
                "description": "{{if $field.description}}{{$field.description  | replace "\n" "\\n"}}{{end}}"
                {{- if $field.default}},
                "default": "{{$field.default}}"{{end}}
              }
              {{- end}}
              {{- end}}
            ],
            "methods": [
            {{- $mc := -1}}
            {{- range $method := $declaration.members}}{{$public:=true}}{{if $method.privacy}}{{ if eq $method.privacy "private"}}{{$public = false}}{{end}}{{end}}
            {{- if and (eq $method.kind "method") $public}}
            {{$mc = $mc | add1}}{{if $mc}}, {{end -}}
            {
              "name": "{{kebabcase $method.name}}",
              "description": "{{if $method.description}}{{$method.description | replace "\n" "\\n"  | replace "\"" " "}}{{end}}",
              "value": {
                "type": "string",
                "required": true
              }
            }
{{- end -}}
{{- end -}}
            ]

            {{- if $declaration.events}},
            "events": [{{range $ie, $event := $declaration.events}}
              {{if $ie}}, {{end}}
              {
                "name": "{{$event.name}}",
                "priority": "high",
                "description": "{{$event.description}}",
                 "value": {
                      "type": "{{$event.type.text}}"
                }
              }
            {{- end}} ]
            {{- end}}

         {{- if $declaration.cssProperties}},"css": {
            "properties": [
              {
              {{- range $style := .decl.cssProperties}}
              "name": "{{$style.name}}" ``{{if $style.description}},
              {{$style.description | noescape}}{{end}}
              {{- end}}

              }
            ]
          } {{- end}}
        }
{{- end}}
      }
{{- end}}]
    }
  }
}
