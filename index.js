#!/usr/bin/env node
const webpack = require('webpack');
const commander = require('commander');
const buildOptions = require('./options');
const buildStyles = require('./webpack/config.build.styles');
const buildScripts = require('./webpack/config.build.scripts')

commander.command('build')
.option('--config-path <path>')
.action((options) => {
  const webpackOptions = new buildOptions(options);

  const webpackRun = (options, name) => {
    const compiler = webpack(options);

    compiler.run((err) => {
      if (err) console.log(err);
      else console.log(`Webpack Build ${name} Done!`)
    })
  }

  if (webpackOptions.stylesPaths) {
    const stylesOptions = buildStyles(webpackOptions.stylesPaths, webpackOptions.configPathDir);

    webpackRun(stylesOptions, 'Styles');
  }

  if (webpackOptions.scriptsPaths) {
    const scriptOptions = buildScripts(webpackOptions.scriptsPaths, webpackOptions.configPathDir);

    webpackRun(scriptOptions, 'Scripts');
  }
})

commander.parse(process.argv);
