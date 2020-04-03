/* eslint-disable import/no-extraneous-dependencies */
const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      basePath: '../..',
      frameworks: ['mocha', 'chai'],
      _browsers: ['Chrome'], // remove the underscore to activate browser tests
      proxies: {
        '/src/configs/flowConfig.json': '/base/src/configs/flowConfig.json',
      },
      colors: true,
      files: [
        // runs all files ending with .test in the test folder,
        // can be overwritten by passing a --grep flag. examples:
        //
        // npm run test -- --grep test/foo/bar.test.js
        // npm run test -- --grep test/bar/*
        {
          pattern: config.grep ? config.grep : 'packages/furo-input/test/**/*.test.js',
          type: 'module',
        },
      ],

      esm: {
        nodeResolve: true,
        coverageExclude: ['src/generated_components/**/*'],
      },
      coverageIstanbulReporter: {
        thresholds: {
          global: {
            statements: 50,
            lines: 50,
            branches: 50,
            functions: 50,
          },
        },
      },
    }),
  );
  return config;
};
