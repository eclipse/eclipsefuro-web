---
title: Furo Web
type: docs
bookToc: false
description: フロー Furo Web
---


# フロー Furo Web
Furo Web Components provides an enterprise ready set of web components which play seamlessly with Furo. 
Based on web standards and future proved. Compliant with any technology of choice. 


{{< github_button button="star" repo="eclipsefuro-web" count="true" user="eclipse" >}}
{{< github_button button="issue" repo="eclipsefuro-web" count="true" user="eclipse" >}}

 

{{< columns >}}

## Framework agnostic

The furo web components are regular web components. Some are based on lit and some are native components.
They work anywhere you use HTML, with any framework or none at all. As a result of following the
best practices for building web components, our components are [FBP friendly](https://fbp.furo.pro).

## Design system friendly

Take a look at our integration of the [SAP UI5](https://ui5.furo.pro) components.

A set of input elements which will work with the furo data structure out of the box, 
are available for a wide set of types. They are extending the excellent [UI5 Web Components](https://sap.github.io/ui5-webcomponents/), with data binding.

Read more here, if you want to [extend your own design system](/docs/guides/FNA/) with *furo data binding*. 

<--->

## [Transparent data handling](/docs/modules/furo-data/)
The components from furo web, build the bridge from the ui implementation to the data sources by respecting the [furo specs](https://fidl.furo.pro).

The transparent data agents are responsible for the communication with the APIs and are the adapters for the UI interaction.
{{< mermaid >}}
graph TD
UI[UI elements]-- HTML ---agent[Data Agents]
agent-- REST ---API
{{< /mermaid >}}
{{< /columns >}}

{{< columns >}}
## [Flow Based Programming](https://fbp.furo.pro)
Furo-FBP is like programmable HTML, no deep javascript knowledge is needed to write an application.
![viz](/viz.png)
*The flowbased programming paradigm results in less complex and more flexible code.*
<--->

{{< /columns >}}


