#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
    title: pkgJSON.name,
    tagLine: `Hi! Nice to meet you!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true
});

console.log(`
Antonio Quintero-Felizzola

I am a passionate Web Developer in pursuit of JavaScript mastery, 
deep curiosity in existing and emerging web technologies. 
I'm a strong team player with a strong problem-solving addiction.

🥷  TypeScript/JavaScript Ninja
🐧 Linux Enthusiast
🎮 Game Developer

🐦 Twitter: https://twitter.com/k3rnel_err0r
📖 GitHub: https://github.com/k3rnerl-err0r

`);