'use strict';
const xhr = new XMLHttpRequest();

xhr.open(
  'GET',
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11moonlanding&api-key=u9VCWrhQaKewrkXLjg78jjNiBUndcbew',
  true
);
xhr.send();

xhr.onload = () => {
  let result = JSON.parse(xhr.responseText).response.docs;
  const body = document.querySelector('body');
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    let headLine = document.createElement('h1');
    headLine.innerHTML = result[i].headline.main;
    body.appendChild(headLine);
    let snippet = document.createElement('h3');
    snippet.innerHTML = result[i].snippet;
    body.appendChild(snippet);
    let publicationDate = document.createElement('p');
    publicationDate.innerHTML = result[i].pub_date;
    body.appendChild(publicationDate);
    let link = document.createElement('a');
    link.innerHTML = 'Link';
    body.appendChild(link);
    link.addEventListener('click', () => {
      link.setAttribute('href', result[i].web_url);
    });
  }
};
