import { Init, i18n, Env } from '@furo/framework/src/furo.js';
import { Services, Types } from '../../../furo-specs/dist/env.js';
import { Translations } from '@furo/framework/test/translations.js';

Init.registerApiServices(Services);
Init.registerApiTypes(Types);
i18n.registerResBundle(Translations);

// Translate messages in specs
Init.translateStaticTypeMessages(Env.locale);

// enable this option to send readonly fields too.
// Env.api.sendAllDataOnMethodPut = true;
