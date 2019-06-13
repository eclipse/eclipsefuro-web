// -- initialize application env, theme, api

import  {Init} from "@furo/framework/furo.js";

import {Services, Types} from "./apiConfig"
//Attention: Styling is defined in main-stage
Init.registerApiServices(Services);
Init.registerApiTypes(Types);
