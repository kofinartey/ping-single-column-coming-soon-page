const form = document.querySelector("form");
const email = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  //check email
  if (email.value.trim() === "") {
    const formControl = email.parentElement;
    formControl.classList.add("error");
  } else if (!isEmail(email.value.trim())) {
    console.log("not an email");
    const formControl = email.parentElement;
    formControl.classList.add("error");
  } else {
    console.log("valid email");
    const formControl = email.parentElement;
    formControl.classList.remove("error");
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
