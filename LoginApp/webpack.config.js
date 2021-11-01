// entry? -> output?
/*
  Webpack tool: dùng để tích hợp các file js thành 1 file js duy nhất thay vì phải render nhiều file js và phải quan tâm đến trình
  tự render của chúng
*/
const path = require("path");
console.log(path.join(__dirname, "public"));
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: ["babel-polyfill", "./src/app.js"],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/",
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],

  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,

        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  mode: "development",

  devtool: "eval-cheap-module-source-map",

  devServer: {
    static: path.join(__dirname, "public"),
    historyApiFallback: {
      index: "/",
    },
  },
};
