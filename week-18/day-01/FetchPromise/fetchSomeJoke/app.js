const generateButton = document.querySelector('#generate');
const clearButton = document.querySelector('#clear');

const url = 'http://api.icndb.com/jokes/random';

function generateJoke(joke) {
  const container = document.querySelector('#container');
  const p = document.createElement('p');
  p.innerHTML = joke;
  container.appendChild(p);
}

function clearJoke() {
  const showedJokes = document.querySelector('#container');
  showedJokes.innerHTML = '';
}

function showJoke() {
  fetch(url)
    .then((response) => response.json())
    .then((result) => generateJoke(result.value.joke))
    .catch((err) => {
      console.log(err);
    });
}

generateButton.addEventListener('click', () => {
  showJoke();
});

clearButton.addEventListener('click', () => {
  clearJoke();
});
