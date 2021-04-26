const title = document.querySelector('#title');
const url = document.querySelector('#url');
const form = document.querySelector('form');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log(title.value);
  console.log(url.value);

  fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title.value,
      url: url.value,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  backToMain();
});

function backToMain() {
  window.location.href = './reddit.html';
}
