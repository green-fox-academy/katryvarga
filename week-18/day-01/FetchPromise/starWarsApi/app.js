const input = document.querySelector('input');
const button = document.querySelector('button');
const listElement = document.createElement('li');
const moviesList = document.querySelector('.movies');
const characters = document.querySelector('.characters');
const url2 = 'https://swapi.dev/api/films/';

function renderHTML(data) {
  for (let i = 0; i < data.length; i++) {
    listElement.innerHTML = data[i].name;
    characters.appendChild(listElement);
  }
}

function getFilms(filmData) {
  for (let i = 0; i < filmData.length; i++) {
    let li = document.createElement('li');
    li.innerText = `${filmData[i].title}: (${filmData[i].release_date})`;
    moviesList.appendChild(li);
  }
}

function deleteMovies() {
  moviesList.textContent = '';
}

button.addEventListener('click', () => {
  console.log(input);
  fetch(`https://swapi.dev/api/people/?search=${input.value}`)
    .then((response) => response.json())
    .then((result) => {
      const data = result.results;
      console.log(data);
      renderHTML(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

listElement.addEventListener('click', () => {
  fetch(url2)
    .then((response) => response.json())
    .then((result) => {
      const filmData = result.results;
      deleteMovies();
      getFilms(filmData);
    })
    .catch((err) => {
      console.log(err);
    });
});
