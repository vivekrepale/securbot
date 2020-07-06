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
    }),
  ],
  devServer: {
    before: (app, server) => {
      server._watch("./app/**/*.html");
    },
    contentBase: path.join(__dirname, "app"),
    hot: true,
    // server: 3000,
    // host: "0.0.0.0",
    open: true,
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
          use: [
            'file-loader',
          ],
        }
    ],
  },
};
