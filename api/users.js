// helper js file to find user's github info
class User {
    constructor(API_URL) {
        this.API_URL = API_URL;
    }
    // get user based off username
    async getUser(userName) {
        // GET
        const requestURL = `${this.API_URL}${userName}`;
        const response = await fetch(requestURL);
        const user = await response.json();
        // return user object
        return user;
    }
    // get users list of repos
    async getRepos(userInfo) {
        const reposURL = userInfo.repos_url;
        const response = await fetch(reposURL);
        const repos = await response.json();
        return repos;
    }
    // get common languages for last 4 repos
    async getLanguages(repoInfo) {
        // slice repos list to get only 4 recent repos
        const recentRepos = repoInfo.slice(0, 9);
        console.log(recentRepos);
        // for each repo, select the most dominant language
        const commonLangs = recentRepos.map((repo) => repo.language);
        return commonLangs;
    }
}

// example of how we would use this class in main.js
const newUser = new User("https://api.github.com/users/");
newUser.getUser("StarbzYT")
    .then((userData) => {
        newUser.getRepos(userData)
            .then((repoData) => {
                newUser.getLanguages(repoData)
                    .then((recentRepos) => {
                        console.log(recentRepos);
                    })
            })
    })



