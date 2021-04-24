const posts = document.querySelector('#posts');

window.onload = () => {
  fetch('http://localhost:3000/posts')
    .then((response) => response.json())
    .then((result) => {
      const post = result;
      console.log(result);
      generatePosts(post);
    })
    .catch((err) => {
      console.log(err);
    });
};

function generatePosts(post) {
  for (let i = 0; i < post.length; i++) {
    const arrowDiv = document.createElement('div');
    arrowDiv.className = 'arrowDiv';
    posts.appendChild(arrowDiv);
    const buttonUp = document.createElement('button');
    buttonUp.className = 'button-Up';
    const buttonDown = document.createElement('button');
    buttonDown.className = 'button-Down';
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
    const modifyButton = document.createElement('button');
    modifyButton.className = 'modify-button';
    modifyButton.innerHTML = 'Modify';
    links.appendChild(deleteButton);
    links.appendChild(modifyButton);
  }
}


// delete, modify, upVote, downVote function missing 