// Header component
const headerHTML = `
<header>
      <div class="header-wrapper">
        <!-- mobile menu -->
        <div class="offcanvas offcanvas-start section" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
          <div class="offcanvas-header border-bottom">
            <h5 class="offcanvas-title fw-bold ms-s fs-3 " id="navbarOffcanvasLgLabel">
              Explore
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav d-flex">
              <li class="py-2">
                <a class="nav-link para-txt" aria-current="page" href="../index.html">Home</a>
              </li>

              <li class="py-2">
                <a class="nav-link para-txt" href="../public/contact.html">Contact</a>
              </li>
              <li class="py-2">
                <a class="nav-link active para-txt" href="../public/about-us.html">About</a>
              </li>

              <li class="py-2">
                <a class="nav-link para-txt" href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- top header -->
        <div class="header-top section">
          <div class="container">
            <div class="header-top-wrapper sticky-top animate__animated animate__fadeInDown">
              <!-- navbar toggler -->
              <button class="navbar-toggler d-lg-none d-inline toggle-bar align-self-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" onclick="changeIcon()">
                <img id="menu-icon" src="./assets/images/hamburger.svg" alt="Menu" height="25" width="25" loading="lazy">
                <img id="cancel-icon" src="./assets/images/cancel.svg" alt="Close" height="25" width="25" style="display: none" loading="lazy">
              </button>

              <li id="darkMode" class="dark-mode-box nav-link">
                <button class="border-0 bg-transparent" title="dark-mode">
                  <img class="off" src="./assets/images/darkMode-off.svg" alt="darkMode-off" loading="lazy">
                  <img class="on" src="./assets/images/dark-mode-on.svg" alt="dark-mode-on" loading="lazy">
                </button>
              </li>

              <div class="header-top-center text-white d-none d-sm-block para-txt">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%! <span class="text-underline">ShopNow </span>
              </div>

              <div class="header-top-right">
                <menu>
                  <li class="position-relative d-inline-block dropdown-list ">
                    <a href="#" class="nav-link me-2 text-white my-dropdown-btn para-txt" id="languageDropdown">
                      English <i class="dropdown-icon px-2"></i>
                    </a>
                    <ul class="my-menu p-0 m-0 ">
                      <li class="my-menu-items">
                        <a class="para-txt" href="#" data-language="English">English</a>
                      </li>
                      <li class="my-menu-items">
                        <a class="para-txt" href="#" data-language="Hindi">Hindi</a>
                      </li>
                      <li class="my-menu-items">
                        <a class="para-txt" href="#" data-language="Spanish">Spanish</a>
                      </li>
                      <li class="my-menu-items">
                        <a class="para-txt" href="#" data-language="Deutsch">Deutsch</a>
                      </li>
                      <li class="my-menu-items">
                        <a class="para-txt" href="#" data-language="Arabic">Arabic</a>
                      </li>
                    </ul>
                  </li>
                </menu>
              </div>
            </div>
          </div>
        </div>

        <div class="header-middle sub-section">
          <div class="container">
            <!-- middle header -->
            <div class="header-middle-wrapper py-3">
              <div class="header-middle-left">
                <h2 class="brand-name heading-text fs-2">Shop Elegance</h2>
              </div>
              <div class="header-middle-center">
                <nav class="navbar navbar-expand bg-transparent">
                  <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <ul class="navbar-nav d-none d-lg-flex">
                        <li>
                          <a class="nav-link para-txt" aria-current="page" href="../index.html">Home</a>
                        </li>

                        <li>
                          <a class="nav-link para-txt" target="_blank" href="./public/contact.html">Contact</a>
                        </li>
                        <li>
                          <a class="nav-link active para-txt" href="../public/about-us.html">About</a>
                        </li>

                        <li>
                          <a class="nav-link para-txt" href="#testimonials">Testimonials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>

              <div class="header-middle-right">
                <div class="input-group d-sm-flex d-none">
                  <input name="search here" type="text" class="form-control para-txt" placeholder="What are you looking for ?" aria-label="Search" aria-describedby="search- addon">
                  <button class="btn" type="button" id="search-addon" title="search-button">
                    <img src="./assets/images/search-icon.svg" alt="search-icon" loading="lazy">
                  </button>
                </div>

                <span type="button" class="ps-3 border-0 btn-transparent"><i class="fa-regular fs-4 fa-heart text-light"></i></span>
                <span type="button" class="ps-3 border-0 btn-transparent"><i class="fa-solid fa-cart-shopping fs-4 text-light"></i></span>
                <span type="button" class="ps-3 border-0 btn-transparent"><i class="fa-regular fa-user fs-4 text-light"></i></span>
              </div>
            </div>
          </div>

        
        </div>
        <div class="mobile-search d-flex w-100 justify-content-center section">
          <div class="input-group d-sm-none d-flex">
            <input name="search here" type="text" id="search-content" class="form-control" placeholder="What are you looking for ?" aria-label="Search" aria-describedby="search- addon">
            <button class="btn" type="button" id="search-addon" title="search-button">
              <img src="./assets/images/search-icon.svg" alt="search-icon">
            </button>
          </div>
        </div>
      </div>
    </header>
`;

