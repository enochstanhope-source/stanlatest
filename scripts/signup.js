// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9-SeBMqujxMleatSd23FM5vlLWdOVUPA",
  authDomain: "grandpa-523e1.firebaseapp.com",
  projectId: "grandpa-523e1",
  storageBucket: "grandpa-523e1.firebasestorage.app",
  messagingSenderId: "1049062266843",
  appId: "1:1049062266843:web:6f8b23c5a1f20a7836f9fe"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Check auth state
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    console.log('User is signed in:', user.email);
    // Redirect to index.html or dashboard
    window.location.href = 'index.html';
  }
});// Signup logic
document.addEventListener('DOMContentLoaded', function() {
	const signupForm = document.getElementById('signupForm');
	if (signupForm) {
		signupForm.addEventListener('submit', function(e) {
			e.preventDefault();
			const email = document.getElementById('email').value;
			const password = document.getElementById('password').value;
			const confirmPassword = document.getElementById('confirm-password').value;
			if (password !== confirmPassword) {
				alert('Passwords do not match!');
				return;
			}
			auth.createUserWithEmailAndPassword(email, password)
				.then((userCredential) => {
					alert('Signup successful!');
					// Optionally redirect or clear form
				})
				.catch((error) => {
					alert(error.message);
				});
		});
	}
});
