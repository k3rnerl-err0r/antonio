#!/usr/bin/env node
const chalk = require('chalk');
const logSymbols = require('log-symbols');

const init = require('./utils/init')

// Alerts
const success = chalk.green;
const info = chalk.blue;
const warning = chalk.keyword(`orange`);
const error = chalk.red.bold;

(() => {
    init();
    
    console.log(`
    ${chalk.white(
        `                   __
            ..=====.. |==|
            ||     || |= |
        _  ||     || |^*| _
        |=| o=,===,=o |__||=|
        |_|  _______)~')  |_|
            [=======]  ()`
    )}

    ${chalk.italic(
        `I am a passionate Softaware Developer in pursuit of JavaScript mastery, 
    deep curiosity in existing and emerging web technologies. 
    I'm a strong team player with a strong problem-solving addiction.
    Recently fell in love with Rust and I have been doing some systems programming.`
    )}

    🥷  TypeScript/JavaScript Ninja
    🦀 Rustacean 
    🐧 Linux Enthusiast
    🎮 Game Developer

    ${chalk.hex('#1da1f2').bold.inverse(` Twitter `)} ${chalk.dim(`https://twitter.com/k3rnel_err0r`)}
    ${chalk.hex('#6cc644').bold.inverse(` GitHub `)} ${chalk.dim(`https://github.com/k3rnerl-err0r`)}
    `);

    console.log(`
    ${logSymbols.success} ${success(` SUCCESS `)} Thank you for checking my CLI.
    ${logSymbols.info} ${info(` INFO `)} I am working on Node CLI automation.
    ${logSymbols.warning} ${warning(` WARNING `)} Please don't copy me. Be yourselg
    ${logSymbols.error} ${error(` ERROR `)} I'm on vacation. Contact me next week
    `);
})();