fetch('header.html')
  .then(response => response.text())
  .then(text => {
    // Create a div element and set its innerHTML to the navbar code
    const navbar = document.getElementById("nav-container");
    navbar.innerHTML = text;

    // Append the navbar to the page
    document.body.appendChild(navbar);
  });