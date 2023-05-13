{
  "$schema": "https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json",
  "name": "Furo Data",
  "version": "1.0.0",
  "description-markup": "markdown",
  "js-types-syntax": "typescript",
  "contributions": {
    "html": {
      "elements": [{{$i := -1}}
{{- range  $mod := .modules}}
{{- if $mod.declarations}}
{{- range  $declaration := $mod.declarations}}{{if $declaration.tagName}}
        {{- $i = $i | add1}}{{if $i}}, {{end}}
          {
          "name": "{{$declaration.tagName}}",
          "source": {
            "module": "./{{$mod.path}}",
            "symbol": "{{$declaration.name}}"
          },
          "deprecated": false,
          "experimental": false,
          "description": "{{if $declaration.description}}{{$declaration.description | replace "\n" "\\n"}}{{end}}",
          "doc-url": "https://web-components.furo.pro/docs/modules/furo-data/{{$declaration.name}}/",
          "attributes": [
          {{- $mc := -1}}
          {{- range $field := $declaration.members}}{{$public:=true}}{{if $field.privacy}}{{ if eq $field.privacy "private"}}{{$public = false}}{{end}}{{end}}
          {{- if and (eq $field.kind "field") $public}}{{if $field.attribute}}
          {{- $mc = $mc | add1}}{{if $mc}}, {{end -}}
            {
              "name": "{{$field.attribute}}",
              "type": "{{$field.type.text | replace "\"" "\\\""}}",
              "description": "{{if $field.description}}{{$field.description  | replace "\n" "\\n"}}{{end}}"
              {{- if $field.default}},
              "default": "{{$field.default | replace "\n" "\\n" | noescape}}"{{end}}
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
                "type": "{{if $field.type.text}}{{$field.type.text | replace "\n" "\\n" | replace "\"" "\\\"" | noescape }}{{end}}",
                "description": "{{if $field.description}}{{$field.description  |  replace "\n" "\\n"  | replace "\t" "  "  |  replace "\"" "\\\"" | noescape}}{{end}}"
                {{- if $field.default}},
                "default": "{{$field.default | replace "\n" "\\n" | replace "\t" "  " | replace "\"" "\\\"" | replace "\\" "\\\\"  | replace "\\\"" "\""   | replace "\\\\" "\\" | noescape}}"{{end}}
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
              "description": "{{if $method.description}}{{$method.description | replace "\n" "\\n"  | replace "\"" " " | noescape}}{{end}}",
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
                "description": "{{if $event.description}}{{$event.description | replace "\n" "\\n" | noescape}}{{end}}",
                 "value": {
                      "type": "{{if $event.type.text}}{{$event.type.text | replace "\n" "\\n" | noescape }}{{end}}"
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
      }
{{- end}}{{- end}}{{end}}{{end}}]
    }
  }
}
