const modifyButton = document.querySelector('button');
const title = document.querySelector('#title');
const url = document.querySelector('#url');

modifyButton.addEventListener('click', () => {
    
  fetch(`http://localhost:3000/posts/${id}`, {
    method: 'PUT',
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
  window.confirm('Your article was succesfully updated. ✔');
  backToMain();
});

function backToMain() {
  window.location.href = './reddit.html';
}
