// navbar js
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.getElementById("mainNavbar");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.forEach(function (item) {
        item.classList.remove("active");
      });

      this.classList.add("active");

      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
});
// navbar js end

//  card-slider-js
document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("industriesSliderTrack");
  const cards = document.querySelectorAll(".industry-slide-card");
  const prevBtn = document.getElementById("industryPrevBtn");
  const nextBtn = document.getElementById("industryNextBtn");
  const dotsWrap = document.getElementById("industrySliderDots");

  if (!track || cards.length === 0) return;

  let currentIndex = 0;
  let autoSlide;

  function getVisibleCards() {
    if (window.innerWidth <= 575) return 1;
    if (window.innerWidth <= 991) return 2;
    return 3;
  }

  function getMaxIndex() {
    return Math.max(cards.length - getVisibleCards(), 0);
  }

  function createDots() {
    dotsWrap.innerHTML = "";

    for (let i = 0; i <= getMaxIndex(); i++) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "industry-slider-dot";
      dot.setAttribute("aria-label", "Go to industry slide " + (i + 1));

      dot.addEventListener("click", function () {
        currentIndex = i;
        updateSlider();
        restartAutoSlide();
      });

      dotsWrap.appendChild(dot);
    }
  }

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth;
    const gap = 22;
    const maxIndex = getMaxIndex();

    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }

    track.style.transform = "translateX(-" + currentIndex * (cardWidth + gap) + "px)";

    cards.forEach(function (card) {
      card.classList.remove("active");
    });

    cards[currentIndex].classList.add("active");

    const dots = dotsWrap.querySelectorAll(".industry-slider-dot");
    dots.forEach(function (dot) {
      dot.classList.remove("active");
    });

    if (dots[currentIndex]) {
      dots[currentIndex].classList.add("active");
    }
  }

  function nextSlide() {
    currentIndex++;

    if (currentIndex > getMaxIndex()) {
      currentIndex = 0;
    }

    updateSlider();
  }

  function prevSlide() {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = getMaxIndex();
    }

    updateSlider();
  }

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 3500);
  }

  function restartAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  nextBtn.addEventListener("click", function () {
    nextSlide();
    restartAutoSlide();
  });

  prevBtn.addEventListener("click", function () {
    prevSlide();
    restartAutoSlide();
  });

  window.addEventListener("resize", function () {
    createDots();
    updateSlider();
  });

  createDots();
  updateSlider();
  startAutoSlide();
});

//  card-slider-js end


const aboutHeroElements = document.querySelectorAll(
  ".about-hero-content, .about-hero-visual, .about-stat-box"
);

if (aboutHeroElements.length) {
  aboutHeroElements.forEach(function (item, index) {
    item.style.transitionDelay = (index * 0.08) + "s";
  });
}


/*
-----------------------------------------
Company Overview Reveal Animation
-----------------------------------------
*/

const companyRevealItems = document.querySelectorAll(
  ".company-overview-premium .reveal-up"
);

if (companyRevealItems.length) {
  companyRevealItems.forEach(function (item, index) {
    item.style.transitionDelay = (index % 6) * 0.08 + "s";
  });

  const companyRevealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  companyRevealItems.forEach(function (item) {
    companyRevealObserver.observe(item);
  });
}