---
title: furo-hp-35
description: calculator component
weight: 50
---

# furo-hp-35
**@furo/util** <small>v2.0.7</small>
<br>`import '@furo/util/src/furo-hp-35.js';`<small>
<br>exports `<furo-hp-35>` custom-element-definition
<br>extends */src/furo-forth-stack.js*
<br>superclass *FuroForthStack*</small>
<br><small>summary *calculator component*</small>

{{% api "_furo-hp-35-head.md" %}}

`hp-35` is a declarative rpn calculator component.

see https://hansklav.home.xs4all.nl/rpn/

http://h10032.www1.hp.com/ctg/Manual/c01579350

{{% api "_furo-hp-35-description.md" %}}


## Attributes and Properties
{{% api "_furo-hp-35-properties.md" %}}
























### **radMode**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">radMode</span>
<small>`Boolean` default: **false**</small>

Set to true to use rad, default is deg
<br><br>

### **x**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">x</span>
<small>`Number` </small>

current x
<br><br>

### **y**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">y</span>
<small>`Number` </small>

current y
<br><br>

### **z**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">z</span>
<small>`Number` </small>

current z
<br><br>

### **t**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">t</span>
<small>`Number` </small>

current t
<br><br>

### **stack**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">stack</span>
<small>`Array` </small>

the stack.
<br><br>

### **size**
default: **0**</small>

Current size of the stack
<br><br>









## Events
{{% api "_furo-hp-35-events.md" %}}

### **stackchange**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-stackchange</span>
→ <small>`void`</small>

Fired when something in stack changes
<br><br>
### **stack-size-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-stack-size-changed</span>
→ <small>`Number`</small>

 Fired when the stack size changes with Integer with the current size of the stack.
<br><br>
### **rotated**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-rotated</span>
→ <small>`the top element`</small>

 Fired when stack was rotated
<br><br>
### **stack-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-stack-changed</span>
→ <small>`the top element`</small>

 Fired when the stack contents changes after put, drop,...
<br><br>
### **swapped**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-swapped</span>
→ <small>`void`</small>

Fired when stack was swapped
<br><br>
### **empty**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-empty</span>
→ <small>`void`</small>

Fired when stack gets empty
<br><br>

## Methods
{{% api "_furo-hp-35-methods.md" %}}


### **enter**
<small>**enter**(*n* `Number` ) ⟹ `void`</small>

<small>`Number` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-enter</span>

Enter a number

- <small>*n* </small>
<br><br>

### **updateXYZT**
<small>**updateXYZT**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-update-xyzt</span>



<br><br>

### **swap**
<small>**swap**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-swap</span>


swap **( n1 n2 -- n2 n1 )**

swap, as you may have guessed, swaps the top two elements of the stack. For example:

1 2 3 4 swap
will give you:

1 2 4 3 <- Top

<br><br>

### **rot**
<small>**rot**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-rot</span>

rot **( n1 n2 n3 -- n2 n3 n1 )**

   Finally, rot “rotates” the top three elements of the stack. The third element from the top of the stack gets moved to the top of the stack, pushing the other two elements down.

   1 2 3 rot
   gives you:

   2 3 1 <- Top

<br><br>

### **roll**
<small>**roll**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-roll</span>

rot **( n1 n2 n3 -- n2 n3 n1 )**

   Finally, rot “rotates” the top three elements of the stack. The third element from the top of the stack gets moved to the top of the stack, pushing the other two elements down.

   1 2 3 rot
   gives you:

   2 3 1 <- Top

<br><br>

### **add**
<small>**add**(*n* `Number` ) ⟹ `number`</small>

<small>`Number` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-add</span>

Process an addition

- <small>*n* </small>
<br><br>

### **substract**
<small>**substract**(*n* `Number` ) ⟹ `number`</small>

<small>`Number` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-substract</span>

Process a substraction

- <small>*n* </small>
<br><br>

