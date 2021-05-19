const timeOut = setTimeout(() => {
  alert('Bomb exploaded');
}, 10000);

const button = document.querySelector('button');
button.addEventListener('click', () => {
  alert('Bomb defused');
  clearTimeout(timeOut);
});

const interval = setInterval(updateTime, 1000);
const display = document.querySelector('.display');

function updateTime() {
  let currentNumber = display.textContent;
  currentNumber--;
  display.textContent = currentNumber;
  if (display.textContent === '0') {
    clearInterval(interval);
  }
}
