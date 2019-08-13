# Form Helpers

## How to structure forms
**furo-form-layouter** provides a simple grid based layout to easily structure forms.

The required variant is set using an attribute on furo-form-layouter.
Supported values: two, four

### Usage

#### Default Markup without attribute
``` html
<furo-form-layouter>
    <furo-date-input hint="Only possible in current year" max="2019-12-31" min="2019-01-01" label="valid from"></furo-date-input>
    <furo-select-input label="Brand" value="Haro" list="WeThePeople, Haro, United, Demolition"></furo-select-input>
    <p>Put your additional information here...</p>
</furo-form-layouter>
```

#### Rendered version
<furo-form-layouter>
    <furo-date-input hint="Only possible in current year" max="2019-12-31" min="2019-01-01" label="valid from"></furo-date-input>
    <furo-select-input label="Brand" value="Haro" list="WeThePeople, Haro, United, Demolition"></furo-select-input>
    <p>Put your additional information here...</p>
</furo-form-layouter>

#### Variants

``` html
<furo-form-layouter two>
    <furo-date-input hint="Only possible in current year" max="2019-12-31" min="2019-01-01" label="valid from"></furo-date-input>
    <furo-select-input label="Brand" value="Haro" list="WeThePeople, Haro, United, Demolition"></furo-select-input>
    <p>Put your additional information here...</p>
</furo-form-layouter>
```

#### Rendered version
<furo-form-layouter two>
    <furo-date-input hint="Only possible in current year" max="2019-12-31" min="2019-01-01" label="valid from"></furo-date-input>
    <furo-select-input label="Brand" value="Haro" list="WeThePeople, Haro, United, Demolition"></furo-select-input>
    <p>Put your additional information here...</p>
</furo-form-layouter>