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

  // Easter egg: Konami code = dark mode toggle & confetti
  const konamiCode = [
    "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
    "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
    "b","a"
  ];
  let input = [];

  document.addEventListener("keydown", (e) => {
    input.push(e.key);
    input.splice(-konamiCode.length - 1, input.length - konamiCode.length);
    if (JSON.stringify(input) === JSON.stringify(konamiCode)) {
      document.body.classList.toggle("light-mode");
      launchConfetti();
    }
  });

  // Scroll progress bar
  const progressBar = document.createElement("div");
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 5px;
    background: #2b7cff;
    width: 0%;
    z-index: 9999;
    transition: width 0.2s ease;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
  });

  // Floating background particles
  for (let i = 0; i < 15; i++) {
    const star = document.createElement("div");
    star.className = "bg-star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (5 + Math.random() * 10) + "s";
    document.body.appendChild(star);
  }
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
.bg-star {
  position: fixed;
  top: -20px;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  opacity: 0.8;
  animation: fall linear infinite;
}
@keyframes fall {
  to {
    transform: translateY(110vh);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);

// Confetti launcher (simplified)
function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetto = document.createElement("div");
    confetto.style.cssText = `
      position: fixed;
      top: ${Math.random() * 100}vh;
      left: ${Math.random() * 100}vw;
      width: 10px;
      height: 10px;
      background: hsl(${Math.random() * 360}, 70%, 60%);
      transform: rotate(${Math.random() * 360}deg);
      animation: confetti-fall 2s ease-out forwards;
      z-index: 10000;
    `;
    document.body.appendChild(confetto);
    setTimeout(() => confetto.remove(), 2000);
  }
}

// Add confetti animation
const confettiStyle = document.createElement("style");
confettiStyle.textContent = `
@keyframes confetti-fall {
  to {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}`;
document.head.appendChild(confettiStyle);
