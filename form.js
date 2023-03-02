const form = document.getElementById("registration-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (!name.match(nameRegex)) {
    showError("Please enter a valid name.");
  } else if (!email.match(emailRegex)) {
    showError("Please enter a valid email address.");
  } else if (!password.match(passwordRegex)) {
    showError("Please enter a valid password. Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, and 1 number.");
  } else if (password !== confirmPassword) {
    showError("Passwords do not match.");
  } else {
    showSuccess("Registration successful!");
    form.reset();
  }
});

function showError(errorMessage) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "error";
  errorDiv.appendChild(document.createTextNode(errorMessage));

  const form = document.getElementById("registration-form");
  const submitButton = form.querySelector("button[type=submit]");
  form.insertBefore(errorDiv, submitButton);

  setTimeout(() => {
    errorDiv.remove();
  }, 3000);
}

function showSuccess(successMessage) {
  const successDiv = document.createElement("div");
  successDiv.className = "success";
  successDiv.appendChild(document.createTextNode(successMessage));

  const form = document.getElementById("registration-form");
}
