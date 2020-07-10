
window.addEventListener('keydown', (e) => {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"`)
  if (!sound) return;
  sound.play();
});


