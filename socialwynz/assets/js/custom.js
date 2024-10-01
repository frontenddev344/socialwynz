// Define the scroll threshold (in pixels)
const scrollThreshold = 100;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
  // Check if window scroll position is greater than the threshold
  if (window.scrollY > scrollThreshold) {
    header.classList.add('scrolled');  // Add class when scrolled past threshold
  } else {
    header.classList.remove('scrolled');  // Remove class when above threshold
  }
});




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