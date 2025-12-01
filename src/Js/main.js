// Initialize Swiper only if it exists and the element is present
if (typeof Swiper !== 'undefined' && document.querySelector('.mySwiper6')) {
  var swiper6 = new Swiper(".mySwiper6", {
    spaceBetween: 30,
    loop: true, 
    loopFillGroupWithBlank: false,
    speed: 700,
    centeredSlides: false, 
  
    breakpoints: {
      1200: {
        slidesPerView:4, //larger screens (tablets, etc.)
      },
  
      768: {
        slidesPerView: 2, // Medium screens (tablets, etc.)
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
      disableOnInteraction: false, 
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
        dynamicBullets: false,
      }
  });
}



  // menu open and close script - wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
      const menu = document.getElementById("menu-icon");
      const cancel = document.getElementById("cancel-icon");
      const offcanvas = document.getElementById("navbarOffcanvasLg");

      window.changeIcon = function() {
          if (menu && cancel) {
            menu.style.display = "none";
            cancel.style.display = "inline";
          }
      }

      // Listen for when the offcanvas is closed and reset the icons
      if (offcanvas) {
        offcanvas.addEventListener("hidden.bs.offcanvas", function () {
            if (menu && cancel) {
              menu.style.display = "inline";
              cancel.style.display = "none";
            }
        });
      }
    }, 100);
  });


  document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.getElementById('languageDropdown');
    const menuItems = document.querySelectorAll('.my-menu-items a');
    
    // Handle click on dropdown items
    if (dropdownBtn && menuItems.length > 0) {
      menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
          e.preventDefault();
          const selectedLanguage = this.getAttribute('data-language');
          dropdownBtn.innerHTML = selectedLanguage + ' <i class="dropdown-icon px-2"></i>';
        
        });
      });
    }
  });


//dark mode feature - wait for components to load
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    var darkModeBtn = document.getElementById("darkMode");
    var sections = document.querySelectorAll(".section"); 

    if (darkModeBtn) {
      // Load saved dark mode preference
      const isDarkMode = localStorage.getItem('darkMode') === 'true';
      if (isDarkMode) {
        darkModeBtn.classList.add("turn-on");
        sections.forEach((section) => {
          section.classList.add("dark");
        });
      }

      darkModeBtn.addEventListener("click", () => {
        darkModeBtn.classList.toggle("turn-on");
        const isNowDark = darkModeBtn.classList.contains("turn-on");
        
        sections.forEach((section) => {
          section.classList.toggle("dark");
        });
        
        // Save preference to localStorage
        localStorage.setItem('darkMode', isNowDark);
      });
    }
  }, 100);
});


// scroll to top button
document.addEventListener("DOMContentLoaded", function () {
  let mybutton = document.getElementById("scrollToTop");

  if (mybutton) {
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
  }
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//cursor effect
document.addEventListener("DOMContentLoaded", function () {
  new kursor({
    type: 1,
    color: "#ffffff",
  });
});

  // animate.css overriding
  document.documentElement.style.setProperty('--animate-duration', '3s');

// Login/Signup toggle function
function toggleLogin() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  
  if (loginForm && signupForm) {
    loginForm.classList.toggle('d-none');
    signupForm.classList.toggle('d-none');
  }
}


// flash sale slider initialization


var swiperCB = new Swiper(".flashSaleSwiper", {
  slidesPerView: 7,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
   
    1200: {
      slidesPerView: 4, // xl screens
      spaceBetween: 30,
    },

    992: {
      slidesPerView: 4, // lg screens
      spaceBetween: 20,
    },
    568: {
      slidesPerView: 3, // Smaller screens
      spaceBetween: 15,
    },

        419: {
      slidesPerView: 2, // Smaller screens
      spaceBetween: 10,
    },
    319: {
      slidesPerView: 1, // Smaller screens
      spaceBetween: 5,
    },
  },
});

