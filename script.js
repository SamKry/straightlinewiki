


//THEME SWITCH BUTTON
// Get the necessary elements
const themeToggle = document.getElementById('theme-toggle');
const themeStyle = document.getElementById('theme-style');
const darkTheme = document.getElementById('dark-theme');
const iframe = document.getElementById('my-iframe');

// Function to toggle the themes
function toggleTheme() {
  if (themeStyle.disabled) {
    // Enable dark theme
    themeStyle.disabled = false;
    darkTheme.disabled = true;
    iframe.contentWindow.document.getElementById('theme-style').disabled = false;
    iframe.contentWindow.document.getElementById('dark-theme').disabled = true;
  } else {
    // Enable light theme
    themeStyle.disabled = true;
    darkTheme.disabled = false;
    iframe.contentWindow.document.getElementById('theme-style').disabled = true;
    iframe.contentWindow.document.getElementById('dark-theme').disabled = false;
  }
}

// Add event listener to the toggle button
themeToggle.addEventListener('click', toggleTheme);
