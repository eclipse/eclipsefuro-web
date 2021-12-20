---
title: DataObject
description: 
weight: 100
---

# DataObject

**@furo/furo-data** <small>v2.0.0-rc.8</small>
<br>`import '@furo/furo-data/src/src/lib/DataObject.js';`<small>
<br>exports *DataObject* js
<br>superclass *EventTreeNode*</small>


****

EntityNode is usually the root node of an eventTree

## Attributes and Properties
{{% api "_DataObject-properties.md" %}}









### **rawEntity**
</small>


<br><br>

### **_value**
</small>

Returns a json representation of your Data Object
<br><br>










### **_spec**
default: **this.__specdefinitions[type]**</small>


<br><br>

### **_type**
default: **type**</small>


<br><br>

### **_pristine**
default: **true**</small>


<br><br>

### **_isValid**
default: **true**</small>


<br><br>



## Methods
{{% api "_DataObject-methods.md" %}}


### **validateAllFields**
<small>**validateAllFields**() ⟹ `void`</small>



<br><br>

### **clearAllErrors**
<small>**clearAllErrors**() ⟹ `void`</small>

clears all errors on every fieldnode

<br><br>

### **setAllToPristine**
<small>**setAllToPristine**() ⟹ `void`</small>

set all children to pristine
useful for deltas

<br><br>

### **injectRaw**
<small>**injectRaw**(*rawEntity* `` ) ⟹ `void`</small>

injects a raw model e.g. body data of a collection or entity

- <small>rawEntity </small>
<br><br>

### **reset**
<small>**reset**() ⟹ `void`</small>

Resete zum letzten injected state zurück

<br><br>

### **_hasAncestorOfType**
<small>**_hasAncestorOfType**(*type* `` ) ⟹ `void`</small>



- <small>type </small>
<br><br>




### **getJson**
<small>**getJson**() ⟹ `*`</small>

Returns a json representation of your Data Object

<br><br>

### **_updateFieldValuesAndMetaFromRawEntity**
<small>**_updateFieldValuesAndMetaFromRawEntity**(*node* `` *data* `` ) ⟹ `void`</small>



- <small>node </small>
- <small>data </small>
<br><br>


### **_setInvalid**
<small>**_setInvalid**(*error* `` ) ⟹ `void`</small>



- <small>error </small>
<br><br>


### **toString**
<small>**toString**() ⟹ `void`</small>



<br><br>






