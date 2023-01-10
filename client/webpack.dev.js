const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
    //take our environment variable in .env file
    //And it does a text replace in the resulting bundle for any instances of process.env.
    new Dotenv(),
  ],
  resolve: {
    extensions: [".mjs", ".js", ".svelte"],
  },
});
