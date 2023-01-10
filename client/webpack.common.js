const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      //Allows use of modern javascript
      {
        test: /\.js?$/,
        exclude: /node_modules/, //don't test node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      //Allows use of svelte
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
        },
      },
      //Allows use of CSS
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      //Allows use of images
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[fullhash].[ext]",
          outputPath: "assets",
        },
      },
    ],
  },
};
