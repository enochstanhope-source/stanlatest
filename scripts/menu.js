// Function to inject the mobile menu into any page
function injectMobileMenu() {
    const menuHTML = `
    <header class="main-header">
      <nav class="main-nav">
        <div class="nav-logo">
          <a href="index.html"><img src="images/polybay.png" alt="Logo" height="40"></a>
        </div>
        <button class="nav-hamburger" id="navHamburger" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="navLinks">
          <li><a href="index.html">Home</a></li>
          <li class="nav-dropdown">
            <a href="#">About Us</a>
            <ul class="dropdown">
              <li><a href="ourstory.html">Our Story</a></li>
              <li><a href="ourteam.html">Our Team</a></li>
              <li><a href="press.html">Press</a></li>
            </ul>
          </li>
          <li class="nav-dropdown">
            <a href="#">Programs</a>
            <ul class="dropdown">
              <li><a href="testimonial.html">Digital & Tech Skills</a></li>
              <li><a href="testimonial.html">Business Skills</a></li>
              <li><a href="testimonial.html">Vocational Skills</a></li>
              <li><a href="testimonial.html">Soft & Employability Skills</a></li>
              <li><a href="testimonial.html">Creative & Multimedia Skills</a></li>
            </ul>
          </li>
          <li class="nav-dropdown">
            <a href="#">Contact Us</a>
            <ul class="dropdown">
              <li><a href="contact.html">Customer Support</a></li>
              <li><a href="contact.html">Store Locations</a></li>
            </ul>
          </li>
          <li class="nav-dropdown">
            <a href="#">Account</a>
            <ul class="dropdown">
              <li><a href="login.html">Login</a></li>
              <li><a href="signup.html">Sign Up</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
    `;

    // Insert the menu at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', menuHTML);

    // Add event listeners for mobile menu functionality
    const navHamburger = document.getElementById('navHamburger');
    const navLinks = document.getElementById('navLinks');

    navHamburger.addEventListener('click', () => {
        navHamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Add click event listeners to dropdown menus
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) { // Only for mobile view
                const dropdownContent = this.querySelector('.dropdown');
                dropdownContent.style.display = 
                    dropdownContent.style.display === 'block' ? 'none' : 'block';
                e.preventDefault();
            }
        });
    });
}

// Call this function when the DOM is loaded
document.addEventListener('DOMContentLoaded', injectMobileMenu);
