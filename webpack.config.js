const path = require("path");
//import path from "path";

module.exports = {
  entry: "./app/app.js",
  // output: {
  //   filename: "bundled.js",
  //   path: path.resolve(__dirname, "app"),
  // },
  // devServer: {
  //   before: (app, server) => {
  //     server._watch("./app/**/*.html");
  //   },
  //   contentBase: path.join(__dirname, "app"),
  //   hot: true,
  //   // server: 3000,
  //   host: "0.0.0.0",
  // },
  // mode: "development",
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/i,
  //       use: ["style-loader", "css-loader"],
  //     },
  //     {
  //       test: /\.js$/i,
  //       exclude: /(node_modules)/,
  //       use: {
  //         loader: "babel-loader",
  //         options: {
  //           presets: ["@babel/preset-react", "@babel/preset-env"],
  //         },
  //       },
  //     },
  //     {
  //       test: /\.s[a/c]ss$/i,
  //       use: ["style-loader", "css-loader", "sass-loader"],
  //     },
  //   ],
  // },
};
