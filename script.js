// script.js
document.querySelectorAll('.project-item').forEach(item => {
  const titleDiv = item.querySelector('.project-title');
  const contentDiv = item.querySelector('.project-content');
  titleDiv.addEventListener('click', () => {
    // Toggle visibility
    if (contentDiv.style.display === 'block') {
      contentDiv.style.display = 'none';
      item.classList.remove('open');
    } else {
      contentDiv.style.display = 'block';
      item.classList.add('open');
    }
  });
});