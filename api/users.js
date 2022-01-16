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
        console.log(user);
    }
}

const newUser = new User("https://api.github.com/users/");
newUser.getUser("StarbzYT");