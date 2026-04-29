(function () {
  "use strict";

  /*
  -----------------------------------------
  Sticky Header Shadow On Scroll
  -----------------------------------------
  */

  const header = document.querySelector(".main-header");

  function handleHeaderScroll() {
    if (!header) return;

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleHeaderScroll);
  handleHeaderScroll();


  /*
  -----------------------------------------
  Close Mobile Menu After Link Click
  -----------------------------------------
  */

  const navLinks = document.querySelectorAll(".navbar-nav .nav-link, .navbar-nav .dropdown-item");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (!navbarCollapse) return;

      if (navbarCollapse.classList.contains("show")) {
        const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);

        if (collapseInstance) {
          collapseInstance.hide();
        }
      }
    });
  });


  /*
  -----------------------------------------
  Basic Contact Form Validation Demo
  Note: Replace this with backend/API integration.
  -----------------------------------------
  */

  const enquiryForm = document.querySelector(".contact-form-box form");

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();

      alert("Thank you. Your enquiry has been submitted successfully.");

      enquiryForm.reset();
    });
  }


  /*
  -----------------------------------------
  Smooth Scroll For Same Page Anchor Links
  -----------------------------------------
  */

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        event.preventDefault();

        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

})();
