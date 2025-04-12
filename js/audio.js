// js/audio.js

window.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.getElementById('bg-music');
  const audioToggle = document.getElementById('audio-toggle');

  if (!bgMusic || !audioToggle) return;

  // Background music only plays after interaction
  const startMusic = () => {
    bgMusic.volume = 0.4;
    bgMusic.play().catch(err => {
      console.warn('Background music autoplay blocked:', err);
    });
    document.removeEventListener('click', startMusic);
    document.removeEventListener('keydown', startMusic);
  };

  document.addEventListener('click', startMusic);
  document.addEventListener('keydown', startMusic);

  // Toggle mute
  audioToggle.addEventListener('click', () => {
    const muted = bgMusic.muted = !bgMusic.muted;
    audioToggle.textContent = muted ? '🔇 Audio Off' : '🔊 Audio On';
  });
});
