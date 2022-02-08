// helper js file to find user's github info
export class User {
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
    // if languages of recent repos are the same, only return 1
    if (
      commonLangs[commonLangs.length - 1] ===
      commonLangs[commonLangs.length - 2]
    ) {
      return commonLangs[commonLangs.length - 1]; // just return recent (no duplicates)
    }
    return [
      commonLangs[commonLangs.length - 1],
      commonLangs[commonLangs.length - 2],
    ];
  }
  // get user meta data: name, username,
  async getUserProfile(userName) {
    // GET
    const requestURL = `${this.API_URL}${userName}`;
    const response = await fetch(requestURL);
    // if user exists, grab their metadata
    if (response.ok) {
      const user = await response.json();
      // grab metadata from user object
      const { avatar_url, name, login, bio } = user;
      // get repos for user
      const userRepos = await this.getRepos(user);
      // get users top languages
      let topLang = await this.getLanguages(userRepos);
      // check if top lang is undefined, if it is, change its value
      if (!topLang) {
        topLang = [undefined, undefined];
      }
      // return user object with profile data
      const profileData = {
        // avatar
        avatar: avatar_url,
        // name
        name: name ? name : 'N/A',
        // username
        username: login,
        // bio
        bio: bio ? bio : `My name is ${name || 'N/A'} and I love to code!`,
        // github profile link
        link: `github.com/${login}`,
        // languages user used recently
        // if user has atleast lang, show whole array, but if both langs are undefined, say None at the moment
        languages: topLang[0] || topLang[1] ? topLang : 'None at the moment.',
      };
      return profileData;
    } else {
      return 'Profile not found.';
    }
    // if user does not exist, show error
  }
}
