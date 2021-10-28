export default /** @type {import('@web/dev-server').DevServerConfig} */ ({

  watch: true,
  /** Resolve bare module imports */
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },
  preserveSymlinks: true,
  rootDir: '../../',
  plugins: [
  ],


});
