const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11moonlanding&api-key=u9VCWrhQaKewrkXLjg78jjNiBUndcbew';

function generateArticle(result) {
  for (let i = 0; i < result.length; i++) {
    const body = document.querySelector('body');
    const headLine = document.createElement('h1');
    headLine.innerHTML = result[i].headline.main;
    body.appendChild(headLine);
    const snippet = document.createElement('h3');
    snippet.innerHTML = result[i].snippet;
    body.appendChild(snippet);
    const publicationDate = document.createElement('p');
    publicationDate.innerHTML = result[i].pub_date;
    body.appendChild(publicationDate);
    const link = document.createElement('a');
    link.innerHTML = 'Link';
    body.appendChild(link);
    link.addEventListener('click', () => {
      link.setAttribute('href', result[i].web_url);
    });
  }
}

function showArticle() {
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      const article = result.response.docs;
      console.log(article);
      generateArticle(article);
    })
    .catch((err) => {
      console.log(err);
    });
}

showArticle();
