'use strict';
const url =
  'https://api.giphy.com/v1/gifs/search?api_key=XY54DHDGpcs7dltBzFWkB2YWNk41At2o&q=dog&limit=16&offset=0&rating=g&lang=en';

let httpRequest = new XMLHttpRequest();

httpRequest.open('GET', url, true);
httpRequest.send();
httpRequest.onload = () => {
  let result = JSON.parse(httpRequest.responseText);
  console.log(result);
 
  let body = document.querySelector("body");

  for (let i = 0; i < result.data.length; i++) {
    let picture = document.createElement("img");
    picture.src = result.data[i].images["480w_still"].url;
    body.appendChild(picture);
    picture.addEventListener("click", () => {
      picture.src = result.data[i].images.original.url;
    });
  }
};
