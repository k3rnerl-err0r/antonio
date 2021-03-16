const meow = require('meow');
const meowHelp = require('cli-meow-help');
const { green, yellow, cyan, dim } = require('chalk');

const flags = {
    ad: {
        desc: 'Prints the ad info',
        type: 'boolean',
        default: true
    },
    // 'no-ad': {
    //     desc: 'Does not print the ad info',
    //     type: 'boolean',
    //     default: false
    // },
    bio: {
        desc: 'Prints the bio info',
        type: 'boolean',
        default: true
    },
    // 'no-bio': {
    //     desc: 'Does not print the bio info',
    //     type: 'boolean',
    //     default: false
    // },
    clear: {
        desc: 'Clears the console',
        type: 'boolean',
        default: true
    },
    debug: {
        desc: 'Prints the debug info',
        type: 'boolean',
        default: false,
        alias: 'd'
    },
    minimal: {
        desc: 'Prints mininimal info',
        type: 'boolean',
        default: false,
        alias: 'm'
    },
    social: {
        desc: 'Prints the social info',
        type: 'boolean',
        default: true
    },
    // 'no-social': {
    //     desc: 'Does not print the social info',
    //     type: 'boolean',
    //     default: false
    // },
    version: {
        desc: 'Prints CLI version',
        type: 'boolean',
        default: false,
        alias: 'v'
    }
};

const commands = {
    help: {
        desc: 'Print CLI help info'
    }
};

const helpText = meowHelp({
    name: 'npx antonioqfel',
    flags,
    commands,
    defaults: false
});

const options = {
    description: false,
    inferType: true,
    hardRejection: false,
    flags
};

module.exports = meow(helpText, options);