const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  lodash: require.resolve('lodash'),
};

module.exports = config;
