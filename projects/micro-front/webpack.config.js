const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'micro-front',

  exposes: {
    './AppComponent': './projects/micro-front/src/app/app.component.ts',
    './CardComponent': './projects/micro-front/src/app/ui/components/card/card.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    'shared-library-cards-test': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
  },

});
