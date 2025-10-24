import { Command } from 'commander';

const program = new Command();

program.name('commander setup').description('commander setup').version('1.0.0');

// Test
program
  .command('hello')
  .description('says hello to the user')
  .argument('<name>', 'Your name')
  .action((name) => {
    console.log(`👋🏻 Hello, ${name}! Welcome to the CLI`);
  });

program.parse();
