const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = (paths, pathDir) => {
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
          test: /\.svg$/,
          loader: 'vue-svg-loader',
        },
        {
          test: /\.less$/,
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
    resolve: {
      alias: {
        ComponentsJs:`${path.dirname(__dirname)}/components/js`,
        Svg: `${pathDir}/App/www/images/svg-sprite`
      }
    }
  }
}
