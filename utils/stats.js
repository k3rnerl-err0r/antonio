const axios = require('axios');
const handleError = require('cli-handle-error');
const to = require('await-to-js').default;

const apiURL = `https://api.github.com/users/k3rnel-err0r`;

module.exports = async () => {
    const [error, response] = await to(axios.get(apiURL));
    handleError(`API CALLED FAILED`, error, true, true);

    const githubFollowers = response.data.followers;
    console.log(`
GitHub Followers: ${githubFollowers}
`);
};