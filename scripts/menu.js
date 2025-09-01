// Function to inject the mobile menu into any page
function injectMobileMenu() {
    const menuHTML = `
    <style>
      @media (max-width: 768px) {
        .main-header {
          position: fixed;
          width: 100vw;
          top: 0;
          left: 0;
          z-index: 10000;
        }
        .main-nav {
          background: #181818;
        }
        .nav-links {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #181818;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding-top: 80px;
          transform: translateY(-100%);
          transition: transform 2s ease-in-out, opacity 2s ease-in-out, visibility 0s 2s;
          opacity: 1;
          visibility: hidden;
        }
        .nav-links.active {
          visibility: visible;
          transform: translateY(0);
          opacity: 1;
          transition: transform 2s ease-in-out, opacity 2s ease-in-out, visibility 0s;
        }
        .nav-links.closing {
          visibility: hidden;
          transform: translateX(100%);
          opacity: 1;
          transition: transform 2s ease-in-out, opacity 2s ease-in-out, visibility 0s 2s;
        }
      }
    </style>
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

  let menuOpen = false;
  navHamburger.addEventListener('click', () => {
    navHamburger.classList.toggle('active');
    if (!menuOpen) {
      navLinks.classList.add('active');
      navLinks.classList.remove('closing');
      menuOpen = true;
    } else {
      navLinks.classList.remove('active');
      navLinks.classList.add('closing');
      setTimeout(() => {
        navLinks.classList.remove('closing');
        menuOpen = false;
      }, 2000); // match transition duration
    }
  });

  // Add click event listeners to dropdown parent links only
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dropdown => {
    const parentLink = dropdown.querySelector('a[href="#"]');
    if (parentLink) {
      parentLink.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) { // Only for mobile view
          const dropdownContent = dropdown.querySelector('.dropdown');
          dropdownContent.style.display = 
            dropdownContent.style.display === 'block' ? 'none' : 'block';
          e.preventDefault(); // Only prevent default for parent link
        }
      });
    }
  });
}

// Call this function when the DOM is loaded
document.addEventListener('DOMContentLoaded', injectMobileMenu);
