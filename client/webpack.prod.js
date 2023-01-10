const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[fullhash].build.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[fullhash].build.css" }),
    new CleanWebpackPlugin(),
  ],
});
