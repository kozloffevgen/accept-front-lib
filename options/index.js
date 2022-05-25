const path = require('path');

const defaultOptions ={
  configPath: 'config.js',
}

class buildOptions {
  constructor(options = {}) {
    this.options = {
      ...defaultOptions,
      ...options,
    }

    this.configPath = path.resolve(this.options.configPath);
    this.configPathDir = path.dirname(this.configPath);
    this.config = this.checkConfigFile();

    const {stylesPaths, scriptsPaths} = this.getBuildData();

    this.stylesPaths = stylesPaths;
    this.scriptsPaths = scriptsPaths;
  }

  checkConfigFile() {
    let items = {};

    try {
      items = require(this.configPath);
    } catch {
      console.log(`Config file not found: ${this.configPath}`);
    }

    return items;
  }

  getBuildData() {
    let stylesPaths;
    let scriptsPaths;

    const {styles, scripts} = this.config;

    if (styles) {
      stylesPaths = styles;
    }

    if (scripts) {
      scriptsPaths = scripts;
    }

    return {
      stylesPaths,
      scriptsPaths,
    };
  }
}

module.exports = buildOptions;
