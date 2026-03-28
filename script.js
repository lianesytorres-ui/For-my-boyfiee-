const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const music = document.getElementById('music');
const heartsContainer = document.getElementById('hearts-container');

envelope.addEventListener('click', () => {
  envelope.classList.add('open');
  setTimeout(() => {
    letter.style.display = 'block';
    music.play();
    spawnHearts();
  }, 600); // wait for flap animation
});

// Function to create floating hearts
function spawnHearts() {
  for(let i=0; i<30; i++){
    const heart = document.createElement('span');
    heart.innerText = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 5) + 's';
    heart.style.fontSize = (15 + Math.random() * 30) + 'px';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heartsContainer.removeChild(heart);
    }, 8000);
  }
}
