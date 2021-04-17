const genreSelector = document.getElementById('genre-selector');
const movieSelector = document.getElementById('movie-selector');
const p = document.getElementsByTagName('p');

genreSelector.addEventListener('change', genreSelect);
movieSelector.addEventListener('change', movieNameSelector);

function genreSelect(e) {
  if (e.target.value === 'Sci-fi') {
    for (let i = 0; i < movieSelector.length; i++) {
      movieSelector[i].setAttribute('style', 'display: none');
      if (movieSelector[i].getAttribute('class') === 'Sci-fi') {
        movieSelector[i].setAttribute('style', 'display: block');
      }
    }
  }
  if (e.target.value === 'Drama') {
    for (let i = 0; i < movieSelector.length; i++) {
      movieSelector[i].setAttribute('style', 'display: none');
      if (movieSelector[i].getAttribute('class') === 'Drama') {
        movieSelector[i].setAttribute('style', 'display: block');
      }
    }
  }
  if (e.target.value === 'Comedy') {
    for (let i = 0; i < movieSelector.length; i++) {
      movieSelector[i].setAttribute('style', 'display: none');
      if (movieSelector[i].getAttribute('class') === 'Comedy') {
        movieSelector[i].setAttribute('style', 'display: block');
      }
    }
  }
}
function movieNameSelector(e) {
  p[0].innerText = `The Selected Movie is: ${e.target.value}`;
}
