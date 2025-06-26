// Project toggle logic
document.querySelectorAll('.project-item').forEach(item => {
  const titleDiv = item.querySelector('.project-title');
  const contentDiv = item.querySelector('.project-content');
  titleDiv.addEventListener('click', () => {
    if (contentDiv.style.display === 'block') {
      contentDiv.style.display = 'none';
      item.classList.remove('open');
    } else {
      contentDiv.style.display = 'block';
      item.classList.add('open');
    }
  });
});

// Dark mode toggle logic
const toggleBtn = document.getElementById("toggleDarkMode");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
