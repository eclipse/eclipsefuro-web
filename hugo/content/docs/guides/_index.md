---
weight: 9
title: "Guides"
bookCollapseSection: true

---

# Getting started
If you need a detailed getting started guide and examples,   visit [this guide](https://furo.pro/docs/guides/ebook-tutorial/). 


## Initializing process

To be able to use the components from `furo-data`, you have to set up the environment and
register the `types` and `services`.


### Minimal Environment

``` js
// -- initialize application env, api 

import {Init, Env} from "@furo/framework/src/furo.js"

// The services and types must be registered in the Env:
import {Services, Types} from "data-environment.js"; // this is the file which was generated by `furo genEsModule`.

/**
 * register the available types and services
 * This is needed if you want to work with @furo/data/* and components with bind-data support.
 */
Init.registerApiServices(Services);
Init.registerApiTypes(Types);

/**
 * [Optional]
 * Register the API prefix based on the APPROOT.
 * This information is used for furo-deep-link and furo-reverse-deep-link to resolve the api address. 
 */

Env.api.prefix = `/api`;

// apply the prefix
Init.applyCustomApiPrefixToServicesAndTypes(Env.api.prefix);

``` 
*example of an init file*


