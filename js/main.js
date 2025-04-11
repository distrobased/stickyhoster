document.addEventListener("DOMContentLoaded", () => {
  // Scroll to top
  const scrollTop = document.querySelector(".scroll-top");
  window.addEventListener("scroll", () => {
    scrollTop.style.display = window.scrollY > 200 ? "block" : "none";
  });
  scrollTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Custom Cursor
  const cursor = document.querySelector(".custom-cursor");
  document.addEventListener("mousemove", e => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  });

  // Tux spin on load
  const tux = document.querySelector(".tux-mascot");
  tux.style.animation = "spin 5s linear";
  setTimeout(() => {
    tux.style.animation = "float 3s ease-in-out infinite";
  }, 5000);
});

// Spin animation
const style = document.createElement("style");
style.textContent = `
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(1440deg); }
}`;
document.head.appendChild(style);
// Scroll reveal animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-visible");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Typing effect for subtitle
const typedText = document.querySelector(".subtitle-type");
if (typedText) {
  const text = "Open-source. Free. Powerful.";
  let index = 0;
  function type() {
    if (index < text.length) {
      typedText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 90);
    }
  }
  type();
}

// Scroll to top button
const scrollBtn = document.getElementById("scrollToTop");
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
