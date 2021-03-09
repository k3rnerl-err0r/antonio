#!/usr/bin/env node

const logSymbols = require('log-symbols');
const alert = require('ke-cli-alerts');

const init = require('./utils/init');
const data = require('./utils/data');
const cli = require('./utils/cli');
const debug = require('./utils/debug');

const input = cli.input;
const flags = cli.flags;

(() => {
    init(flags.minimal, flags.clear);

    input.includes('help') && cli.showHelp(0);

   
    flags.bio && console.log(data.asciiPC);
    flags.bio && console.log(data.bio);
    flags.social && console.log(data.social);
    flags.ad && console.log(data.ad);

    // Debug info if needed
    debug(flags.debug, cli);

})();