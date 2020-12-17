const HtmlWebpackPlugin = require("html-webpack-plugin"),
  config = require("./webpack.config");
const plugins = config.plugins || [];
module.exports = Object.assign({}, config, {
  mode: "development",
  devServer: {
    open: true,
  },
  entry: {
    example: "./example/animation/index.ts",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    ...plugins,
    new HtmlWebpackPlugin({
      template: "./example/animation/example4.html",
    }),
  ],
});
