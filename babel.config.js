module.exports = api => {
  const productionPlugins = api.env('production') ? [['transform-remove-console']] : [];

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ...productionPlugins,
      [
        'module-resolver',
        {
          extensions: ['.ios.js', '.android.js', '.js', '.json', '.ts', '.tsx', '.svg', '.webp'],
          alias: {
            assets: './app/assets',
            images: './app/assets/images',
            styles: './app/assets/styles',
            components: './app/components',
            modals: './app/components/modals',
            modules: './app/modules',
            constants: './app/constants',
            navigator: './app/navigator',
            screens: './app/screens',
            utils: './app/utils',
            hooks: './app/hooks',
          },
        },
      ],
    ],
    assumptions: {
      privateFieldsAsProperties: true,
    },
  };
};
