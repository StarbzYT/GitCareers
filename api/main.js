// import helper files for js components
import { User } from './users.js';
import { JobList } from './jobs.js';

// grab the form to listen to
const form = document.querySelector('form');
// grab input to get data out of the search box
const input = document.querySelector('input');
// listen for submit event listener
form.addEventListener('submit', getUsername);

function getUsername(event) {
  // dont let form refresh page when submitted
  event.preventDefault();
  // the input tag is the one with the value property (username)
  const username = input.value;
  if (username === 'Starbz') {
    input.classList.add('is-invalid');
  } else {
    input.classList.remove('is-invalid');
  }
}
