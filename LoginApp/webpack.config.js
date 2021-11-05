// entry? -> output?
/*
  Webpack tool: dùng để tích hợp các file js thành 1 file js duy nhất thay vì phải render nhiều file js và phải quan tâm đến trình
  tự render của chúng
*/
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
console.log(path.join(__dirname, "public", "dist"));
module.exports = (env) => {
  const isProduction = env === "production";

  return {
    entry: "/src/app.js",
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js",
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

    devtool: isProduction ? "source-map" : "inline-source-map",

    devServer: {
      static: [
        {
          directory: path.join(__dirname, "public"),
        },
      ],
      devMiddleware: {
        publicPath: "https://localhost:3000/dist/",
      },
      historyApiFallback: {
        index: "/",
      },
    },
    mode: isProduction ? "production" : "development",
  };
};
