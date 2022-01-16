const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginClick(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const usernameVar = loginInput.value;
  localStorage.setItem(USERNAME_KEY, usernameVar);
  paintGreeting();
}
function paintGreeting() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hello ${username}! `; //"Hello " + username;
}
//start
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginClick);
} else {
  paintGreeting();
}
