const form = document.querySelector('form');
const loveCatsButton = document.querySelector('#love-cats');
const signUpButton = document.querySelector('#signup');

loveCatsButton.disabled = true;
signUpButton.disabled = true;

form.addEventListener('click', () => {
  if (dog.checked || cat.checked) {
    signUpButton.disabled = false;
  } else if (fish.checked && no.checked) {
    signUpButton.disabled = false;
  } else if (yes.checked) {
    loveCatsButton.disabled = false;
  }
});

form.addEventListener('click', () => {
  if (yes.checked) {
    loveCatsButton.disabled = false;
  }
  loveCatsButton = true;
});

loveCatsButton.addEventListener('click', () => {
  alert("Thank you, you've successfully signed up for cat facts");
});

signUpButton.addEventListener('click', () => {
  alert('Sigh, we still added you to the cat facts list');
});
