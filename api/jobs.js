export class JobList {
  // each instance must pass api url
  constructor(url) {
    this.url = url;
  }
  // get users' jobs based on their most-used language
  async getJobList(language) {
    // attach query to base url
    // first request is for most used lang and second is for second most used lang
    const request = `${this.url}${language}%20developer&content-type=application/json`;
    // make requests for each language and return array of results for both languages
    const response = await fetch(request);
    const list = await response.json();
    // filter data for the meta data we need
    return list.results;
  }
}
