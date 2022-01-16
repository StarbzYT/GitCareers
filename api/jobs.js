class JobList{

    constructor(url){
        this.url = url;
    }

    async getJobList(language){

        const request = `${this.url}${language}%20developer&content-type=application/json`;
        const response = await fetch(request);
        const list = await response.json();

        console.log(list);
    }
}
const newList = new JobList("https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=1a947cf7&app_key=480a50fa2ccc0bb63d1b78f7072d2fa8&results_per_page=9&what=");
// newList.getJobList("javascript");