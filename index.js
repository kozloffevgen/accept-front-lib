#!/usr/bin/env node
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const commander = require('commander');
const buildOptions = require('./options');
const buildStyles = require('./webpack/config.build.styles');
const buildScripts = require('./webpack/config.build.scripts');

const webpackRun = (options, name, pathDir = {}) => {
  const compiler = webpack(options);
  compiler.run((err) => {
    if (err) console.log(err);
    else console.log(`Webpack Build ${name} Done!`)
  })

  if (name === 'Serve') {
    const devServerOptions = webpackServe(pathDir);
    const server = new WebpackDevServer(devServerOptions, compiler);

    const runServer = async () => {
      console.log('Starting server...');
      await server.start();
    };
    
    runServer();
  }
};

commander.command('build')
.option('--config-path <path>')
.action((options) => {
  const {stylesPaths, scriptsPaths, configPathDir} = new buildOptions(options);

  if (stylesPaths) {
    const stylesOptions = buildStyles(stylesPaths, configPathDir);

    webpackRun(stylesOptions, 'Styles');
  }

  if (scriptsPaths) {
    const scriptOptions = buildScripts(scriptsPaths, configPathDir);

    webpackRun(scriptOptions, 'Scripts');
  }
});
