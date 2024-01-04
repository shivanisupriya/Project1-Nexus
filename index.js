const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
  document.querySelector("title").innerText="sign-up";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
  document.querySelector("title").innerText="login";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});

let loginEmail = document.forms['loginForm']['loginEmail'];
let loginPassword = document.forms['loginForm']['loginPassword'];
let loginError = document.getElementById('loginError');


let signupPassword = document.forms['signUpForm']['signupPassword'];
let signupConfirmPassword = document.forms['signUpForm']['signupConfirmPassword'];
let signupError = document.getElementById('signupError');
let confirmPasswordError = document.getElementById('confirmPasswordError');

// password validation for login page on submit 
function validateLogin() {
  let flag = 1;
  // return error when password field will be empty 
  if(loginPassword.value.length == ''){
    flag = 0;
    loginError.innerHTML = "password can't be blank";
    loginPassword.focus();
  }
  // return error when password field have only spaces 
  else if(loginPassword.value.trim().length == ''){
    flag = 0;
    loginError.innerHTML = "password must not have spaces";
    loginPassword.focus();
  }
  // return error when password field have value less than 6 digit
  else if (loginPassword.value.trim().length < 6) {
    flag = 0;
    loginError.innerHTML = 'password must have 6-12 charecter';
    loginPassword.focus();
  }
    // return error when password field have value greater than 12 digit
  else if (loginPassword.value.trim().length > 12) {
    flag = 0;
    loginError.innerHTML = 'password must have 6-12 charecter';
    loginPassword.focus();
  }

  if (flag) {
    return true;
  }
  else {
    return false;
  }
}

// password validation for login page onblur 
function checkLoginPassword() {
  // return error when password field will be empty onblur
  if(loginPassword.value.length == ''){
    loginError.innerHTML = "password can't be blank";
  }
    // return error when password field have only spaces onblur
  else if(loginPassword.value.trim().length == ''){
    loginError.innerHTML = "password must not have spaces";
  }
  // return error when password field have value less than 6 digit onblur
  else if (loginPassword.value.trim().length < 6) {
    loginError.innerHTML = 'password must have 6-12 charecter';
  }
  // return error when password field have value greater than 12 digit onblur
  else if (loginPassword.value.trim().length > 12) {
    loginError.innerHTML = 'password must have 6-12 charecter';
  }
  else {
    loginError.innerHTML = '';
  }
}


// password validation for signup page on submit  
function validateSignup() {
  let flag = 1;
  // return error when password field will be empty 
  if(signupPassword.value.length == ''){
    flag = 0;
    signupError.innerHTML = "password can't be blank";
    signupPassword.focus();
  }
   // return error when password field have only spaces 
  else if(signupPassword.value.trim().length == ''){
    flag = 0;
    signupError.innerHTML = "password must not have spaces";
    signupPassword.focus();
  }
  // return error when password field have value less than 6 digit 
  else if (signupPassword.value.trim().length < 6) {
    flag = 0;
    signupError.innerHTML = 'password must have 6-12 charecter';
    signupPassword.focus();
  }
  // return error when password field have value greater than 12 digit
  else if (signupPassword.value.trim().length > 12) {
    flag = 0;
    signupError.innerHTML = 'password must have 6-12 charecter';
    signupPassword.focus();
  }
  // retyrn error when password field and confirm password field doesn't match
  else if(signupPassword.value !== signupConfirmPassword.value){
    flag = 0;
    confirmPasswordError.innerHTML = "password doesn't match";
    signupConfirmPassword.focus();
  }

  if (flag) {
    return true;
  }
  else {
    return false;
  }
}


function checkSignupPassword(){
  // return error when password field will be empty onblur
  if(signupPassword.value.length == ''){
    signupError.innerHTML = "password can't be blank";
  }
   // return error when password field have only spaces onblur
  else if(signupPassword.value.trim().length == ''){
    signupError.innerHTML = "password must not have spaces";
  }
  // return error when password field have value less than 6 digit onblur
  else if (signupPassword.value.trim().length < 6) {
    signupError.innerHTML = 'password must have 6-12 charecter';
  }
  // return error when password field have value greater than 12 digit onblur
  else if (signupPassword.value.trim().length > 12) {
    signupError.innerHTML = 'password must have 6-12 charecter';
  }
  else{
    signupError.innerHTML = '';
  }
}



// function to show or hide password 
let loginPass = document.getElementById('showLoginPassword');
let signupPass = document.getElementById('showSignupPassword');

function vieeLoginPassword(){
  loginPassword.type = loginPass.checked ? "text" : "password";
}

function viewSignupPassword(){
  signupPassword.type = signupPass.checked ? "text" : "password";
  signupConfirmPassword.type = signupPass.checked ? "text" : "password";
}