#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');

welcome({
    title: `Antonio Quintero-Felizzola`,
    tagLine: `Hi! Nice to meet you!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true
});

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