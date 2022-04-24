#!/usr/bin/env node
const commander = require('commander')
const { builder } = require('./webpack/config.build')

commander.command('build').action(() => {
  console.log(builder);
})

commander.command('start').action(() => {
  console.log('start');
})

commander.parse(process.argv);
