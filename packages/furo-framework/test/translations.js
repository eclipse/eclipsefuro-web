export const Translations = {
  'en-US': {
    greeting: 'Hello Furo',
    visits: {
      none: () => 'never visited',
      one: n => `${n} visit`,
      many: n => `${n} visits`,
      toString: () => 'visits',
    },
  },
  'de-DE': {
    greeting: 'Guten Tag Furo',
    visits: {
      none: () => 'nie besucht',
      one: n => `${n} Besuch`,
      many: n => `${n} Besuche`,
      toString: () => 'Besuche',
    },
  },
};
