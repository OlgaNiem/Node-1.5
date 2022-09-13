   //Script for login page 

  function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);

  }

  //setFormMessage(loginForm, "success", "Du är inloggad!");
function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
   inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
} 

document.addEventListener("DOMContentLoaded", () => {
const loginForm = document.querySelector("#login");
const createAccountForm = document.querySelector("#signup");

document.querySelector("#linkCreateAccount").addEventListener("click", e => {
e.preventDefault();

});
document.querySelector("#login").addEventListener("click", e => {
e.preventDefault();
loginForm.classList.remove("form--hidden");
createAccountForm.classList.add("form--hidden");
 });

 loginForm.addEventListener("submit", e => {
e.preventDefault();

setFormMessage(loginForm, "error", "Ogiltig kombination av användarnamn och lösenord");
 });

 document.querySelectorAll(".form__input").forEach(inputElement => {
inputElement.addEventListener("blur", e => {
if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
    setInputError(inputElement, "Användarnamnet måste vara minst 10 tecken långt");
}
});

inputElement.addEventListener("input", e => {
    clearInputError(inputElement);
});
 });
});


/*async function fetchApi() {
  const res = await fetch('/info') 
  const data = await res.json()
  console.log(data);
  document.body.innerHTML += data.msg
  }
  fetchApi()
  async function fetchPostApi() {
      const info = {
          name: 'Olha',
          email:'test@test.com'
      }
      const res = await fetch('/info', {
          method: 'post', 
          body: JSON.stringify(info), 
          headers: {'Content-type': 'application/json'}
          
  }) 
  
       await res.json()
      }
      fetchPostApi()*/
      