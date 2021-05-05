const posts = document.querySelector('#posts');
const baseUrl = 'http://localhost:3000';

window.onload = () => {
  generatePosts();
};

function generatePosts() {
  fetch(`${baseUrl}/posts`)
    .then((response) => response.json())
    .then((result) => {
      const post = result;
      console.log(post);
      for (let i = 0; i < post.length; i++) {
        const arrowDiv = document.createElement('div');
        arrowDiv.className = 'arrowDiv';
        posts.appendChild(arrowDiv);
        const buttonUp = document.createElement('button');
        buttonUp.className = 'button-Up';
        upVoting(post[i].id, buttonUp);
        const buttonDown = document.createElement('button');
        buttonDown.className = 'button-Down';
        downVoting(post[i].id, buttonDown);
        const upVote = document.createElement('img');
        upVote.setAttribute('src', './assets/upvote.png');
        const downVote = document.createElement('img');
        downVote.setAttribute('src', './assets/downvote.png');
        const score = document.createElement('div');
        score.className = 'score';
        score.innerText = post[i].score;
        buttonUp.appendChild(upVote);
        buttonDown.appendChild(downVote);
        arrowDiv.appendChild(buttonUp);
        arrowDiv.appendChild(score);
        arrowDiv.appendChild(buttonDown);
        const postDetails = document.createElement('div');
        postDetails.className = 'post-details';
        posts.appendChild(postDetails);
        const postTitle = document.createElement('h2');
        postTitle.className = 'post-title';
        postTitle.innerText = post[i].title;
        const links = document.createElement('div');
        links.className = 'links';
        postDetails.appendChild(links);
        const timeStamp = document.createElement('p');
        timeStamp.className = 'time-stamp';
        timeStamp.innerText = post[i].timestamp;
        postDetails.appendChild(postTitle);
        links.appendChild(timeStamp);
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = 'Delete';
        deleteArticle(post[i].id, deleteButton);
        const modifyButton = document.createElement('button');
        modifyButton.className = 'modify-button';
        modifyButton.innerHTML = 'Modify';
        links.appendChild(deleteButton);
        links.appendChild(modifyButton);
        modifyButton.addEventListener('click', () => {
          location.href = 'modify.html';
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function upVoting(id, buttonUp) {
  buttonUp.addEventListener('click', () => {
    fetch(`${baseUrl}/posts/${id}/upvote`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((articles) => {
        console.log(articles);
        generatePosts();
      });
    location.reload();
  });
}

function downVoting(id, buttonDown) {
  buttonDown.addEventListener('click', () => {
    fetch(`${baseUrl}/posts/${id}/downvote`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((articles) => {
        console.log(articles);
        generatePosts();
      });
    location.reload();
  });
}

function deleteArticle(id, deleteButton) {
  deleteButton.addEventListener('click', () => {
    fetch(`${baseUrl}/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((articles) => {
        console.log(articles);
        generatePosts();
      });
    location.reload();
  });
}
