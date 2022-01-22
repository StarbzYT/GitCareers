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
        // slice repos list to get only 8 recent repos
        const recentRepos = repoInfo.slice(0, 9);
        // for each repo, select the language and put into array
        const commonLangs = recentRepos.map((repo) => repo.language);
        // extract topLang1 from commonLangs and choose the 2nd top language
        return [commonLangs[commonLangs.length - 1], commonLangs[commonLangs.length - 2]];
    }
    // get user meta data: name, username, 
    async getUserProfile(userName) {
        // GET
        const requestURL = `${this.API_URL}${userName}`;
        const response = await fetch(requestURL);
        const user = await response.json();
        // grab metadata from user object
        const { avatar_url, name, login, bio } = user;
        // get repos for user
        const userRepos = await this.getRepos(user);
        // get users top languages
        const topLang = await this.getLanguages(userRepos);
        // return user object with profile data
        const profileData = {
            // avatar
            avatar: avatar_url,
            // name
            name: name,
            // username
            username: login,
            // bio
            bio: bio,
            // github profile link
            link: `github.com/${login}`,
            // languages user used recently
            languages: topLang
        }
        return profileData;
    }
}

// example of how we would use this class in main.js
const newUser = new User("https://api.github.com/users/");

async function userProfile(user) {
    const userProfile = await newUser.getUserProfile("StarbzYT");
    console.log(userProfile);
}
userProfile(newUser);
// newUser.getUserProfile("bhavjitChauhan")
//     .then((userData) => {
//         console.log(userData);
//         // newUser.getRepos(userData)
//         //     .then((repoData) => {
//         //         newUser.getLanguages(repoData)
//         //             .then((recentRepos) => {
//         //                 console.log(recentRepos);
//         //             })
//         //     })
//     })



