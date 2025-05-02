var swiper6 = new Swiper(".mySwiper6", {
    spaceBetween: 30,
    loop: true, 
    loopFillGroupWithBlank: false,
    speed: 700,
    centeredSlides: true, 
  
    breakpoints: {
      1200: {
        slidesPerView:5, //larger screens (tablets, etc.)
      },
  
      768: {
        slidesPerView: 3, // Medium screens (tablets, etc.)
        spaceBetween: 20,
      },
      576: {
        slidesPerView:2, // Smaller screens (mobile)
        spaceBetween: 10,
      },
      320: {
        spaceBetween: 5,
      },
    },
    autoplay: {
      delay:2500, 
      disableOnInteraction: false, // Keep autoplay active even after user interaction
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
        dynamicBullets: false,
      }
  });



  // menu open and close script
  const menu = document.getElementById("menu-icon");
  const cancel = document.getElementById("cancel-icon");
  const offcanvas = document.getElementById("navbarOffcanvasLg");

  function changeIcon() {
      menu.style.display = "none";
      cancel.style.display = "inline";
  }

  // Listen for when the offcanvas is closed and reset the icons
  offcanvas.addEventListener("hidden.bs.offcanvas", function () {
      menu.style.display = "inline";
      cancel.style.display = "none";
  });


  document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.getElementById('languageDropdown');
    const menuItems = document.querySelectorAll('.my-menu-items a');
    
    // Handle click on dropdown items
    menuItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        const selectedLanguage = this.getAttribute('data-language');
        dropdownBtn.innerHTML = selectedLanguage + ' <i class="dropdown-icon px-2"></i>';
      
      });
    });
  });


//dark mode feature
var darkModeBtn = document.getElementById("darkMode");
var sections = document.querySelectorAll(".section"); 

darkModeBtn.addEventListener("click", () => {
  darkModeBtn.classList.toggle("turn-on");

  sections.forEach((section) => {
    section.classList.toggle("dark");
  });
});





// scroll to top button
document.addEventListener("DOMContentLoaded", function () {
  let mybutton = document.getElementById("scrollToTop");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  };
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}