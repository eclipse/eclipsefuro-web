#!/usr/bin/env node

const ghpages = require('gh-pages');

ghpages.publish('dist', err => {});
