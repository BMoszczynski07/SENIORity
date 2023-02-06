// import SveltePreprocess from "svelte-preprocess";

export default {
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
          // options: {
          //   preprocess: SveltePreprocess({
          //     typescript: {
          //       tsconfigFile: "./tsconfig.json",
          //     },
          //   }),
          // },
        },
      },
      //Allows use of images
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets",
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // inject styles into DOM
          "css-loader", // turns css into commonjs
          "sass-loader", // turns sass into css
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".svelte", ".scss"],
  },
};
