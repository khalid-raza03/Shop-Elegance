var swiper6 = new Swiper(".mySwiper6", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    loop: true, // Enables looping to avoid empty space
    loopFillGroupWithBlank: false,
    centeredSlides: true, 
  
    breakpoints: {
      1200: {
        slidesPerView: 3.5, // Medium screens (tablets, etc.)
      },
  
      768: {
        slidesPerView: 3, // Medium screens (tablets, etc.)
        spaceBetween: 20,
      },
      428: {
        slidesPerView: 2, // Smaller screens (mobile)
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1, // Smaller screens (mobile)
        spaceBetween: 10,
      },
    },
    autoplay: {
      delay: 1500, // 1.5 seconds
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