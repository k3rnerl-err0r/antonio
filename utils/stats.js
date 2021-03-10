const axios = require('axios');
const handleError = require('cli-handle-error');
const to = require('await-to-js').default;
const ora = require('ora');
const { green, yellow } = require('chalk');

const spinner = ora({ text: '' });
const apiURL = `https://api.github.com/users/k3rnel-err0r`;

module.exports = async () => {
    spinner.start(`${green(`FOLLOWERS`)} fetching...`);
    const [error, response] = await to(axios.get(apiURL));
    handleError(`API CALLED FAILED`, error, true, true);

    const githubFollowers = response.data.followers;
    // spinner.succeed(`${yellow(`FOLLOWERS`)} fetched`);
    spinner.stop();
    
    console.log(`
GitHub Followers: ${githubFollowers}
`);
};