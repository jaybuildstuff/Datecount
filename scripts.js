const messages = [
  "Believe in yourself!",
  "Keep pushing forward!",
  "Every day is a fresh start.",
  "Stay positive and strong.",
  "You’ve got this!"
];

const messageEl = document.getElementById('message');
const countEl = document.getElementById('count');
const nextBtn = document.getElementById('next');

let count = parseInt(localStorage.getItem('messageCount'), 10) || 0;

function updateCountDisplay() {
  countEl.textContent = `Shown: ${count} ${count === 1 ? 'time' : 'times'}`;
}

function showRandomMessage() {
  const idx = Math.floor(Math.random() * messages.length);
  messageEl.textContent = messages[idx];
  count += 1;
  localStorage.setItem('messageCount', count);
  updateCountDisplay();
}

window.addEventListener('load', () => {
  updateCountDisplay();
  showRandomMessage();
});

nextBtn.addEventListener('click', showRandomMessage);
