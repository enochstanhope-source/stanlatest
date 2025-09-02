// Enrollment functionality
document.addEventListener('DOMContentLoaded', () => {
    // Get all enroll buttons
    const enrollButtons = document.querySelectorAll('.enroll');
    
    enrollButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const card = e.target.closest('.product-card');
            const courseName = card.querySelector('h3').textContent;
            window.location.href = `enroll.html?course=${encodeURIComponent(courseName)}`;
        });
    });
});
