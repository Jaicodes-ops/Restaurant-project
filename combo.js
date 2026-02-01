const slides = document.querySelectorAll('section[class^="container-comb"]');
  let currentIndex = 0;

  // 1. INITIAL SETUP: Show only the first combo
  function init() {
    slides.forEach((slide, index) => {
      if (index === 0) {
        slide.classList.add("active");
        slide.style.display = "flex";
      } else {
        slide.classList.remove("active");
        slide.style.display = "none";
      }
    });
  }
  init();

  // 2. NAVIGATION LOGIC (Instant Switch)
  function goToCombo(nextIndex) {
    slides[currentIndex].classList.remove("active");
    slides[currentIndex].style.display = "none";

    slides[nextIndex].classList.add("active");
    slides[nextIndex].style.display = "flex";

    currentIndex = nextIndex;
  }

  // Attach click events to arrow buttons
  slides.forEach((slide) => {
    const nextBtn = slide.querySelector(".nav-btn.right");
    const prevBtn = slide.querySelector(".nav-btn.left");

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        let index = (currentIndex + 1) % slides.length;
        goToCombo(index);
      });
    }
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        let index = (currentIndex - 1 + slides.length) % slides.length;
        goToCombo(index);
      });
    }
  });

  // 3. PRICE, QUANTITY & RESET LOGIC
  slides.forEach((slide) => {
    const plusBtn = slide.querySelector(".contain-1__crease button:last-child");
    const minusBtn = slide.querySelector(
      ".contain-1__crease button:first-child",
    );
    const qtyText = slide.querySelector(".contain-1__crease h3 strong");
    const priceText = slide.querySelector(".contain-1__totalorder h2 strong");
    const buyBtn = slide.querySelector(".contain-1__totalorderbtn button");

    if (priceText) {
      // Store the original price from HTML
      const basePrice = parseInt(priceText.innerText.replace(/[^\d]/g, ""));
      let qty = 1;
      const updateDisplay = () => {
        qtyText.innerText = qty;
        priceText.innerText = `₹${basePrice * qty}/-`;
      };
      plusBtn.addEventListener("click", () => {
        qty++;
        updateDisplay();
      });
      minusBtn.addEventListener("click", () => {
        if (qty > 1) {
          qty--;
          updateDisplay();
        }
      });
      if (buyBtn) {
        buyBtn.addEventListener("click", () => {
          alert("Order Placed !! Your Meal Is Preparing For You !!!");

          qty = 1;
          updateDisplay();
        });
      }
    }
  });

  // 4. NUTRITION TABLE TOGGLE
  slides.forEach((slide) => {
    const openBtn = slide.querySelector(".nutrition-01__btn button");
    const closeBtn = slide.querySelector(".table-nutrition button");
    const table = slide.querySelector(".table-nutrition");

    if (openBtn && table) {
      openBtn.addEventListener("click", () => (table.style.display = "block"));
    }
    if (closeBtn && table) {
      closeBtn.addEventListener("click", () => (table.style.display = "none"));
    }
  });