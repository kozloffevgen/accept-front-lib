const defaultOptions = {
  configPath: 'config.js'
}

class initOptions {
  constructor(options) {
    this.options = {
      ...defaultOptions,
      ...options,
    }
  }
}

module.exports = initOptions
