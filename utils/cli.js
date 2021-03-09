const meow = require('meow');
const { green, yellow, cyan, dim } = require('chalk');

const helpText = `
    Usage
      ${green(`npx antonioqfel`)} ${yellow(`[--options]`)} ${cyan(`<commands>`)}

    Options
      ${yellow(`--bio`)}          Print the bio info ${dim(`(Default: true)`)}
      ${yellow(`--no-bio`)}       Don't print the bio info
      ${yellow(`--social`)}       Print the social info ${dim(`(Default: true)`)}
      ${yellow(`--no-social`)}    Don't print the social info
      ${yellow(`--ad`)}           Print the ad info ${dim(`(Default: true)`)}
      ${yellow(`--no-ad`)}        Don't print the ad info
      ${yellow(`--clear`)}        Clear the console ${dim(`(Default: true)`)}
      ${yellow(`--no-clear`)}     Don't clear the console
      ${yellow(`-m`)}, ${yellow(`--minimal`)}  Print minimal info
      ${yellow(`-d`)}, ${yellow(`--debug`)}    Print debug info
      ${yellow(`-v`)}, ${yellow(`--version`)}  Print CLI version
    
    Commands
      ${cyan(`help`)}           Print CLI help info

    Examples
      ${green(`npx antonioqfel`)} ${yellow(`--no-social`)} 
      ${green(`npx antonioqfel`)} ${yellow(`--no-ad`)} 
`;

const options = {
    inferType: true,
    hardRejection: false,
    flags: {
        bio: {
            type: 'boolean',
            default: true
        },
        social: {
            type: 'boolean',
            default: true
        },
        ad: {
            type: 'boolean',
            default: true
        },
        debug: {
            type: 'boolean',
            default: false,
            alias: 'd'
        },
        version: {
            type: 'boolean',
            default: false,
            alias: 'v'
        },
        minimal: {
            type: 'boolean',
            default: false,
            alias: 'm'
        },
        clear: {
            type: 'boolean',
            default: true
        }
    }
};

module.exports = meow(helpText, options);