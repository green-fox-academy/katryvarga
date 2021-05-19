const input = document.querySelector('input');
const button = document.querySelector('button');
const listElement = document.createElement('li');
const moviesList = document.querySelector('.movies');
const characters = document.querySelector('.characters');

button.addEventListener('click', function () {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://swapi.dev/api/people/?search=${input.value}`);
  xhr.onload = () => {
    let data = JSON.parse(xhr.responseText).results;
    console.log(data);
    renderHTML(data);
  };
  xhr.send();
});

listElement.addEventListener('click', function () {
  const xhr2 = new XMLHttpRequest();
  xhr2.open('GET', 'https://swapi.dev/api/films/', true);
  xhr2.onload = () => {
    const filmData = JSON.parse(xhr2.responseText).results;
    deleteMovies();
    getFilms(filmData);
  };

  xhr2.send();
});

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
