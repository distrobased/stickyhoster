window.addEventListener('DOMContentLoaded', () => {
  const startup = document.getElementById('startup-sound');
  const bgMusic = document.getElementById('bg-music');
  const audioToggle = document.getElementById('audio-toggle');

  // Play startup sound immediately (should be short/soft enough to pass autoplay rules)
  startup.volume = 0.5;
  startup.play().catch(() => {
    console.log('Startup sound autoplay blocked.');
  });

  // Only play background music after user interacts
  const startBackgroundMusic = () => {
    bgMusic.volume = 0.7;
    bgMusic.play().catch(err => {
      console.warn('Background music autoplay blocked:', err);
    });
    document.removeEventListener('click', startBackgroundMusic);
    document.removeEventListener('keydown', startBackgroundMusic);
  };

  // Trigger background music on first interaction
  document.addEventListener('click', startBackgroundMusic);
  document.addEventListener('keydown', startBackgroundMusic);

  // Mute/unmute toggle
  audioToggle.addEventListener('click', () => {
    if (bgMusic.muted) {
      bgMusic.muted = false;
      startup.muted = false;
      audioToggle.textContent = '🔊 Audio On';
    } else {
      bgMusic.muted = true;
      startup.muted = true;
      audioToggle.textContent = '🔇 Audio Off';
    }
  });
});
