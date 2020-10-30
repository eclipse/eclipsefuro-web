# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.6.2](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/ui5@0.6.1...@furo/ui5@0.6.2) (2020-10-30)

**Note:** Version bump only for package @furo/ui5





## [0.6.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/ui5@0.6.0...@furo/ui5@0.6.1) (2020-10-28)

**Note:** Version bump only for package @furo/ui5





# [0.6.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/ui5@0.5.0...@furo/ui5@0.6.0) (2020-10-27)


### Bug Fixes

* use placeholder to show the bounded data as the default value of a reference search. ([a6bda5f](https://github.com/theNorstroem/FuroBaseComponents/commit/a6bda5f5f2a5f9f8a46b3d28b7545c6f16d0c233))


### Features

* initially use the display_name and id from bounded data as the data of collection when there is no collection injection ([3d4c4ab](https://github.com/theNorstroem/FuroBaseComponents/commit/3d4c4ab4a6771236389a22ec4cc92b756f55511d))
* reset comboBox by binding data. ([6ec99b3](https://github.com/theNorstroem/FuroBaseComponents/commit/6ec99b3093eaa82bfa5b68ee062867691922300d))





# [0.5.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/ui5@0.4.2...@furo/ui5@0.5.0) (2020-10-20)


### Bug Fixes

* fix ios8601 format. fix ui5-reference-search in order to show display_name initially when there is no collection-injection ([a2b51e6](https://github.com/theNorstroem/FuroBaseComponents/commit/a2b51e60fba206f0826385bf8ddaf7fd69253ef2))
* fix tests ([20a287f](https://github.com/theNorstroem/FuroBaseComponents/commit/20a287f755c347b28bba2a873b8e5401696bdfe8))
* move init to connectedcallback to avoid ui5-data-properties problem ([b84d93d](https://github.com/theNorstroem/FuroBaseComponents/commit/b84d93d02501c7027a2c9ecaa23d98407d975139))
* solve problem for ui5 collection dropdown in ui5-data-property ([f53a2c2](https://github.com/theNorstroem/FuroBaseComponents/commit/f53a2c290b97b5c5f2ac13542e058e76f0027132))
* ui5-collection-dropdown should not update the value of bounded data with the display_name of item by scalar type ([274072d](https://github.com/theNorstroem/FuroBaseComponents/commit/274072dc146ee628abb51493e27c3b0802f6f232))
* ui5-data-collection-dropdown should selected the first item if no item is pre selected. ([bed0817](https://github.com/theNorstroem/FuroBaseComponents/commit/bed0817bc1661e20ee2bc12a04107b91c0922326))


### Features

* add item-selected event to furo-data-ui5-reference-search ([476189c](https://github.com/theNorstroem/FuroBaseComponents/commit/476189cafd9fb51537fd05dec85d9d36be1b1186))
* add item-selected event to furo-data-ui5-reference-search ([2d21ff3](https://github.com/theNorstroem/FuroBaseComponents/commit/2d21ff3fa4e728801d677f172b6a61e7083c74f4))
* new component with flow based enabled functions ([54608a7](https://github.com/theNorstroem/FuroBaseComponents/commit/54608a75704f16770301987c214659d9ac5fe215))





## [0.4.2](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/ui5@0.4.1...@furo/ui5@0.4.2) (2020-10-13)


### Bug Fixes

* add value-changed event for ui5 input components ([13ba2d7](https://github.com/theNorstroem/FuroBaseComponents/commit/13ba2d7d841e186aff64f825a24bcd765bbe8b9c))
* init binder in constructor to make ui5-data-property work ([0885321](https://github.com/theNorstroem/FuroBaseComponents/commit/088532100ab8c46ec374f828e38ca3c0bec6b570))
* reference search loses value ([800f519](https://github.com/theNorstroem/FuroBaseComponents/commit/800f5193f45d0db326f1475d21e0f5c57632971d))
* solve circular `_original` object assignment problem in ui5-collection-dropdown. fix ui5-components version ([dbecbd9](https://github.com/theNorstroem/FuroBaseComponents/commit/dbecbd98e3da130320244a91c38e781166c911ca))
* value state according to spec ([2a7cbe5](https://github.com/theNorstroem/FuroBaseComponents/commit/2a7cbe50cf7bc3a86211d53214d019283dc094f6))
* value state handling ([99f7ae0](https://github.com/theNorstroem/FuroBaseComponents/commit/99f7ae02b9aa59ea87c8bcfc39dd4b6b228344a3))





## [0.4.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/ui5@0.4.0...@furo/ui5@0.4.1) (2020-10-08)


### Bug Fixes

* notification group is collapsed if no value is transmitted ([92de1f9](https://github.com/theNorstroem/FuroBaseComponents/commit/92de1f9f75e5827c3f6955674cc4a0b10dfb90d4))
* original data from injected entities should be completely saved as _original. ([bd9b77a](https://github.com/theNorstroem/FuroBaseComponents/commit/bd9b77a11ab6cc41fc65fba5e9cdff91d41a2e83))





# [0.4.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/ui5@0.3.1...@furo/ui5@0.4.0) (2020-10-08)


### Bug Fixes

* attribute set with boolean value ([141ae43](https://github.com/theNorstroem/FuroBaseComponents/commit/141ae434d5f08907034b747f3d1aa33c6e4d39f4))
* the fieldNodeToUpdate object in collection-dropdown must have an initial status ([2ccc4b5](https://github.com/theNorstroem/FuroBaseComponents/commit/2ccc4b5e36120ea77e64dcc4f27d4663145e5272))
* typo ([00f5b2a](https://github.com/theNorstroem/FuroBaseComponents/commit/00f5b2a9b4ca1d14ba6adc345f2ea341f7e9c121))
* ui5 select doesn't support readonly ([d2dcf7a](https://github.com/theNorstroem/FuroBaseComponents/commit/d2dcf7a20725987951b951f1f3ddb1e4846827f4))
* use id as value subfield in collection dropdown for StringOptionProperty type ([e2b3673](https://github.com/theNorstroem/FuroBaseComponents/commit/e2b3673fbe24cc753365c90b5a7a8c59d884ec7b))


### Features

* extended ui5-button with convenience functions ([ec6957b](https://github.com/theNorstroem/FuroBaseComponents/commit/ec6957b2a52ddef3671b79b21b325c171fc95746))





## [0.3.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/ui5@0.3.0...@furo/ui5@0.3.1) (2020-09-14)


### Bug Fixes

* fix reference search and hooks ([5bc130c](https://github.com/theNorstroem/FuroBaseComponents/commit/5bc130c90e816b77f6ac0228907450d3452d184c))
* remove connectedCallback. init needed variables to solve the async problems ([cbf3c0d](https://github.com/theNorstroem/FuroBaseComponents/commit/cbf3c0d07b3a88c7864cf1d19aa21da49ab4a046))
* ui5 hooks generate the same component names ([9f95e45](https://github.com/theNorstroem/FuroBaseComponents/commit/9f95e45292a65d605f8d0712f5cdb5d3e03a5bec))





# [0.3.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/ui5@0.2.0...@furo/ui5@0.3.0) (2020-09-03)


### Bug Fixes

* add attributes and properties of ui-data-references-search in docu. add placeholder in attribute watcher ([74be387](https://github.com/theNorstroem/FuroBaseComponents/commit/74be3879fae51b7aae01d149242f419d09ac0369))
* async connectedCallback, initialize component ([2063b3e](https://github.com/theNorstroem/FuroBaseComponents/commit/2063b3ecc5ab6b46d80fd3c702b6b04873fe519c))
* breakpoints depends on parent element ([bd963d8](https://github.com/theNorstroem/FuroBaseComponents/commit/bd963d8619c1709e41a34d18d4e7eda66385bbde))
* debugging stuff removed ([fd39b6e](https://github.com/theNorstroem/FuroBaseComponents/commit/fd39b6e53568df14a77e20b5c97a460d380329d9))
* modify test. remove connectedCallback in radio-button-group ([e7bcc90](https://github.com/theNorstroem/FuroBaseComponents/commit/e7bcc90b95feb36e02a69e54444f7dbe16dabba3))
* move attribute in constructor to generate document with attributes/properties ([fbdf132](https://github.com/theNorstroem/FuroBaseComponents/commit/fbdf132e42227c5d52709870c61596b2bed58b70))


### Features

*   furo-ui5-message-strip and furo-ui5-message-strip-display ([a477a5d](https://github.com/theNorstroem/FuroBaseComponents/commit/a477a5d8ef0fea7eb35bb9c9892d20000f68b47f))
*  add furo-ui5-notification and furo-ui5-notification-list-display ([538033e](https://github.com/theNorstroem/FuroBaseComponents/commit/538033e16041db9314274fc668927d2407238265))
* display field component with data-binding and label ([e4e2189](https://github.com/theNorstroem/FuroBaseComponents/commit/e4e2189a0a6fc3b39e5d4aa9fd6122e8e5a35094))
* furo-ui5-notification-group ([d4da67c](https://github.com/theNorstroem/FuroBaseComponents/commit/d4da67c53de49d24ea6a40845bc64eca8ac5f599))





# [0.2.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/ui5@0.1.0...@furo/ui5@0.2.0) (2020-08-27)


### Bug Fixes

* constrains with boolean value should be handled as label ([da6592a](https://github.com/theNorstroem/FuroBaseComponents/commit/da6592afb03baccbfd38452237b0d77d2899fffa))
* first litter text-input ([2dcfdd6](https://github.com/theNorstroem/FuroBaseComponents/commit/2dcfdd640283cb149d71eaa8479eae5db5080faf))
* labeled elements should expose the attributes of the inner element ([a7aac57](https://github.com/theNorstroem/FuroBaseComponents/commit/a7aac57810cee052ce015ff95348541bfc0cc440))
* the problem by delete all fat texts is fixed ([892cb05](https://github.com/theNorstroem/FuroBaseComponents/commit/892cb05c354dee84a3758652e14e0dcb9114f71a))


### Features

*  ui5-data-segmented-button ([a188ca8](https://github.com/theNorstroem/FuroBaseComponents/commit/a188ca80922a462fe0087ff62064d2bbd8dd364c))
* add furo-ui5-data-date-picker ([bf64988](https://github.com/theNorstroem/FuroBaseComponents/commit/bf6498844444fd3ba588b3da06a91009d067ba7e))
* add more tests ([8808d80](https://github.com/theNorstroem/FuroBaseComponents/commit/8808d806b6d6a0303b40ef8fc4d1b31715644e8c))
* add more tests ([d02262b](https://github.com/theNorstroem/FuroBaseComponents/commit/d02262ba80e85c719dbcef7c2c61e2a65b4d1065))
* add more tests ([0ef5222](https://github.com/theNorstroem/FuroBaseComponents/commit/0ef5222650f2910b45f5f6080d6a7831cb9f3142))
* add more tests ([0d903b8](https://github.com/theNorstroem/FuroBaseComponents/commit/0d903b8f28e63b9e435a3d843226e6e69c7a7c56))
* add ui5 reference search ([7cb6eab](https://github.com/theNorstroem/FuroBaseComponents/commit/7cb6eabef148493a75f6c0253c58b9e238add50c))
* furo-ui5-data-money-input ([c48b995](https://github.com/theNorstroem/FuroBaseComponents/commit/c48b99547c64e6eeb1d42f305ed9fea80c757cd6))
* furo-ui5-notification-list with demos and tests ([0560aff](https://github.com/theNorstroem/FuroBaseComponents/commit/0560affaacc7b7a772a6b37289750cac8901b98d))
* revert demo ([83e590f](https://github.com/theNorstroem/FuroBaseComponents/commit/83e590f0dfbdb69b6c3b6d9e2c94acc482f718c2))
* test for ui5-data-textarea-input ([78b001a](https://github.com/theNorstroem/FuroBaseComponents/commit/78b001a807d9f83efff5299d3fb450fdb6e33349))
* ui5-data-property ([3da649d](https://github.com/theNorstroem/FuroBaseComponents/commit/3da649d9d8d5535aa2b011785905f88ff061dd22))
* use labeled components in data property ([f7ceeea](https://github.com/theNorstroem/FuroBaseComponents/commit/f7ceeea1da678eb6028a46c4e813eb942d4fa9d2))





# 0.1.0 (2020-08-11)


### Features

* first litter for the new UI5 package ([88b440f](https://github.com/theNorstroem/FuroBaseComponents/commit/88b440fa56e7ba2ccbce208c0276e195082e833b))
