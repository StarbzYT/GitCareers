// import helper files for js components
import { User } from './users.js';
import { JobList } from './jobs.js';

// grab the form to listen to
const form = document.querySelector('form');
// grab input to get data out of the search box
const input = document.querySelector('input');
// get loading tag and set style to none
const loading = document.querySelector('#loading');
loading.style.display = 'none';
// listen for submit event listener
form.addEventListener('submit', getUsername);

// function to get users profile
async function userProfile(username) {
  // get profile data for username
  const URL = 'https://api.github.com/users/'; // github users api
  const newUser = new User(URL);
  const userProfile = await newUser.getUserProfile(username);
  return userProfile;
}
// function to create user profile card
async function makeProfileCard(profileData) {
  const { avatar, name, username, languages, bio, link } = profileData;
  console.log(languages);
  // get x marks the spot for profile card
  let profile = document.querySelector('#profile');
  // first clear profile from previous search
  profile.innerHTML = '';
  // create html card for profile
  const html = `<div class="row d-flex justify-content-center">
    <div
      class="card bg-dark mb-3"
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
              (languages[0] && languages[1]
              ? languages[0] + ', ' + languages[1]
              : // if one language is defined and the other is not, then ONLY show the first language
                languages[0] || languages[1])
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
// main function
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
    makeProfileCard(userData);
    // hide loading
    loading.style.display = 'none';
  }
}
