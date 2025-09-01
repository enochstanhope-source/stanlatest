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
          background: #130f0fff;
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
          opacity: 0;
          transition: transform 2s ease-in-out, opacity 2s ease-in-out, visibility 0s 2s;
        }
        .account-btn {
          background: linear-gradient(to bottom, #06001c, #c6bebeff);
          border: none;
          color: white;
          cursor: pointer;
          padding: 5px 15px;
          border-radius: 5px;
        }
        .account-btn1 {
          background: linear-gradient(to bottom, #06001c, #ff1a1aff);
          border: none;
          color: white;
          cursor: pointer;
          padding: 5px 15px;
          border-radius: 5px;
        }
        .nav-links li > a {
          display: none;
        }
        .nav-links li > button {
          display: block;
        }
        .dropdown {
          position: static;
          margin: 25px 20px;
          background: linear-gradient(135deg, rgba(30,30,45,0.85) 0%, rgba(80,15,35,0.78) 100%);
          backdrop-filter: blur(55px) saturate(220%) brightness(1.15);
          -webkit-backdrop-filter: blur(55px) saturate(220%) brightness(1.15);
          border-radius: 28px;
          box-shadow: 0 20px 50px -5px rgba(20,20,35,0.35), 
                     0 8px 20px -4px rgba(80,15,35,0.22),
                     inset 0 0 0 1px rgba(255,255,255,0.08);
          padding: 32px;
          min-width: 240px;
          color: #f8f8ff;
          font-family: 'SF Pro Display', 'Inter', system-ui, -apple-system, sans-serif;
          font-weight: 450;
          letter-spacing: 0.025em;
          z-index: 10001;
        }
        .dropdown li a {
            color: #fff;
            padding: 12px 16px;
            display: flex;
            align-items: center;
            text-decoration: none;
            border-radius: 22px;
            font-size: 0.88rem;
            letter-spacing: 0.04em;
            font-family: 'Inter', 'SF Pro Display', system-ui, sans-serif;
            font-weight: 500;
            margin-bottom: 12px;
            background: linear-gradient(120deg, #410808 0%, #f8a9a9 100%);
            box-shadow: 0 2px 12px -2px rgba(90, 90, 90, 0.81);
            border: 1px solid rgba(186, 35, 35, 0.66);
            transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
            position: relative;
            overflow: hidden;
          }
          .dropdown li a:hover, .dropdown li a:active {
            background: linear-gradient(120deg, #f8a9a9 0%, #410808 100%);
            color: #fff;
            transform: scale(1.04);
            box-shadow: 0 4px 24px -4px rgba(80,15,35,0.22);
            border: 1px solid rgba(255,255,255,0.18);
        }
        .dropdown li a:active {
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%);
          color: #ffffff;
          transform: translateX(8px) scale(1.03);
          box-shadow: 0 4px 20px -4px rgba(80,15,35,0.18),
                     inset 0 0 0 1px rgba(255,255,255,0.12);
          letter-spacing: 0.04em;
        }
      }
      @media (min-width: 769px) {
        .nav-links li > button {
          display: none;
        }
        .nav-links li > a {
          display: block;
        }
        .dropdown {
          position: absolute;
          top: 100%;
          left: -20px;
          margin-top: 25px;
          background: linear-gradient(135deg, rgba(30,30,45,0.85) 0%, rgba(80,15,35,0.78) 100%);
          backdrop-filter: blur(55px) saturate(220%) brightness(1.15);
          -webkit-backdrop-filter: blur(55px) saturate(220%) brightness(1.15);
          border-radius: 28px;
          box-shadow: 0 20px 50px -5px rgba(20,20,35,0.35), 
                     0 8px 20px -4px rgba(80,15,35,0.22),
                     inset 0 0 0 1px rgba(255,255,255,0.08);
          padding: 32px;
          min-width: 280px;
          color: #f8f8ff;
          font-family: 'SF Pro Display', 'Inter', system-ui, -apple-system, sans-serif;
          font-weight: 450;
          letter-spacing: 0.025em;
          opacity: 0;
          transform: translateY(-40px) scale(0.96);
          transform-origin: top center;
          pointer-events: none;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          clip-path: inset(0px -50px -50px -50px);
        }
        .nav-dropdown:hover > .dropdown {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .dropdown li a {
          color: #f8f8ff;
          padding: 20px 36px;
          display: flex;
          align-items: center;
          text-decoration: none;
          border-radius: 16px;
          font-size: 1.15rem;
          letter-spacing: 0.03em;
          font-family: inherit;
          font-weight: 450;
          margin-bottom: 12px;
          background: rgba(255, 0, 0, 0.03);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }
        .dropdown li a:hover {
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%);
          color: #ffffff;
          transform: translateX(8px) scale(1.03);
          box-shadow: 0 4px 20px -4px rgba(80,15,35,0.18),
                     inset 0 0 0 1px rgba(255,255,255,0.12);
          letter-spacing: 0.04em;
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
          <li>
            <a href="index.html">Home</a>
            <button class="account-btn"><a href="index.html">Home</a></button>
          </li>
          <li class="nav-dropdown">
            <a href="#">About Us</a>
            <button class="account-btn"><a href="#">About Us</a></button>
            <ul class="dropdown">
              <li><a href="ourstory.html">Our Story</a></li>
              <li><a href="ourteam.html">Our Team</a></li>
              <li><a href="press.html">Press</a></li>
            </ul>
          </li>
          <li class="nav-dropdown">
            <a href="#">Programs</a>
            <button class="account-btn"><a href="#">Programs</a></button>
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
            <button class="account-btn"><a href="#">Contact Us</a></button>
            <ul class="dropdown">
              <li><a href="contact.html">Customer Support</a></li>
              <li><a href="contact.html">Store Locations</a></li>
            </ul>
          </li>
          <li class="nav-dropdown">
            <a href="#">Account</a>
            <button class="account-btn1"><a href="#">Account</a></button>
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
