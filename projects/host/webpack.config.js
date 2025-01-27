const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'host',
  // exposes: {
  //   './Component': './projects/host/src/app/app.component.ts',
  // },

  remotes: {
    'micro-front': 'http://localhost:4000/remoteEntry.js',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    // 'shared': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  },

});
