// eslint-disable-next-line import/no-extraneous-dependencies
import "@ui5/webcomponents-base/dist/features/PropertiesFormatSupport.js";
// eslint-disable-next-line import/no-extraneous-dependencies
import { registerI18nBundle} from "@ui5/webcomponents-base/dist/i18nBundle.js";

// register i18n with path
// this is only a demo to show how it works.
registerI18nBundle("@ui5/webcomponents", {
  de: "assets/i18n/messagebundle_de.properties",
  en: "assets/i18n/messagebundle_de.properties",
});

registerI18nBundle("@ui5/webcomponents-fiori", {
  de: "assets/i18n/messagebundle_de.properties",
  en: "assets/i18n/messagebundle_de.properties",
});
