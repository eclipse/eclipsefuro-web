{
  "$schema": "https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json",
  "name": "{{.name}}",{{$name := .name}}
  "version": "{{.version}}",
  "description-markup": "markdown",
  "js-types-syntax": "typescript",
  "default-icon": "icon.svg",
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
          "description": "{{if $declaration.description}}{{$declaration.description  | replace "\n" "\\n" | replace "\t" "  " | replace "\"" "\\\"" | replace "\\" "\\\\"  | replace "\\\"" "\""   | replace "\\\\" "\\" | replace "\\c" " / c" | noescape}}{{end}}",
          "doc-url": "https://web-components.furo.pro/docs/modules/{{$name | replace "@" "" | replace "/" "-"}}/{{$declaration.tagName}}/",
          "attributes": [
                    {{- $mc := -1}}
                    {{- range $field := $declaration.attributes}}

                    {{- $mc = $mc | add1}}{{if $mc}}, {{end -}}
                      {
                        "name": "{{$field.name}}",
                        "type": "{{$field.type.text | replace "\"" "\\\""}}",
              "priority": "highest",
              "description": "{{if $field.description}}{{$field.description  | replace "\n" "\\n" | replace "\t" "  " | replace "\"" "\\\"" | replace "\\" "\\\\"  | replace "\\\"" "\""   | replace "\\\\" "\\" | replace "\\c" " / c" | noescape}}{{end}}"
                        {{- if $field.default}},
                        "default": "{{$field.default  | replace "\n" "\\n" | replace "\t" "  " | replace "\"" "\\\"" | replace "\\" "\\\\"  | replace "\\\"" "\""   | replace "\\\\" "\\" | noescape}}"{{end}}
                      }

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
                "priority": "high",
                "description": "{{if $field.description}}{{$field.description | replace "\n" "\\n" | replace "\t" "  " | replace "\"" "\\\"" | replace "\\" "\\\\"  | replace "\\\"" "\""   | replace "\\\\" "\\" | noescape}}{{end}}"
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
                "priority": "highest",
                "description": "{{if $event.description}}{{$event.description | replace "\n" "\\n" | replace "\t" "  " | replace "\"" "\\\"" | replace "\\" "\\\\"  | replace "\\\"" "\""   | replace "\\\\" "\\" | noescape}}{{end}}",
                 "value": {
                      "type": "{{if $event.type.text}}{{$event.type.text | replace "\n" "\\n" | replace "\t" "  " | replace "\"" "\\\"" | replace "\\" "\\\\"  | replace "\\\"" "\""   | replace "\\\\" "\\" | noescape }}{{end}}"
                }
              }
            {{- end}} ]
            {{- end}}

         {{- if $declaration.cssProperties}},
         "css": {
            "properties": [

              {{- range $i, $style := $declaration.cssProperties}} {{if $i}}, {{end}}
              {
              "name": "{{$style.name}}"{{if $style.description}},
              "description": "{{$style.description | noescape}}{{end}}"
              }
              {{- end}}
            ]
          } {{- end}}
        }
      }
{{- end}}{{- end}}{{end}}{{end}}]
    }
  }
}
