let lastExecutionTime = 0;
const throttleTime = 10;
let totalMovement = 0;
const baseSize = 20;
const growthFactor = 0.0001;

// function createHeart(e) {
//   const currentTime = Date.now();
//   if (currentTime - lastExecutionTime < throttleTime) return;
//   lastExecutionTime = currentTime;

//   let container = document.getElementById('container');
//   let heart = document.createElement('span');
//   let x, y;

//   if (e.touches) {
//     x = e.touches[0].clientX;
//     y = e.touches[0].clientY;
//   } else {
//     x = e.clientX;
//     y = e.clientY;
//   }

//   heart.style.left = x + 'px';
//   heart.style.top = y + 'px';

//   let size = Math.random() * 80;
//   heart.style.width = 20 + size + 'px';
//   heart.style.height = 20 + size + 'px';

//   let transformValue = Math.random() * 360;
//   heart.style.transform = 'rotate(' + transformValue + 'deg)';

//   container.appendChild(heart);

//   setTimeout(function() {
//     heart.remove();
//   }, 1000);
// }

let currentSize = 100;
const maxSize = 400;
const growthAmount = 50;
const maxHearts = 10;

function createAnimatedRedHeart() {
  const heartContainer = document.getElementById('heartContainer');
  if (!heartContainer) {
    console.error('heartContainer not found');
    return;
  }

  if (heartContainer.children.length >= maxHearts) {
    heartContainer.removeChild(heartContainer.firstChild);
  }

  const redHeart = document.createElement('div');
  redHeart.className = 'redHeart';

  currentSize = Math.min(currentSize + growthAmount, maxSize);
  
  redHeart.style.width = `${currentSize}px`;
  redHeart.style.height = `${currentSize}px`;

  redHeart.style.setProperty('--heart-size', `${currentSize}px`);
  redHeart.style.setProperty('--heart-before-top', `${-currentSize / 2}px`);
  redHeart.style.setProperty('--heart-after-left', `${currentSize / 2}px`);

  redHeart.style.animation = 'pulseGrow 2s infinite';

  heartContainer.appendChild(redHeart);

  setTimeout(() => {
    redHeart.remove();
  }, 2000);
}

setInterval(createAnimatedRedHeart, 1000);

document.addEventListener('DOMContentLoaded', function() {
  var heartContainer = document.getElementById('heartContainer');
  var heart = document.createElement('div');
  heart.className = 'redHeart';
  heartContainer.appendChild(heart);
  heartContainer.style.position = 'relative';
  heartContainer.style.width = '100%';
  heartContainer.style.height = '100vh';
  heartContainer.style.display = 'flex';
  heartContainer.style.justifyContent = 'center';
  heartContainer.style.alignItems = 'center';
  heartContainer.style.background = 'transparent';
});


// document.addEventListener('mousemove', createHeart);
// document.addEventListener('touchmove', createHeart);
