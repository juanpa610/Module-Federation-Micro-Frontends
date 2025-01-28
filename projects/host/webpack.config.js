const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'host',

  remotes: {
    'micro-front': 'http://localhost:4000/remoteEntry.js',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    'shared-library-cards': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
  },

});
