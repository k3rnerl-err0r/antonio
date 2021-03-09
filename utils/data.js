const chalk = require('chalk');

// Alerts
const success = chalk.green;
const info = chalk.blue.inverse;
const warning = chalk.keyword(`orange`);
const error = chalk.red.bold;

const asciiPC = `${chalk.white(`
                __
     ..=====.. |==|
     ||     || |= |
  _  ||     || |^*| _
 |=| o=,===,=o |__||=|
 |_|  _______)~')  |_|
     [=======]  ()`)}`;

const bio = `${chalk.italic(`
I am a passionate Softaware Developer in pursuit of JavaScript mastery, 
deep curiosity in existing and emerging web technologies. 
I'm a strong team player with a strong problem-solving addiction.
Recently fell in love with Rust and I have been doing some systems programming.
`)}`;

const social =`
${chalk.hex('#1da1f2').bold.inverse(` Twitter `)} ${chalk.dim(`https://twitter.com/k3rnel_err0r`)}
${chalk.hex('#6cc644').bold.inverse(` GitHub `)} ${chalk.dim(`https://github.com/k3rnerl-err0r`)}`;

const emojiInfo = `
🥷  TypeScript/JavaScript Ninja
🦀 Rustacean 
🐧 Linux Enthusiast
🎮 Game Developer`;

const ad = `${chalk.blue(`
I am working on Node CLI automation.`)}`;

module.exports = {
    asciiPC,
    bio,
    social,
    ad
};