const body = document.querySelector('body');
const url =
  'https://api.giphy.com/v1/gifs/search?api_key=XY54DHDGpcs7dltBzFWkB2YWNk41At2o&q=dog&limit=16&offset=0&rating=g&lang=en';

function addImage(image) {
  for (let i = 0; i < 10; i++) {
    const picture = document.createElement('img');
    picture.src = image.data[i].images.original.url;
    body.appendChild(picture);
    picture.addEventListener('click', () => {
      picture.src = image.data[i].images.original.url;
    });
  }
}

function showImage() {
  fetch(url)
    .then((response) => response.json())
    .then((image) => addImage(image))
    .catch((err) => {
      console.log(err);
    });
}

showImage();
