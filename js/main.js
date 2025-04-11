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
