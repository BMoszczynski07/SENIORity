// const path = require("path");
// const common = require("./webpack.common");
// const { merge } = require("webpack-merge");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import path from "path";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import process from "process";

const __dirname = path.resolve();
process.chdir(__dirname);

export default merge(common, {
  mode: "production",
  output: {
    filename: "[fullhash].build.js",
    path: `${__dirname}/dist`,
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
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css into files
          "css-loader", // turns css into commonjs
          "sass-loader", // turns sass into css
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
});
