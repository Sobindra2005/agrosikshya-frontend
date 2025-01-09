const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add custom resolver settings
config.resolver = {
  ...config.resolver,
  extraNodeModules: {
    "react-native-css-interop": require.resolve("react-native-css-interop"),
  },
  sourceExts: [...config.resolver.sourceExts, 'jsx', 'js', 'ts', 'tsx'],
};

module.exports = withNativeWind(config, { input: "../global.css" });