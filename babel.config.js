module.exports = {
  "presets": ["module:metro-react-native-babel-preset"],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    "react-native-classname-to-style",
    [
      "react-native-platform-specific-extensions",
      {
        "extensions": ["scss", "sass"]
      }
    ]
  ]
};