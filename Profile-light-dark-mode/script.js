const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const webButton = document.getElementById('webP');
const mlButton = document.getElementById('mlP');
const deButton = document.getElementById('deP');
const cvButton = document.getElementById('cvP');


// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  imageMode('dark');
}

// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    lightMode();
  }
}

function GoToGithub() {
  window.open('https://github.com/OmarEhab007', '_blank');
}

function GoToLinkedin() {
  window.open('https://www.linkedin.com/in/omar-ehab-a94808144/', '_blank');
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
webButton.addEventListener('click', () => {
  window.open('https://github.com/OmarEhab007/VanillaWebProjects', '_blank');
});
mlButton.addEventListener('click', () => {
  window.open('https://github.com/OmarEhab007?tab=repositories&q=&type=&language=jupyter+notebook&sort=', '_blank');
});
deButton.addEventListener('click', () => {window.open('https://github.com/OmarEhab007?tab=repositories&q=&type=&language=jupyter+notebook&sort=', '_blank');
});
cvButton.addEventListener('click', () => {
  window.open('https://github.com/OmarEhab007?tab=repositories&q=&type=&language=jupyter+notebook&sort=', '_blank');
});


// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}