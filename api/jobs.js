// import api auth data
import { APP_ID, API_KEY } from './apiAuth.js';

export class JobList{
    // each instance must pass api url
    constructor(url) {
        this.url = url;
    }
    // get users' jobs based on their most-used language
    async getJobList(language1, language2) {
        // attach query to base url
        // first request is for most used lang and second is for second most used lang
        const request1 = `${this.url}${language1}%20developer&content-type=application/json`;
        const request2 = `${this.url}${language2}%20developer&content-type=application/json`;
        // make requests for each language and return array of results for both languages
        const response1 = await fetch(request1);
        const list1 = await response1.json();
        const response2 = await fetch(request2);
        const list2 = await response2.json();
        // filter data for the meta data we need
        return [list1.results, list2.results];
    }
}
// const JOBS_URL = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${APP_ID}&app_key=${API_KEY}&results_per_page=4&what=`;
// const newList = new JobList(JOBS_URL);

// // this will go in main.js
// async function getUserJobs() {
//     const jobs = await newList.getJobList('HTML', 'Javascript');
//     console.log(jobs);
// }

// getUserJobs();