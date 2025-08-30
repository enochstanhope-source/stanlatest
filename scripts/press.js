// press.js - Animation and page load logic
document.addEventListener('DOMContentLoaded', function() {
  var pressMain = document.querySelector('.press-main');
  if (pressMain) {
    pressMain.classList.add('animated');
  }

  // Reaction button logic
  document.querySelectorAll('.press-reactions').forEach(function(reactionBar) {
    reactionBar.addEventListener('click', function(e) {
      if (e.target.closest('.reaction-btn')) {
        var btn = e.target.closest('.reaction-btn');
        var countSpan = btn.querySelector('.count');
        var type = btn.getAttribute('data-type');
        // Only allow one like/love per session per card (demo, not persistent)
        if (type === 'like' || type === 'love') {
          if (!btn.classList.contains('active')) {
            btn.classList.add('active');
            countSpan.textContent = parseInt(countSpan.textContent) + 1;
          } else {
            btn.classList.remove('active');
            countSpan.textContent = Math.max(0, parseInt(countSpan.textContent) - 1);
          }
        } else if (type === 'comment') {
          // Simple comment popup (demo only)
          var comment = prompt('Leave a comment:');
          if (comment && comment.trim()) {
            countSpan.textContent = parseInt(countSpan.textContent) + 1;
            alert('Thank you for your comment!');
          }
        }
      }
    });
  });
});
