const body = document.querySelector('tbody');
const button = document.querySelector('button');
const category = document.getElementById('category');
const publisher = document.getElementById('publisher');
const plt = document.getElementById('plt');
const pgt = document.getElementById('pgt');

button.addEventListener('click', () => {
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
  getAllInfo();
});

function getAllInfo() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', createUrl(), true);
  xhr.onload = () => {
    let data = JSON.parse(xhr.responseText);
    for (let i = 0; i < data.length; i++) {
      let tr = document.createElement('tr');
      let tdBookTitle = document.createElement('td');
      tdBookTitle.innerHTML = data[i].book_name;
      tr.appendChild(tdBookTitle);
      let tdAuthor = document.createElement('td');
      tdAuthor.innerHTML = data[i].aut_name;
      tr.appendChild(tdAuthor);
      let tdCategory = document.createElement('td');
      tdCategory.innerHTML = data[i].cate_descrip;
      tr.appendChild(tdCategory);
      let tdPublisher = document.createElement('td');
      tdPublisher.innerHTML = data[i].pub_name;
      tr.appendChild(tdPublisher);
      let tdPrice = document.createElement('td');
      tdPrice.innerHTML = data[i].book_price;
      tr.appendChild(tdPrice);

      body.appendChild(tr);
    }
  };
  xhr.send(null);
}

function createUrl() {
  let categoryValue = category.value;
  let publisherValue = publisher.value;
  let pltValue = plt.value;
  let pgtValue = pgt.value;
  let isFirstSearch = true;
  let url = 'http://localhost:3000/allinfo';
  if (categoryValue) {
    url = url + `?category=${categoryValue}`;
    isFirstSearch = false;
  }
  if (publisherValue) {
    if (!isFirstSearch) {
      url = url + `&publisher=${publisherValue}`;
    } else {
      url = url + `?publisher=${publisherValue}`;
      isFirstSearch = false;
    }
  }
  if (pltValue) {
    if (!isFirstSearch) {
      url = url + `&plt=${pltValue}`;
    } else {
      url = url + `?plt=${pltValue}`;
      isFirstSearch = false;
    }
  }
  if (pgtValue) {
    if (!isFirstSearch) {
      url = url + `&pgt=${pltValue}`;
    } else {
      url = url + `?pgt=${pltValue}`;
      isFirstSearch = false;
    }
  }
  return url;
}

window.onload = () => {
  getAllInfo();
};