### **sqrt**
<small>**sqrt**(*n* `Number` ) ⟹ `number`</small>

<small>`Number` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-sqrt</span>

Perform square root operation

- <small>*n* </small>
<br><br>

### **ln**
<small>**ln**(*n* `Number` ) ⟹ `number`</small>

<small>`Number` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-ln</span>

Perform log operation

- <small>*n* </small>
<br><br>

### **cos**
<small>**cos**(*n* `Number` ) ⟹ `number`</small>

<small>`Number` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-cos</span>

Perform cos operation

- <small>*n* </small>
<br><br>

### **sin**
<small>**sin**(*n* `Number` ) ⟹ `number`</small>

<small>`Number` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-sin</span>

Perform sin operation

- <small>*n* </small>
<br><br>

### **tan**
<small>**tan**(*n* `Number` ) ⟹ `number`</small>

<small>`Number` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-tan</span>

Perform tan operation

- <small>*n* </small>
<br><br>

### **abs**
<small>**abs**(*n* `Number` ) ⟹ `number`</small>

<small>`Number` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-abs</span>

Perform abs operation

- <small>*n* </small>
<br><br>

### **reciprocal**
<small>**reciprocal**(*n* `Number` ) ⟹ `number`</small>

<small>`Number` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-reciprocal</span>

Perform reciprocal operation

- <small>*n* </small>
<br><br>

### **exp**
<small>**exp**(*n* `Number` ) ⟹ `number`</small>

<small>`Number` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-exp</span>

Perform exp operation

returns e^x, where x is the argument, and e is Euler's number (also known as Napier's constant), the base of the natural logarithms.

- <small>*n* </small>
<br><br>

### **xroot**
<small>**xroot**(*n* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-xroot</span>



- <small>*n* </small>
<br><br>

### **multiply**
<small>**multiply**(*n* `Number` ) ⟹ `number`</small>

<small>`Number` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-multiply</span>

Process a multiplication

- <small>*n* </small>
<br><br>

### **pow**
<small>**pow**(*n* `Number` ) ⟹ `number`</small>

<small>`Number` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-pow</span>

Process power

- <small>*n* </small>
<br><br>

### **divide**
<small>**divide**(*n* `Number` ) ⟹ `number`</small>

<small>`Number` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-divide</span>

Process a division

- <small>*n* </small>
<br><br>

### **clear**
<small>**clear**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-clear</span>

clear the stack

<br><br>









### **clearStack**
<small>**clearStack**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-clear-stack</span>

Empties the stack and set the stack-size to 0

<br><br>

### **put**
<small>**put**(*e* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-put</span>

Add an element to the stack

- <small>*e* </small>
<br><br>

### **drop**
<small>**drop**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-drop</span>

drop **( n -- )**

 drop simply drops the top element of the stack. Running:

 1 2 3 drop
 gives you a stack of:

 1 2 <- Top

<br><br>

### **dup**
<small>**dup**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-dup</span>

dup **( n -- n n )**

    dup is short for “duplicate” – it duplicates the top element of the stack. For example, try this out:

    1 2 3 dup

    You should end up with the following stack:

    1 2 3 3 <- Top

<br><br>

### **over**
<small>**over**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-over</span>


over **( n1 n2 -- n1 n2 n1 )**

   over is a bit less obvious: it takes the second element from the top of the stack and duplicates it to the top of the stack. Running this:

   1 2 3 over
   will result in this:

   1 2 3 2 <- Top

<br><br>

### **rrot**
<small>**rrot**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-rrot</span>

rrot **( n1 n2 n3 -- n3 n1 n2 )**

   Reverse rotation or right rotation rrot “rotates” the elements of the stack inverse to rot.
   The top elemen the stack gets moved to the bottom of the stack.

   1 2 3 rot
   gives you:

   3 1 2 <- Top

<br><br>







{{% api "_furo-hp-35-footer.md" %}}
{{% api "_furo-hp-35-scripts.md" %}}