// Footer component
const footerHTML = `
 <div class="footer-content-wrapper section">
        <div class="container">
          <div class="row gy-4 row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
            <div class="col">
              <div class="footer-content">
                <h3 class="heading-text">Exclusive</h3>
                <h4 class="heading-text">Subscribe</h4>
                <p class="para-txt">Get 10% off your first order</p>
                <form action="">
                  <input id="emailing" class="para-txt" type="email" placeholder="Enter your email">
                  <span class="m-0 mx-sm-2"><img src="./assets/images/send.svg" alt="Send-icon"></span>
                </form>
              </div>
            </div>
            <div class="col">
              <div class="footer-content">
                <h4 class="heading-text">Support</h4>
                <a href="#" class="text-white para-txt">111 Bijoy sarani, West Bengal, DH 1515, India.</a>
                <a href="#" class="text-white para-txt">ShopElegance@gmail.com</a>
                <a href="#" class="text-white para-txt">+91 015-88888-9999</a>
              </div>
            </div>
            <div class="col">
              <div class="footer-content">
                <h4 class="heading-text">Account</h4>
                <a href="#" class="text-white para-txt">My Account</a>
                <a href="#" class="text-white para-txt">Login / Register</a>
                <a href="#" class="text-white para-txt">Cart</a>
                <a href="#" class="text-white para-txt">Wishlist</a>
                <a href="#" class="text-white para-txt">Shop</a>
              </div>
            </div>
            <div class="col">
              <div class="footer-content">
                <h4 class="heading-text">Quick Link</h4>
                <a href="#" class="text-white para-txt">Privacy Policy</a>
                <a href="#" class="text-white para-txt">Terms Of Use</a>
                <a href="#" class="text-white para-txt">FAQ</a>
                <a href="#" class="text-white para-txt">Contact</a>
              </div>
            </div>
            <div class="col">
              <div class="footer-content">
                <h4 class="heading-text">Download App</h4>
                <span class="mb-2 para-txt">Save $3 with App New User Only</span>
                <div class="img-box">
                  <div class="left">
                    <a href="#">
                      <img src="./assets/images/Qr Code.svg" alt="qr-code-icon">
                    </a>

                  </div>
                  <div class="right">
                    <a href="#">
                      <img src="./assets/images/AppStore.svg" alt="AppStore-icon">
                    </a>
                    <a href="#">
                      <img src="./assets/images/google-play.svg" alt="google-play">
                    </a>

                  </div>
                </div>
                <div class="icon-box text-white">
                  <a href="#">
                    <img src="./assets/images/Icon-Facebook.svg" alt="Icon-Facebook">
                  </a>

                  <a href="#">
                    <img class="ps-2" src="./assets/images/twitter-white.png" alt="twitter-icon">
                  </a>

                  <a href="#">
                    <img class="ps-2" src="./assets/images/instgaram-white.svg" alt="icon-instagram">
                  </a>


                  <a href="#">
                    <img class="ps-2" src="./assets/images/linkedin-white.svg" alt="Icon-Linkedin">
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright-section d-flex justify-content-center pt-4">
            <span class="para-txt"> © Copyright Raza 2025. All right reserved </span>
          </div>
        </div>
      </div>
`;

// Load components
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("header").innerHTML = headerHTML;
  document.getElementById("footer").innerHTML = footerHTML;
});
