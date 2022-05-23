const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const stylesBuild = (paths, pathDir) => {
  return {
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
      ],
    },
    entry: paths,
    output: {
      path: pathDir,
      filename: "bundle/[name].js",
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name]",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
              'css-loader'
          ]
        },
        {
          test: /\.less$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "less-loader",
          ],
        },
      ]
    },
  }
}

module.exports = stylesBuild;
