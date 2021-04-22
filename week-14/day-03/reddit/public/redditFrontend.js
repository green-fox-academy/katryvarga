function generatePosts(post) {
  const posts = document.querySelector('#posts');
  const paragraph = document.createElement('p');
  paragraph.innerText = post;
  posts.appendChild(p);
}

function showPostsWithFetch() {
  fetch('http://localhost:3000/posts')
    .then((response) => response.json())
    .then((result) => generatePosts(result)) // ide kell még érték//
    .catch((err) => {
      console.log(err);
    });
}


