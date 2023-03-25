// Optional: client-side email validation
document
  .getElementById("subscribe_form")
  .addEventListener("submit", (event) => {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      event.preventDefault();
      emailInput.setCustomValidity("Please enter a valid email address");
    }
  });
