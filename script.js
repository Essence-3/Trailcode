//create form
const Form = document.getElementById("Form");
Form.style.display = "Flex";
Form.style.flexDirection = "column";
Form.style.alignItems = "center";
Form.style.justifyContent = "center";
Form.style.backgroundColor = "black";
Form.style.width = "300px";
Form.style.borderRadius = "15px";
Form.style.height = "300px";

//Login text
const Logintext = document.getElementById("loginHere")
Logintext.style.backgroundColor = "transparent";
Logintext.style.color = "gray";
Logintext.style.fontSize = "20px";


//create username input
const usernameInput = document.getElementById("usernameInput");
usernameInput.type = "type";
usernameInput.style.padding = "10px";
usernameInput.style.marginTop = "10px";
usernameInput.style.width = "200px";
usernameInput.style.borderRadius = "10px";
usernameInput.style.borderWidth = "1px";

//create password input
const passwordInput = document.getElementById("passwordInput");
passwordInput.type = "password";
passwordInput.style.padding = "10px";
passwordInput.style.margin = "5px 0";
passwordInput.style.borderRadius = "10px";
passwordInput.style.width = "200px";
passwordInput.style.borderWidth = "1px";

//create login button
const loginButton = document.getElementById("login");
loginButton.textContent = "Login";
loginButton.style.fontSize = "15px";
loginButton.style.padding = "10px";
loginButton.style.width = "220px";
loginButton.style.borderRadius = "10px";
loginButton.style.color = "white";
loginButton.style.backgroundColor = "gray";
loginButton.style.borderWidth = "1px";