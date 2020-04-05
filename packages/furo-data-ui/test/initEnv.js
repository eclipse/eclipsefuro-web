// -- initialize application env, theme, api

import { Init } from '@furo/framework/src/furo.js';

import { Services, Types } from '@furo/specs/build/data_environment.js';
// Attention: Styling is defined in main-stage
Init.registerApiServices(Services);
Init.registerApiTypes(Types);
