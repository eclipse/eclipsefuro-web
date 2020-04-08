#!/usr/bin/env node

const ghpages = require('gh-pages');
// todo: maybe handling the erros?
ghpages.publish('dist', () => {});
