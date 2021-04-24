window.onload = () => {
  const submitButton = document.querySelector('button');
  const form = document.querySelector('form');

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const url = document.getElementById('url').value;
    const requestBody = JSON.stringify({ title: title, url: url });

    // if (title && url) {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:3000/posts');
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.onload = () => {
        // console.log(xhr.responseText);
      };
      xhr.send(requestBody);
      // window.confirm('Your article was successfully added to the list.');
      form.reset();
      // backToMain();
    // } else if (!title || !url) {
    //   window.alert('Incomplete fields');
    // }
  });
};

// function backToMain() {
//   window.location.href = './reddit.html';
// }
