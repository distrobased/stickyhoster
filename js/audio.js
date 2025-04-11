window.addEventListener('DOMContentLoaded', () => {
  const startup = document.getElementById('startup-sound');
  const bgMusic = document.getElementById('bg-music');

  // Try to autoplay both (some browsers still block)
  const tryPlay = (audio) => {
    audio.volume = 0.75;
    audio.play().catch(err => {
      console.warn(`Autoplay blocked for: ${audio.id}`, err);
    });
  };

  tryPlay(startup);
  tryPlay(bgMusic);
});
