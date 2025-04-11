// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Optional: highlight active nav link
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Contact form toast/alert
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", () => {
    alert("✅ Your message was sent (or at least... the form worked 😄)");
  });
}

// Optional: Typing effect (e.g., on homepage title)
const typeText = (element, text, speed = 100) => {
  let i = 0;
  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };
  type();
};

const title = document.querySelector(".typewriter");
if (title) {
  title.textContent = ""; // clear if pre-filled
  typeText(title, "Welcome to Sticky's LinuxWall");
}
