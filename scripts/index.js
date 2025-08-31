// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
	const hamburgerBtn = document.getElementById('navHamburger');
	const navLinks = document.getElementById('navLinks');
	const dropdownParents = document.querySelectorAll('.nav-dropdown');

	// Mobile menu toggle functionality
	if (hamburgerBtn && navLinks) {
		hamburgerBtn.addEventListener('click', function () {
			if (!this.classList.contains('active')) {
				// Opening the menu
				navLinks.classList.remove('closing');
				navLinks.classList.add('active');
				this.classList.add('active');
				this.setAttribute('aria-label', 'Close menu');
			} else {
				// Closing the menu with animation
				navLinks.classList.add('closing');
				navLinks.classList.remove('active');
				this.classList.remove('active');
				this.setAttribute('aria-label', 'Open menu');
				
				// Remove the closing class after animation completes
				setTimeout(() => {
					if (!navLinks.classList.contains('active')) {
						navLinks.classList.remove('closing');
					}
				}, 2000); // Match this with the CSS transition duration
			}
		});
	}

	// Dropdowns expand/collapse on tap (mobile only)
	dropdownParents.forEach(function (parent) {
		const link = parent.querySelector('a');
		const dropdown = parent.querySelector('.dropdown');
		if (link && dropdown) {
			link.addEventListener('click', function (e) {
				// Only on mobile (width <= 768px)
				if (window.innerWidth <= 768) {
					e.preventDefault();
					// Collapse others
					dropdownParents.forEach(function (other) {
						if (other !== parent) {
							other.classList.remove('dropdown-open');
						}
					});
					parent.classList.toggle('dropdown-open');
				}
			});
		}
	});

	// Optional: Close menu when clicking outside (mobile)
	document.addEventListener('click', function (e) {
		if (window.innerWidth <= 768 && navLinks.classList.contains('open')) {
			if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
				navLinks.classList.remove('open');
				hamburger.classList.remove('open');
				dropdownParents.forEach(function (parent) {
					parent.classList.remove('dropdown-open');
				});
			}
		}
	});
});
