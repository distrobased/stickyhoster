document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Loader
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => loader.style.display = "none", 5000);
  }

  // Scroll to top
  const scrollTopBtn = document.getElementById("scrollTop");
  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Distro hover animation
  document.querySelectorAll(".distro-logo").forEach(logo => {
    logo.classList.add("distro-logo");
  });
});

// Inject global styles
const style = document.createElement("style");
style.textContent = `
@keyframes pinFadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes spinFade {
  0% { opacity: 1; transform: rotate(0deg); }
  100% { opacity: 0; transform: rotate(1440deg); }
}
#loader {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: black;
  display: flex; justify-content: center; align-items: center;
  z-index: 9999;
}
.loader-inner img {
  height: 120px;
  animation: spinFade 5s linear forwards;
}
.distro-logo {
  transition: transform 0.4s ease;
}
.distro-logo:hover {
  transform: scale(1.2) rotate(6deg);
}
`;
document.head.appendChild(style);
