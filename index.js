#!/usr/bin/env node
const commander = require('commander')
const InitOptions = require('./configs/options')

commander.command('build')
.option('--config-path <path>')
.action((options) => {
  const initOptions = new InitOptions(options)
})

commander.parse(process.argv);
