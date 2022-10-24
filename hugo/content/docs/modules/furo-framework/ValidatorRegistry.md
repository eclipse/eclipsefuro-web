---
title: ValidatorRegistry
description: 
weight: 100
---

# ValidatorRegistry

**@furo/furo-framework** <small>v2.4.2</small>
<br>`import '@furo/framework/src/ValidatorRegistry.js';`<small>
<br>exports *ValidatorRegistry* js</small>


****

This is used by the FieldNode to validate against specified constraints.
Scalar values must not be registered.

## Attributes and Properties
{{% api "_ValidatorRegistry-properties.md" %}}







## Methods
{{% api "_ValidatorRegistry-methods.md" %}}


### **register**
<small>**register**(*typename* `String` *ValidatorClass* `Class` ) ⟹ `void`</small>

Register a validator for a specific type.

- <small>*typename* </small>
- <small>*ValidatorClass* </small>
<br><br>

### **getValidator**
<small>**getValidator**(*typename* `String` ) ⟹ `*|boolean`</small>

Receive a validator for a specific complex type

- <small>*typename* </small>
<br><br>
