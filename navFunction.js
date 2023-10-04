const boxShadow = ()=>{
  return(
    document.addEventListener("DOMContentLoaded", function () {
      const boxElement = document.querySelector("nav");
      window.addEventListener("scroll", function () {
          const scrollPosition = window.scrollY;
          // Define the scroll position at which you want to add the box shadow
          const scrollThreshold = 100;
          if (scrollPosition >= scrollThreshold) {
              boxElement.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
          } else {
              // Remove the box shadow if the scroll position is less than the threshold
              boxElement.style.boxShadow = "none";
          }
      });
  })
  )
};
const highLight =()=>{
  const currentPath = window.location.pathname;
  const  navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const newPathName = new URL(link.href).pathnamel;
    if((newPathName === currentPath) || ((currentPath ==="/home.html") && newPathName ==="/")){
      link.classList.add("active");
    }
  })
};
highLight();
boxShadow(); 