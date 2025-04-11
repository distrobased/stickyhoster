document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll (if needed for anchor links)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // After 5s, float Tux
  const tux = document.querySelector(".tux");
  if (tux) {
    setTimeout(() => {
      tux.style.animation = "float 3s ease-in-out infinite";
    }, 5000);
  }

  // Add floating animation keyframes via JS
  const style = document.createElement("style");
  style.textContent = `
    @keyframes float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  // Pin message
  const pin = document.createElement("div");
  pin.textContent = "📍 Made with ❤️ in Denmark.";
  pin.style.cssText = `
    position: fixed;
    bottom: 14px;
    left: 14px;
    background: rgba(0, 0, 0, 0.75);
    padding: 10px 16px;
    border-radius: 20px;
    font-weight: bold;
    color: white;
    font-family: 'Fira Code', monospace;
    box-shadow: 0 0 10px rgba(255,255,255,0.15);
    z-index: 1000;
    animation: pinFadeIn 1.5s ease-out;
  `;
  document.body.appendChild(pin);
});
