document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Fade-in page after loading screen
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    body.classList.add("page-loaded");
  }, 5000);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Theme toggle (light/dark mode)
  const themeToggle = document.getElementById("themeToggle");
  themeToggle?.addEventListener("click", () => {
    body.classList.toggle("light-mode");
  });

  // Background music toggle
  const music = document.getElementById("backgroundMusic");
  let musicPlaying = false;
  const musicBtn = document.getElementById("musicToggle");
  musicBtn?.addEventListener("click", () => {
    if (musicPlaying) {
      music.pause();
    } else {
      music.play();
    }
    musicPlaying = !musicPlaying;
  });

  // Tux initial animation
  const tux = document.querySelector(".tux");
  if (tux) {
    tux.classList.add("spin-once");
    setTimeout(() => {
      tux.classList.remove("spin-once");
      tux.classList.add("float");
    }, 5000);

    // Tux hover wobble
    tux.addEventListener("mouseenter", () => tux.classList.add("wobble"));
    tux.addEventListener("animationend", () => tux.classList.remove("wobble"));
  }

  // Add animation classes to images on load
  const distroLogos = document.querySelectorAll("img");
  distroLogos.forEach(img => {
    img.setAttribute("loading", "lazy");
    img.classList.add("fade-in");
  });

  // Denmark pin
  const pin = document.createElement("div");
  pin.textContent = "📍 Made with ❤️ in Denmark.";
  pin.style.cssText = `
    position: fixed;
    bottom: 14px;
    left: 14px;
    background: rgba(255, 255, 255, 0.95);
    padding: 10px 16px;
    border-radius: 20px;
    font-weight: bold;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    z-index: 1000;
    animation: pinFadeIn 1.5s ease-out;
  `;
  document.body.appendChild(pin);
});

// Injected styles for animations and effects
const style = document.createElement("style");
style.textContent = `
@keyframes spinOnce {
  from { transform: rotate(0deg); }
  to { transform: rotate(1440deg); }
}
@keyframes pinFadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes wobble {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
  75% { transform: rotate(-3deg); }
  100% { transform: rotate(0deg); }
}
.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
}
.spin-once {
  animation: spinOnce 5s linear forwards;
}
.float {
  animation: float 3s ease-in-out infinite;
}
.wobble {
  animation: wobble 0.6s ease;
}
.page-loaded {
  animation: fadeIn 1.2s ease forwards;
}
`;
document.head.appendChild(style);
