const axios = require('axios');
module.exports = class JobList {
  // get users' jobs based on their most-used language
  async getJobList(URL, language) {
    // attach query to base url
    // first request is for most used lang and second is for second most used lang
    const request = `${URL}${language}%20developer&content-type=application/json`;
    // make requests for each language and return array of results for both languages
    const response = await axios.get(request);
    // filter data for the meta data we need
    return response.data.results;
  }
  // render jobs based on top languages for each user
  async getJobs(language, country, internships = false) {
    // map countries in drop down to api selections
    const countries = {
      Canada: 'ca',
      'United States': 'us',
      'Great Britain': 'gb',
      Australia: 'au',
      'New Zealand': 'nz',
      India: 'in',
    };
    let URL;
    // if checkbox is checked, modify url to look for internships
    if (internships) {
      URL = `https://api.adzuna.com/v1/api/jobs/${countries[country]}/search/1?app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}&results_per_page=9&title_only=internship&what=`;
    } else {
      // if checkbox if not checked, then look for fulltime jobs
      URL = `https://api.adzuna.com/v1/api/jobs/${countries[country]}/search/1?app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}&results_per_page=9&what=`;
    }
    const jobs = await this.getJobList(URL, language);
    return jobs;
  }
};
