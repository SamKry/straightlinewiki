
//THIS (KIND OF) WORKS.
//It has some obvious issues, but I AM NOT DELETING IT UNTIL I GET THE REST TO BE FUNCTIONAL.

function showContent(id) {
  var content = document.getElementById("content" + id);
  content.style.opacity = "1";
}
function hideContent(id) {
  var content = document.getElementById("content" + id);
  content.style.opacity = "0";
}




//THEME SWITCH BUTTON

// Get the necessary elements
const themeToggle = document.getElementById('theme-toggle');
const themeStyle = document.getElementById('theme-style');
const darkTheme = document.getElementById('dark-theme');

// Function to toggle the themes
function toggleTheme() {
  if (themeStyle.disabled) {
    // Enable dark theme
    themeStyle.disabled = false;
    darkTheme.disabled = true;
  } else {
    // Enable light theme
    themeStyle.disabled = true;
    darkTheme.disabled = false;
  }
}

// Add event listener to the toggle button
themeToggle.addEventListener('click', toggleTheme);