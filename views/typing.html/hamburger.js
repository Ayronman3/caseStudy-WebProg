const hamburger = document.querySelector(".hamburger");
      const newNav = document.querySelector(".newNav");

      hamburger.addEventListener("click", function(){
        hamburger.classList.toggle("active");
        newNav.classList.toggle("active");
        

      });
      document.querySelectorAll(".items").forEach(n =>
      n.addEventListener("click", function(){
        hamburger.classList.remove("active");
        newNav.classList.remove("active");
      }));