const btn = document.querySelector("button[type=submit]");
const input = document.querySelector("input[type=email]");
const feedback = document.querySelector(".feedback");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value == '') {
    displayError(feedback, 'Email is required');
    return false;
  }

  if (!isValidEmail(input.value)) {
    displayError(feedback, 'Check your email please');
  } else {
    feedback.textContent = '';
  }
})

function isValidEmail(email) {
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return regex.test(email.toLowerCase());
}

function displayError(feedback, msg) {
  feedback.textContent = msg;
}