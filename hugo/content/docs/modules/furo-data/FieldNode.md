---
title: FieldNode
description: 
weight: 100
---

# FieldNode

**@furo/furo-data** <small>v2.0.0-rc.15</small>
<br>`import '@furo/data/src/lib/FieldNode.js';`<small>
<br>exports *FieldNode* js
<br>superclass *EventTreeNode*</small>


****


## internal events
- *this-field-became-invalid*, when a field gets invalid
- *field-became-invalid* **bubbles**, when a field gets invalid
- *this-field-became-valid*, when a field gets valid
- *field-became-valid* **bubbles**, when a field gets valid
- *this-field-value-changed*, when the value of a field changed
- *field-value-changed* **bubbles**, when the value of a field changed
- *this-metas-changed*, when the metas of a field changed
- *metas-changed* **bubbles**, when the meta of a field changed
- *oneof-field-cleared*, when a field in a oneof group was cleared
- *oneof-field-changed*, when a field in a oneof group was changed
- *this-node-field-added*, when a sub field was added to a field
- *node-field-added* **bubbles**, when a sub field was added to a field
- *this-node-field-deleted*, when a sub field was added to a field
- *node-field-deleted* **bubbles**, when a sub field was added to a field
- *any-type-removed*, fired before a node of type any changes its inner type
- *any-type-created*, fired when a node of type any is created or the type was changed


## internal broadcasted events
- *parent-readonly-meta-set*, when readonly was set on a parent field

## Attributes and Properties
{{% api "_FieldNode-properties.md" %}}
















### **defaultvalue**
</small>

Set the value of the field to the specified defaults.
<br><br>









### **_spec**
default: **{ type: vType }**</small>

Reference to the current spec definition of the fieldNode
<br><br>




### **_pristine**
default: **true**</small>

Pristine state of the fieldNode, this is always set to true when new data is injected and is false if the value itself or the value of a child node gets changed.
<br><br>

### **_isValid**
default: **true**</small>

Validity of the fieldNode, this is always set to true when new data is injected and is false if the value itself validates to false or the value of a child node validates to false.
<br><br>





## Methods
{{% api "_FieldNode-methods.md" %}}


### **createField**
<small>**createField**(*options* `&#34;fieldName&#34;` ) ⟹ `void`</small>

create a field in a FieldNode, this is useful when using map<string,something>
  set the value option to init with values

- <small>*options* :&#34;name&#34;,&#34;type&#34;:&#34;string&#34;, &#34;spec&#34;:{..}}  spec is optional</small>
<br><br>


### **moveNode**
<small>**moveNode**(*oldIndex* `` *newIndex* `` ) ⟹ `void`</small>



- <small>*oldIndex* </small>
- <small>*newIndex* </small>
<br><br>

### **reinit**
<small>**reinit**() ⟹ `void`</small>

sets the field to the initial values from the spec
default values are applied

<br><br>


### **_createVendorType**
<small>**_createVendorType**(*type* `` ) ⟹ `void`</small>



- <small>*type* </small>
<br><br>


### **_checkConstraints**
<small>**_checkConstraints**() ⟹ `void`</small>



<br><br>



### **_createAnyType**
<small>**_createAnyType**(*val* `` ) ⟹ `void`</small>



- <small>*val* </small>
<br><br>

### **_updateKeyValueMap**
<small>**_updateKeyValueMap**(*val* `` *spec* `` ) ⟹ `void`</small>



- <small>*val* </small>
- <small>*spec* </small>
<br><br>

### **deleteNode**
<small>**deleteNode**() ⟹ `void`</small>

deletes the fieldnode

<br><br>






### **_clearInvalidity**
<small>**_clearInvalidity**() ⟹ `void`</small>



<br><br>


### **toString**
<small>**toString**() ⟹ `void`</small>



<br><br>









