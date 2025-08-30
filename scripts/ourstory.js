// No animation or delay, content loads instantly

// ourstory.js - Animation and page load logic
document.addEventListener('DOMContentLoaded', function() {
	var storyMain = document.querySelector('.story-main');
	if (storyMain) {
		storyMain.classList.add('animated');
	}
});
