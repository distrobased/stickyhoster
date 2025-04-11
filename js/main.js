document.addEventListener("DOMContentLoaded", () => {
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

  // Tux animation on load (spin for 5s)
  const tux = document.querySelector(".tux");
  if (tux) {
    tux.style.animation = "spin 5s linear";
    setTimeout(() => {
      tux.style.animation = "float 3s ease-in-out infinite"; // restore floating
    }, 5000);
  }

  // Animate distro logos on hover
  document.querySelectorAll("ul li img").forEach(img => {
    img.classList.add("distro-logo");
  });

  // Made in Denmark pin
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

// Add animations via JS-injected CSS
const style = document.createElement("style");
style.textContent = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(1440deg); }
}
@keyframes pinFadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.distro-logo {
  transition: transform 0.4s ease;
}
.distro-logo:hover {
  transform: scale(1.2) rotate(6deg);
}
`;
document.head.appendChild(style);
