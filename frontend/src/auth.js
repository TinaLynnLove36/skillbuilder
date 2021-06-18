

const signupForm = document.getElementById('signup-form').innerHTML;

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  //get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  const confirmPass = signupForm['signup-confirm'].value;
  const name = signupForm['signup-name'].value;
  console.log(email, password, confirmPass, name);
})


