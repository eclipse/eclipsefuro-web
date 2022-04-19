---
title: RepeaterNode
description: 
weight: 100
---

# RepeaterNode

**@furo/furo-data** <small>v2.0.5</small>
<br>`import '@furo/data/src/lib/RepeaterNode.js';`<small>
<br>exports *RepeaterNode* js
<br>superclass *EventTreeNode*</small>


****



## Attributes and Properties
{{% api "_RepeaterNode-properties.md" %}}









### **_value**
default: **tmp**</small>


<br><br>











### **__specdefinitions**
</small>


<br><br>

### **_isRepeater**
default: **true**</small>


<br><br>

### **repeats**
default: **[]**</small>


<br><br>

### **_spec**
default: **spec**</small>


<br><br>

### **_name**
default: **fieldName**</small>


<br><br>

### **clearListOnNewData**
default: **false**</small>

Set this to true to clear the list on new data instead updating the current list.
<br><br>

### **_pristine**
default: **true**</small>


<br><br>

### **_isValid**
default: **true**</small>


<br><br>

### **_validationDisabled**
</small>


<br><br>

### **__initialValue**
</small>


<br><br>



## Methods
{{% api "_RepeaterNode-methods.md" %}}


### **moveNode**
<small>**moveNode**(*oldIndex* `` *newIndex* `` ) ⟹ `void`</small>



- <small>*oldIndex* </small>
- <small>*newIndex* </small>
<br><br>

### **reinit**
<small>**reinit**() ⟹ `void`</small>

resets the field to the initial _values from the spec

<br><br>

### **reset**
<small>**reset**() ⟹ `void`</small>

removes all children

<br><br>

### **removeAllChildren**
<small>**removeAllChildren**() ⟹ `void`</small>

deletes all repeated fields on this node

<br><br>

### **_hasAncestorOfType**
<small>**_hasAncestorOfType**() ⟹ `void`</small>

infinite recursive element protection
we can return false here, because a repeater node is not created automatically

<br><br>

### **deleteNode**
<small>**deleteNode**() ⟹ `void`</small>



<br><br>


### **__updateMetaAndConstraints**
<small>**__updateMetaAndConstraints**(*metaAndConstraints* `` ) ⟹ `void`</small>



- <small>*metaAndConstraints* </small>
<br><br>






### **deleteChild**
<small>**deleteChild**(*index* `` ) ⟹ `void`</small>

Deletes a repeated item by index

- <small>*index* </small>
<br><br>

### **_addSilent**
<small>**_addSilent**() ⟹ `void`</small>



<br><br>

### **_setInvalid**
<small>**_setInvalid**(*error* `` ) ⟹ `void`</small>



- <small>*error* </small>
<br><br>

### **add**
<small>**add**(*data* `` ) ⟹ `void`</small>



- <small>*data* </small>
<br><br>










