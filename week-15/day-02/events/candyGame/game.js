const createCandysBtn = document.querySelector('.create-candies');
const buyLollipopsBtn = document.querySelector('.buy-lollypops');
const makeCandyRainBtn = document.querySelector('.candy-machine');
const candyCounter = document.querySelector('.candies');
const lollypopCounter = document.querySelector('.lollypops');
const speed = document.querySelector('.speed');
let candies = 0;
let lollypops = 3;
let production = 0;

createCandysBtn.addEventListener('click', () => {
  createCandy(1);
});

buyLollipopsBtn.addEventListener('click', buyLollipop());

makeCandyRainBtn.addEventListener('click', () => {
  if (production !== 0) {
    let multiplied = production * 10;
    for (let i = 0; i < multiplied; i++) {
      generateCandy();
    }
  }
});

function createCandy(number) {
  candies += number;
  candyCounter.innerHTML = candies;
}

function buyLollipop() {
  if (candyCounter >= 10) {
    lollypops++;
    lollypopCounter.innerHTML += '🍭';
    candies -= 10;
    candyCounter.innerHTML = candies;
  }
  if (lollypops >= 10) {
    generateCandy();
    lollipop = 0;
  }
}

function generateCandy() {
  let interval = setInterval(() => {
    if (candyCounter >= 10) {
      stopInterval(interval);
    } else {
      createCandy(1);
    }
  }, 1000);
  production++;
  speed.innerHTML = production;
}

function stopInterval(interval) {
  clearInterval(interval);
}
