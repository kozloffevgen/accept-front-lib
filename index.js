#!/usr/bin/env node
const webpack = require('webpack');
const commander = require('commander');
const chalk = require('chalk');
const buildOptions = require('./options');
const buildStyles = require('./webpack/config.styles');
const buildScripts = require('./webpack/config.scripts');
const buildSvg = require('./webpack/config.svg');

const errorMessage = (error) => {
  console.log(chalk.red(error))
}

const webpackRun = (options, name) => {
  console.log(`Webpack Build ${name} Start...`)
  const compiler = webpack(options);
  compiler.run((err, state) => {
    if (err) {
      errorMessage(err);
      process.exit(1);
    }
    if (state.compilation.errors.length) {
      errorMessage(state.compilation.errors);
      process.exit(1);
    }
    else console.log(`Webpack Build ${name} Done!`)
  })
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

commander.command('svg')
.action(() => {
  const {configPathDir} = new buildOptions();
  const svgOptions = buildSvg(configPathDir);

  webpackRun(svgOptions, 'Svg')
}); 

commander.parse(process.argv);
