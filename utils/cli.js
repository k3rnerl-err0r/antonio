const meow = require('meow');
const { green, yellow, cyan } = require('chalk');

const helpText = `
    Usage
      ${green(`npx antonioqfel`)} ${yellow(`[--options]`)} ${cyan(`<commands>`)}

    Options
      ${yellow(`--social`)}       Print the social info
      ${yellow(`--no-social`)}    Don't print the social info
      ${yellow(`--ad`)}           Print the ad info
      ${yellow(`--no-ad`)}        Don't print the ad info
      ${yellow(`-d`)}, ${yellow(`--debug`)}    Print debug information
      ${yellow(`-v`)}, ${yellow(`--version`)}  Print CLI version
    
    Commands
      ${cyan(`help`)}           Print CLI help information

    Examples
      ${green(`npx antonioqfel`)} ${yellow(`--no-social`)} 
      ${green(`npx antonioqfel`)} ${yellow(`--no-ad`)} 
`;

const options = {
    flags: {
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
        }
    }
};

module.exports = meow(helpText, options);