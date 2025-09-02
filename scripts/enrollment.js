// Enrollment modal functionality
function createEnrollmentModal() {
    const modal = document.createElement('div');
    modal.className = 'enrollment-modal';
    modal.innerHTML = `
        <div class="enrollment-modal-content">
            <h2>Course Enrollment</h2>
            <div class="enrollment-form">
                <input type="text" id="fullName" placeholder="Enter your full name" required>
                <input type="tel" id="phoneNo" placeholder="Enter your phone number" required>
                <div class="button-group">
                    <button id="sendRequest" class="send-request">Send Request</button>
                    <button id="cancelRequest" class="cancel-request">Cancel</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .enrollment-modal {
            display: none;
            position: fixed;
            top: 3%;
            left: 0;
            width: 100%;
            height: 60%;
            background: linear-gradient(to bottom, #06001c, #410808);
            z-index: 1000;
            justify-content: center;
            align-items: flex-start;
            overflow: hidden;
        }

        .enrollment-modal.active {
            display: flex;
        }

        .enrollment-modal-content {
            background: linear-gradient(to bottom, #06001c, #410808);
            padding: 2rem;
            border-radius: 10px;
            width: 90%;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            margin-top: 0;
            position: relative;
            top: 0;
            
           

        }

        .enrollment-modal-content h2 {
            text-align: center;
            margin-bottom: 1.5rem;
            color: #ffffffff;
            font-size:1.9rem; 
            text-shadow:0 6px 8px rgb(255, 255, 255);
            font-weight: 200;
        
    
        }

        .enrollment-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .enrollment-form input {
            padding: 0.8rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }

        .button-group {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 1rem;
        }

        .send-request, .cancel-request {
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s;
        }

        .send-request {
            background-color: #4CAF50;
            color: white;
        }

        .send-request:hover {
            background-color: #45a049;
        }

        .cancel-request {
            background-color: #f44336;
            color: white;
        }

        .cancel-request:hover {
            background-color: #da190b;
        }
    `;
    document.head.appendChild(style);

    return modal;
}

// Initialize enrollment functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = createEnrollmentModal();
    
    // Add click handlers to all enroll buttons
    document.querySelectorAll('.enroll').forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            const courseName = card.querySelector('h3').textContent;
            modal.setAttribute('data-course', courseName);
            modal.classList.add('active');
        });
    });

    // Handle send request
    document.getElementById('sendRequest').addEventListener('click', () => {
        const fullName = document.getElementById('fullName').value.trim();
        const phoneNo = document.getElementById('phoneNo').value.trim();
        const courseName = modal.getAttribute('data-course');

        if (!fullName || !phoneNo) {
            alert('Please fill in all fields');
            return;
        }

        // Create WhatsApp message
        const message = `Good day sir! I am ${fullName} contacting from the website and I'm interested in ${courseName} needing your reply on it soon thanks`;
        const whatsappUrl = `https://wa.me/2348023464677?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Close modal and reset form
        modal.classList.remove('active');
        document.getElementById('fullName').value = '';
        document.getElementById('phoneNo').value = '';
    });

    // Handle cancel button
    document.getElementById('cancelRequest').addEventListener('click', () => {
        modal.classList.remove('active');
        document.getElementById('fullName').value = '';
        document.getElementById('phoneNo').value = '';
    });
});
