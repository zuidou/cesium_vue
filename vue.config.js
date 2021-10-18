const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  // 基本路径  3.6之前的版本时 baseUrl
  publicPath: "./",
  // 输出文件目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // Copy Cesium Assets, Widgets, and Workers to a static directory
      new CopyWebpackPlugin({
        patterns: [{
            from: "node_modules/cesium/Build/Cesium/Workers",
            to: "Workers"
          },
          {
            from: "node_modules/cesium/Build/Cesium/ThirdParty",
            to: "ThirdParty"
          },
          {
            from: "node_modules/cesium/Build/Cesium/Assets",
            to: "Assets"
          },
          {
            from: "node_modules/cesium/Build/Cesium/Widgets",
            to: "Widgets"
          }
        ]
      }),
      new webpack.DefinePlugin({
        // Define relative base path in cesium for loading assets
        CESIUM_BASE_URL: JSON.stringify("")
      })
    ],
    module: {
      // Removes these errors: "Critical dependency: require function is used in a way in which dependencies cannot be statically extracted"
      // https://github.com/AnalyticalGraphicsInc/cesium-webpack-example/issues/6
      unknownContextCritical: false,
      unknownContextRegExp: /\/cesium\/cesium\/Source\/Core\/buildModuleUrl\.js/
    }
  }
};