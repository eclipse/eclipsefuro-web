# Writing demos for your component
Write your demos like you write your components. Use the `furo-demo-snippet` component to show the source, demo and flow of your components.
The tracer for the wires is always enabled in the furo-demo-snippet. So you can watch your console   

If you write this in your markdown:
```html
<furo-demo-snippet >
    <template>
      <furo-vertical-flex style="height: 180px">
        <div>small</div>
        <furo-empty-spacer style="border: 1px dashed lightgray"></furo-empty-spacer>
        <div>small</div>
      </furo-vertical-flex>
    </template>
</furo-demo-snippet>
```

You will get this:

<furo-demo-snippet >
    <template>
      <furo-vertical-flex style="height: 180px">
        <div>small</div>
        <furo-empty-spacer style="border: 1px dashed lightgray"></furo-empty-spacer>
        <div>small</div>
      </furo-vertical-flex>
    </template>
</furo-demo-snippet>
