const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const scriptBuildOptions = (paths, pathDir) => {
  return {
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [
        new UglifyJsPlugin(),
      ],
    },
    entry: paths,
    output: {
      path: pathDir,
      filename: "[name]",
    },
    plugins: [
      new VueLoaderPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
          options: {
            loader: {
              less: "vue-style-loader!css-loader!less-loader",
            }
          },
        },
      ]
    },
  }
}

module.exports = scriptBuildOptions;