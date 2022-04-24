// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const path = require('path');

export default class builder {
  constructor(proprs) {
    console.log(props);
  }
}

// module.exports = {
//   optimization: {
//     minimize: true,
//     minimizer: [
//       new CssMinimizerPlugin(),
//       new UglifyJsPlugin(),
//     ],
//   },
//   entry: {
//     admin: "./src/admin/admin.js",
//     client: "./src/client/App.js",
//     common: "./src/common/common.js",
//   },
//   output: {
//     path: path.resolve(__dirname, "App/"),
//     filename: "[name]/scripts/[name].min.js",
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: "[name]/styles/[name].min.css",
//     }),
//           new VueLoaderPlugin(),

//   ],
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//             'vue-style-loader',
//             'css-loader'
//         ]
//       },
//       {
//         test: /\.js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env']
//           }
//         }
//       },
//       {
//         test: /\.vue$/,
//         loader: "vue-loader",
//         options: {
//           loader: {
//             less: "vue-style-loader!css-loader!less-loader",
//           }
//         },
//       },
//       {
//         test: /\.less$/i,
//         use: 
//         [
//           MiniCssExtractPlugin.loader,
//           "css-loader",
//           "less-loader",
//         ],
//       },
//     ]
//   },
//   devServer: {
//     static: './App',
//     open: true,
//     hot: true,
//   }
// }
