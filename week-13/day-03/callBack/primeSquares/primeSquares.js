for (let i = 2; i < 101; i++) {
  const newDiv = document.createElement('div');
  newDiv.textContent = i;
  if (isPrime(i) === true) {
    setTimeout(() => {
      div.classList.add('prime');
    }, i * 100);
  } else {
    setTimeout(() => {
      div.classList.add('not-prime');
    }, i * 100);
  }
  document.querySelector('section').appendChild(newDiv);
}

function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}
