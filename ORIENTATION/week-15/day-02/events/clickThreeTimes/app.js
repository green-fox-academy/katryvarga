const button = document.querySelector('button');
const text = document.querySelector('p');
let counter = 0;
button.addEventListener('click', () => {
  counter++;
});
setTimeout(function () {
  if (counter > 2) {
    text.innerHTML = `5 seconds elapsed and clicked 3 times`;
  }
}, 5000);
