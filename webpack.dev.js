const path = require("path");
const common = require("./webpack.config");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/app.js",
  mode: "development",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./app/index.html",
      favicon: "./app/assets/images/logoFavicon.ico",
    }),
  ],
  devServer: {
    before: (app, server) => {
      server._watch("./app/**/*.html");
    },
    contentBase: path.join(__dirname, "app"),
    hot: true,
    port: 3000,
    // host: "0.0.0.0",
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              [
                "@babel/preset-env",
                {
                  targets: { node: "12" },
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.s[a/c]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
    ],
  },
};
