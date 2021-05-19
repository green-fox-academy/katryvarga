
let picture = 'https://loremflickr.com/g/1280/800/hungary/'

function changeBackground(img){
    document.body.style.backgroundImage = `url(${img})`;
    setTimeout(() => {
        location.reload();
    }, 5000) 
}

changeBackground(picture)