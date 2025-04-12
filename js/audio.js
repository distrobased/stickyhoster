window.addEventListener('DOMContentLoaded', () => {
  const startup = document.getElementById('startup-sound');

  // Unmute and play after a short delay (attempt to bypass autoplay block)
  setTimeout(() => {
    startup.muted = false;
    startup.volume = 0.5;
    startup.play().catch(() => {
      console.log('Startup sound autoplay was blocked. Will try again on interaction.');
    });
  }, 500); // adjust delay if needed
});
