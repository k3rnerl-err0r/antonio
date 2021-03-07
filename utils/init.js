const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');
const welcome = require('cli-welcome');

const pkgJSON = require('./../package.json');

module.exports = () => {
    unhandled();

    checkNode('10');

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
}