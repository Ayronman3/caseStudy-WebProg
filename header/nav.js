// navbar.js
document.addEventListener('DOMContentLoaded', function () {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Define the callback function when the XMLHttpRequest is completed
  xhr.onload = function () {
      if (xhr.status === 200) {
          // Insert the navigation bar into the current page
          const navBarContainer = document.createElement('div');
          navBarContainer.innerHTML = xhr.responseText;
          document.body.prepend(navBarContainer);
      } else {
          console.error('Failed to load the navigation bar:', xhr.statusText);
      }
  };

  // Open and send the XMLHttpRequest to fetch the navigation bar HTML
  xhr.open('GET', 'header.html', true);
  xhr.send();
});
