// import helper files for js components
import { User } from './users.js';
import { JobList } from './jobs.js';
// import api auth data
import { APP_ID, API_KEY } from './apiAuth.js';

// grab the form to listen to
const form = document.querySelector('form');
// grab input to get data out of the search box
const input = document.querySelector('input');
// get loading tag and set style to none
const loading = document.querySelector('#loading');
// get country from drop down
const countryName = document.querySelector('#country');
// grab checkbox for internships
const internships = document.querySelector('#intern');
loading.style.display = 'none';
// listen for submit event listener
form.addEventListener('submit', getUsername);
// global job links string for email
let jobLinks = `<br><img style="max-width: 5%" src="https://blogger.googleusercontent.com/img/a/AVvXsEhlHH43mF0_mZlPDru-SOF680CkR7pz3fenAm9UnyN9tJhNXJGB4C9q6ArTPU8o2ijcA5QZrVmhf-9uBVtv2FljqTJ_5qYKAtkC3ZqMSoetvIFXW_9Xu-a8L-MXadtOK8_7Xx6Cu0_oFEm-Fru43lea2eLsG6LMmQyb36xcNTX13S8bIRObg1JZ1ZJD=s320" alt="GitCareers" /><br><br>`;
// function to get users profile
async function userProfile(username) {
  // get profile data for username
  const URL = 'https://api.github.com/users/'; // github users api
  const newUser = new User(URL);
  const userProfile = await newUser.getUserProfile(username);
  return userProfile;
}
// function to create user profile card and email form
async function makeProfileCard(profileData) {
  const { avatar, name, username, languages, bio, link } = profileData;
  // get x marks the spot for profile card
  let profile = document.querySelector('#profile');
  // first clear profile from previous search
  profile.innerHTML = '';
  // create html card for profile
  const html = `<div class="row mx-3 d-flex justify-content-center">
    <div
      class="card bg-dark m-3"
      style="max-width: 40rem; border-radius: 1em"
    >
      <div class="card-body">
        <div class="my-2 d-flex justify-content-center">
          <img
            class="rounded-circle"
            src="${avatar}"
            alt="Card image cap"
            style="max-width: 7rem"
          />
        </div>
        <h4 class="card-title text-light text-center">${name}</h4>
        <p class="card-text text-light text-center">Top-Languages: ${
          Array.isArray(languages)
            ? // if languages are different add a comma then space ONLY IF both are DEFINED
              languages[0] && languages[1]
              ? languages[0] + ', ' + languages[1]
              : // if one language is defined and the other is not, then ONLY show the first language
                languages[0] || languages[1] // otherwise, show the truthy one
            : // if languages isnt an array (only one language), then just show it raw
              languages
        }</p>
        <p class="card-text text-light text-center">Bio: ${bio}</p>
        <p class="card-text text-light text-center">
          GitHub Profile:
          <a class="text-light" href="https://www.${link}" target="_blank" rel="noopener noreferrer">github.com/${username}</a>
        </p>
      </div>
    </div>
  </div>`;
  // add card to section tag
  profile.innerHTML += html;
}
// render jobs based on top languages for each user
async function getUserJobs(language, country) {
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
  if (internships.checked) {
    URL = `https://api.adzuna.com/v1/api/jobs/${countries[country]}/search/1?app_id=${APP_ID}&app_key=${API_KEY}&results_per_page=9&title_only=internship&what=`;
  } else {
    // if checkbox if not checked, then look for fulltime jobs
    URL = `https://api.adzuna.com/v1/api/jobs/${countries[country]}/search/1?app_id=${APP_ID}&app_key=${API_KEY}&results_per_page=9&what=`;
  }
  const newList = new JobList(URL);
  const jobs = await newList.getJobList(language);
  return jobs;
}
// send email to user when email form is submitted
async function sendEmail(event) {
  event.preventDefault();
  const emailForm = document.querySelector('#email-input');
  emailForm.classList.remove('is-valid');
  const send = emailForm.value;
  console.log(send);
  // fetch email end point
  console.log(jobLinks);
  const response = await fetch('http://localhost:5500/email', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: send,
      message: jobLinks,
    }),
  });
  const success = response.json();
  console.log(success);
  emailForm.classList.add('is-valid');
  return success;
}
// make user jobs cards and email form
async function makeJobsCards(jobsData) {
  let jobs = document.querySelector('#jobs');
  // wipe previous jobs from previous search
  jobs.innerHTML = '';
  jobsData.forEach((job) => {
    // pluck data for each card off objects
    const { title, company, created, location, salary_max, redirect_url } = job;
    // first append to global job list string and add new line
    jobLinks += `${company.display_name}: ${title}<br>${redirect_url}<br><br>`;
    let html = `
        <div class="card m-3 col-sm-3 bg-dark" style="border-radius: 1em">
          <div class="card-body">
            <h4 class="card-title text-light">${title}</h4>
            <h6 class="card-subtitle mb-2 text-muted text-light">${
              company.display_name
            }</h6>
            <p class="card-text text-light">
              Location: ${location.display_name} <br />
              Max-Salary: ${
                salary_max ? '$' + salary_max : 'Undisclosed'
              } <br />
              Posted: ${created}
            </p>
            <a href="${redirect_url}" class="card-link text-light" target="_blank" rel="noopener noreferrer">Apply</a>
          </div>
        </div>
        `;
    // after each card is made per job, add to page
    jobs.innerHTML += html;
  });
  jobLinks += '<br><em>GitGood, GitCareers</em>';
  // create email form to send job posts to user's email
  const email = `
  <h4 class="text-light text-center mt-5">Save job postings for later?</h4>
  <div class="form-group has-success mt-2 mb-5" id="email-form" style="max-width: 50vh">
    <div class="input-group">
      <input
        id = "email-input"
        type="email"
        placeholder="Email"
        class="form-control"
        required
        style="border-radius: 1em 0em 0em 1em"
      />
      <button
        id="email"
        type="submit"
        class="btn btn-success"
        style="border-radius: 0em 1em 1em 0em"
      >
        Send
      </button>
      <div class="valid-feedback" id="success-message">Email sent!</div>
    </div>
  </div>
  `;
  // if the user gets jobs from us, show email form to save jobs, otherwise dont show it
  if (jobsData.length != 0) {
    jobs.innerHTML += email;
    // get email form if jobs are displayed
    const emailButton = document.querySelector('#email');
    // once form is submitted, send email
    emailButton.addEventListener('click', sendEmail);
  }
}
// main function to get username and display porfolio and jobs
async function getUsername(event) {
  // show loading
  loading.style.display = 'block';
  // dont let form refresh page when submitted
  event.preventDefault();
  // the input tag is the one with the value property (username)
  const username = input.value;
  // check if profile was found
  const userData = await userProfile(username);
  if ((await userProfile(username)) === 'Profile not found.') {
    // hide loading
    loading.style.display = 'none';
    input.classList.add('is-invalid');
  } else {
    // if user was found proceed
    input.classList.remove('is-invalid'); // if there was error before, remove error styling
    // check user's languages to get their jobs
    // render profile
    makeProfileCard(userData);
    const languages = userData.languages; // lang array
    const country = countryName.value;
    // if user has just one top lang (lang is NOT array)
    // initialize jobslists to use in function scope
    let language1, language2, jobsList1, jobsList2, jobs;
    if (!Array.isArray(languages)) {
      // call function on one language
      jobs = await getUserJobs(languages, country);
      // render jobs
      makeJobsCards(jobs);
    } else {
      language1 = languages[0];
      language2 = languages[1];
      jobsList1 = await getUserJobs(language1, country);
      jobsList2 = await getUserJobs(language2, country);
      // merge both lists together to call on jobs card function
      const finalJobList = jobsList1.slice(0, 5).concat(jobsList2.slice(0, 4));
      // make cards based on merged array
      makeJobsCards(finalJobList);
    }
    // hide loading
    loading.style.display = 'none';
  }
}
