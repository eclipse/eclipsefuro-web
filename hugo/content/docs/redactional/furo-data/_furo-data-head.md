---
title: _data-head
bookSearchExclude: false
bookHidden: true
---

These are probably the most important components of the furo web components.

The components builds the bridge from the ui implementations to the **data sources** by respecting the specs.

The agents in this module are responsible to communicate directly with the specified sources and will feed the data
object with the needed data. furo-api-fetch, which is also used by the agents, can fetch any data from any sources and
do the error and success "handling".


{{< mermaid >}}
flowchart LR
I1(Input Component) -. data binding --- DO(Data Object);
I2(Custom Component) -. data binding --- DO(Data Object);
DO -- set data --> A(Entity Agent);
A -- updates --> DO;
A <-- fetch / update --> API[(Rest API)];
SB(Save Button) -- triggers --> A
LB(Load Button) -- triggers --> A
{{< /mermaid >}}

*Shematic flow*

