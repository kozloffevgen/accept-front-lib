const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const glob = require('glob');

module.exports = (pathDir) => {
  return {
    mode: 'development',
    entry: {
      sprite: glob.sync(`${pathDir}/src/client/images/*.svg`),
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFileName: 'images.svg',
            },
          },
        },
      ],
    },
    plugins: [
      new SpriteLoaderPlugin(),
      {
        apply: (compiler) => {
          compiler.hooks.emit.tapAsync('removeJsChunks', (compilation, callback) => {
            delete compilation.assets['sprite.js'];
            callback();
          });
        },
      },
    ],
    output: {
      path: `${pathDir}/App/www/images/sprites`,
    },
  }
};
