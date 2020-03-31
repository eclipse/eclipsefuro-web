/* eslint-disable */
import cpy from 'rollup-plugin-cpy';
import { createDefaultConfig } from '@open-wc/building-rollup';

const workboxConfig = require('./workbox-config.js');
const { generateSW } = require('rollup-plugin-workbox');

// if you need to support IE11 use "modern-and-legacy-config" instead.
const config = [
  createDefaultConfig({
    input: 'index.html',
    indexHTMLPlugin: {
      preload: false, // https://github.com/open-wc/open-wc/issues/1418
    },
    plugins: {
      workbox: false,
    },
  }),
];

// if you use an array of configs, you don't need the copy task to be executed for both builds.
// we can add the plugin only to the first rollup config:
export default [
  // add plugin to the first config
  {
    ...config[0],
    plugins: [
      ...config[0].plugins,
      cpy({
        // copy over all images files
        files: [
          'manifest.json',
          'assets/**/*',
          'favicon.ico',
          'robots.txt',
          'documentation.json',
          'README.md',
        ],
        dest: 'dist',

        options: {
          // parents makes sure to preserve the original folder structure
          parents: true,
          verbose: true,
        },
      }),
    ],
  },
  // Add plugin to the  config (generateSW when everything is done)
  {
    ...config[0],
    plugins: [...config[0].plugins, generateSW(workboxConfig)],
  },
];
