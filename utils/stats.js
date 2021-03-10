const fetch = require('node-fetch');
const axios = require('axios');
const handleError = require('cli-handle-error');
const to = require('await-to-js').default;

const apiURL = `https://api.github.com/users/k3rnel-err0r`;

module.exports = async () => {
    // const response = await fetch(apiURL);
    // const data = await response.json();
    // const githubFollowers = data.followers;
    
    const [error, response] = await to(axios.get(apiURL));
    handleError(`API CALLED FAILED`, error, true, true);

    const githubFollowers = response.data.followers;
    console.log(`
GitHub Followers: ${githubFollowers}
`);
};