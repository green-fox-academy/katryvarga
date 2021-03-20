for (let i = 1; i <= 100; i++) {
  const newDiv = document.createElement('div');
  newDiv.textContent = i;
  if (isPrime(i) === true) {
    setTimeout(() => {
      newDiv.setAttribute('class', 'prime');
    }, i * 1000);
  } else {
    setTimeout(() => {
      newDiv.setAttribute('class', 'not-prime');
    }, i * 1000);
  }
  document.querySelector('section').appendChild(newDiv);
}

function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}
