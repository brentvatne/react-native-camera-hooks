module.exports = api => {
  api.cache(true);

  return {
    env: {
      test: {
        presets: ['module:metro-react-native-babel-preset'],
      },
      prod: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        plugins: [
          '@babel/plugin-transform-flow-strip-types',
          ['@babel/plugin-proposal-class-properties', { loose: true }],
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-syntax-import-meta',
          '@babel/plugin-proposal-json-strings',
        ],
      },
    },
  };
};
