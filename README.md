<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Intelligence Designed To Evolve</title>

  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  
  <!-- OnlineWebFonts: BubbledotICG-FinePos -->
  <link href="https://db.onlinewebfonts.com/c/8cb707a9b8a73f8a7403336b861c3074?family=BubbledotICG-FinePos" rel="stylesheet">
  
  <!-- Font Awesome 6.5.2 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- Background Video Layer -->
  <div class="bg">
    <video class="bg-video" autoplay muted loop playsinline>
      <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4" type="video/mp4" />
    </video>
  </div>

  <!-- Main Viewport Context -->
  <div class="page">
    
    <!-- 1) Header -->
    <header class="header">
      <a href="#" class="logo-btn" aria-label="Home">
        <img src="assets/logo.webp" alt="" width="52" height="52" />
      </a>

      <!-- Desktop Nav -->
      <nav class="desktop-nav">
        <a href="#" class="nav-link active">Home</a>
        <a href="#" class="nav-link">Product</a>
        <a href="#" class="nav-link">Case Studies</a>
        <a href="#" class="nav-link">Contact</a>
      </nav>

      <!-- Desktop Sign In -->
      <a href="#" class="sign-in desktop-only">Sign in</a>

      <!-- Mobile Burger -->
      <button class="burger mobile-only" aria-expanded="false" aria-label="Toggle menu">
        <span class="bar top"></span>
        <span class="bar mid"></span>
        <span class="bar bot"></span>
      </button>
    </header>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-overlay" hidden></div>
    <div class="mobile-menu" hidden>
      <nav class="mobile-nav">
        <a href="#" class="mobile-link active" style="--d: 0.05s">Home</a>
        <a href="#" class="mobile-link" style="--d: 0.1s">Product</a>
        <a href="#" class="mobile-link" style="--d: 0.15s">Case Studies</a>
        <a href="#" class="mobile-link" style="--d: 0.2s">Contact</a>
      </nav>
      <div class="mobile-bottom" style="--d: 0.25s">
        <a href="#" class="sign-in-mobile">Sign in</a>
      </div>
    </div>

    <!-- 2) Hero Center -->
    <main class="hero">
      
      <!-- Trust Row -->
      <div class="trust-row anim" style="--d: 0.05s">
        <div class="avatar a1"><div class="inner"><i class="fa-brands fa-microsoft"></i></div></div>
        <div class="avatar a2"><div class="inner"><i class="fa-brands fa-amazon"></i></div></div>
        <div class="avatar a3"><div class="inner"><i class="fa-brands fa-google"></i></div></div>
        <div class="trust-pill">Trusted by 2000+ Enterprises</div>
      </div>

      <!-- Headline -->
      <h1 class="headline">
        <span class="line" style="--d: 0.12s">Intelligence</span><br>
        <span class="line" style="--d: 0.3s">Designed To Evolve</span>
      </h1>

      <!-- Subhead -->
      <p class="subhead anim" style="--d: 0.28s">
        Build applications that reason, adapt and collaborate using a modular AI platform designed for production.
      </p>

      <!-- CTA -->
      <a href="#" class="cta anim-pulse" style="--d: 0.4s">Get Started</a>
      
    </main>

    <!-- 3) Stats Footer -->
    <footer class="stats">
      
      <div class="stat anim" style="--d: 0.5s">
        <div class="stat-top">
          <span class="stat-icon">&lt;</span>
          <span class="stat-val" data-target="120" data-decimals="0" data-suffix="ms">0</span>
        </div>
        <div class="stat-label">Inference Time</div>
      </div>
      
      <div class="stat anim" style="--d: 0.58s">
        <div class="stat-top">
          <span class="stat-icon">%</span>
          <span class="stat-val" data-target="99.99" data-decimals="2" data-suffix="%">0</span>
        </div>
        <div class="stat-label">Platform Uptime</div>
      </div>
      
      <div class="stat anim" style="--d: 0.66s">
        <div class="stat-top">
          <span class="stat-icon">*</span>
          <span class="stat-val" data-target="24" data-decimals="0" data-suffix="/7">0</span>
        </div>
        <div class="stat-label">Autonomous Runtime</div>
      </div>
      
      <div class="stat anim" style="--d: 0.74s">
        <div class="stat-top">
          <span class="stat-icon">#</span>
          <span class="stat-val" data-target="2.4" data-decimals="1" data-suffix="M">0</span>
        </div>
        <div class="stat-label">Context Windows</div>
      </div>
      
    </footer>
  </div>

  <script src="main.js"></script>
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
</body>
</html>
