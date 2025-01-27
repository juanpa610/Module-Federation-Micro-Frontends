const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'micro-front',

  exposes: {
    './AppComponent': './projects/micro-front/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    // 'shared': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  },

});
