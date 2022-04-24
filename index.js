const commander = require('commander')

commander.command('a').action(() => {
  console.log('123');
})

commander.parse(process.argv);
