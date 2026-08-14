document.addEventListener("DOMContentLoaded", () => {
  // -- Mobile Menu Logic --
  const burger = document.querySelector(".burger");
  const overlay = document.querySelector(".mobile-overlay");
  const menu = document.querySelector(".mobile-menu");
  const body = document.body;
  const mobileLinks = document.querySelectorAll(".mobile-link, .mobile-bottom");

  const closeMenu = () => {
    burger.setAttribute("aria-expanded", "false");
    body.classList.remove("menu-open");
    
    overlay.hidden = true;
    menu.hidden = true;
    
    overlay.classList.remove("overlay-in");
    menu.classList.remove("menu-in");
    mobileLinks.forEach(el => el.classList.remove("link-in"));
  };

  const openMenu = () => {
    burger.setAttribute("aria-expanded", "true");
    body.classList.add("menu-open");
    
    overlay.hidden = false;
    menu.hidden = false;
    
    // Trigger animation classes
    overlay.classList.add("overlay-in");
    menu.classList.add("menu-in");
    mobileLinks.forEach(el => el.classList.add("link-in"));
  };

  burger.addEventListener("click", () => {
    const isExpanded = burger.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && body.classList.contains("menu-open")) {
      closeMenu();
    }
  });

  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720 && body.classList.contains("menu-open")) {
      closeMenu();
    }
  });

  // -- Stats Counter Logic --
  const statElements = document.querySelectorAll(".stat-val");
  
  // Easing function for count up
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const animateCount = (el, i) => {
    const target = parseFloat(el.getAttribute("data-target"));
    const decimals = parseInt(el.getAttribute("data-decimals"), 10);
    const suffix = el.getAttribute("data-suffix");
    
    const duration = 1500 + i * 80;
    const delay = 480 + i * 90;
    
    // Respect reduced motion setting
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = target.toFixed(decimals) + suffix;
      return;
    }

    setTimeout(() => {
      let startTimestamp = null;
      
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeProgress = easeOutCubic(progress);
        
        const currentVal = easeProgress * target;
        el.textContent = currentVal.toFixed(decimals) + suffix;
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = target.toFixed(decimals) + suffix;
        }
      };
      
      window.requestAnimationFrame(step);
    }, delay);
  };

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25
  };

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Trigger all stats when the container is partially visible
        statElements.forEach((el, i) => animateCount(el, i));
        observer.disconnect(); // only animate once
      }
    });
  }, observerOptions);

  // Observe the parent container of the stats
  const statsContainer = document.querySelector(".stats");
  if (statsContainer) {
    statsObserver.observe(statsContainer);
  }
});