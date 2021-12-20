---
title: furo-forth-stack
description: forth like stack
weight: 50
---

# furo-forth-stack
**@furo/furo-util** <small>v2.0.0-rc.10</small>
<br>`import '@furo/furo-util/src/furo-forth-stack.js';`<small>
<br>exports *FuroForthStack* js
<br>exports `<furo-forth-stack>` custom-element-definition
<br>superclass *LitElement*</small>
<br><small>summary *forth like stack*</small>

{{% api "_furo-forth-stack-head.md" %}}

`furo-forth-stack` is a declarative stack, inspired by the forth stack.

https://hackaday.com/2017/01/27/forth-the-hackers-language/
http://wiki.laptop.org/go/Forth_stack_operators
http://galileo.phys.virginia.edu/classes/551.jvn.fall01/primer.htm#stacks

{{% api "_furo-forth-stack-description.md" %}}


## Attributes and Properties
{{% api "_furo-forth-stack-properties.md" %}}



### **size**
default: **0**</small>

Current size of the stack
<br><br>











## Events
{{% api "_furo-forth-stack-events.md" %}}

### **stack-size-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-stack-size-changed</span>
→ <small>`Number`</small>

 Fired when the stack size changes with Integer with the current size of the stack.
<br><br>
### **rotated**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-rotated</span>
→ <small>`the top element`</small>

 Fired when stack was rotated
<br><br>
### **stack-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-stack-changed</span>
→ <small>`the top element`</small>

 Fired when the stack contents changes after put, drop,...
<br><br>
### **swapped**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-swapped</span>
→ <small>`void`</small>

Fired when stack was swapped
<br><br>
### **empty**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-empty</span>
→ <small>`void`</small>

Fired when stack gets empty
<br><br>

## Methods
{{% api "_furo-forth-stack-methods.md" %}}



### **clearStack**
<small>**clearStack**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-clear-stack</span>

Empties the stack and set the stack-size to 0

<br><br>

### **put**
<small>**put**(*e* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-put</span>

Add an element to the stack

- <small>*e* </small>
<br><br>

### **swap**
<small>**swap**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-swap</span>


swap **( n1 n2 -- n2 n1 )**

swap, as you may have guessed, swaps the top two elements of the stack. For example:

1 2 3 4 swap
will give you:

1 2 4 3 <- Top

<br><br>

### **drop**
<small>**drop**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-drop</span>

drop **( n -- )**

 drop simply drops the top element of the stack. Running:

 1 2 3 drop
 gives you a stack of:

 1 2 <- Top

<br><br>

### **dup**
<small>**dup**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-dup</span>

dup **( n -- n n )**

    dup is short for “duplicate” – it duplicates the top element of the stack. For example, try this out:

    1 2 3 dup

    You should end up with the following stack:

    1 2 3 3 <- Top

<br><br>

### **over**
<small>**over**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-over</span>


over **( n1 n2 -- n1 n2 n1 )**

   over is a bit less obvious: it takes the second element from the top of the stack and duplicates it to the top of the stack. Running this:

   1 2 3 over
   will result in this:

   1 2 3 2 <- Top

<br><br>

### **rot**
<small>**rot**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-rot</span>

rot **( n1 n2 n3 -- n2 n3 n1 )**

   Finally, rot “rotates” the top three elements of the stack. The third element from the top of the stack gets moved to the top of the stack, pushing the other two elements down.

   1 2 3 rot
   gives you:

   2 3 1 <- Top

<br><br>

### **rrot**
<small>**rrot**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-rrot</span>

rrot **( n1 n2 n3 -- n3 n1 n2 )**

   Reverse rotation or right rotation rrot “rotates” the elements of the stack inverse to rot.
   The top elemen the stack gets moved to the bottom of the stack.

   1 2 3 rot
   gives you:

   3 1 2 <- Top

<br><br>







{{% api "_furo-forth-stack-footer.md" %}}
{{% api "_furo-forth-stack-scripts.md" %}}
