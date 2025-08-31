document.addEventListener('DOMContentLoaded', function() {
  // Navigation functionality
  const hamburgerBtn = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');
  const dropdownParents = document.querySelectorAll('.nav-dropdown');

  // Mobile menu toggle functionality
  hamburgerBtn.addEventListener('click', function() {
    // Toggle the menu
    navLinks.classList.toggle('active');
    
    // Toggle between hamburger and cancel button
    this.classList.toggle('active');
    
    // Change the spans to form an X when active
    if (this.classList.contains('active')) {
      this.setAttribute('aria-label', 'Close menu');
    } else {
      this.setAttribute('aria-label', 'Open menu');
    }
  });

  // Page-specific animation
  var storyMain = document.querySelector('.story-main');
  if (storyMain) {
    storyMain.classList.add('animated');
  }
});
