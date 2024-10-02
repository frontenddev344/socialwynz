



// Toggle Menu Functionaliy Start
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".toggle").addEventListener("click", function () {
    document.body.classList.add("menuToggle");
  });

  document.querySelector(".close").addEventListener("click", function () {
    document.body.classList.remove("menuToggle");
  });
});
// Toggle Menu Functionaliy End



function validateEmail() {
  const emailInput = document.getElementById('email');
  
  // Check if the email is valid using the built-in HTML5 email validation
  if (!emailInput.checkValidity()) {
    alert(emailInput.validationMessage);
  } else {
    alert("Thank you for signing up!");
  }
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  
  if (!name.checkValidity()) {
    alert("Please enter a valid name (between 2 and 50 characters).");
  } else if (!email.checkValidity()) {
    alert("Please enter a valid email address.");
  } else if (!subject.checkValidity()) {
    alert("Please enter a valid subject (between 3 and 100 characters).");
  } else if (!message.checkValidity()) {
    alert("Please enter a message between 10 and 500 characters.");
  } else {
    alert("Form submitted successfully!");
    // You can add your form submission logic here (e.g., sending data via AJAX)
  }
});