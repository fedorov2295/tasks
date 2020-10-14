//find elements
var buttonShowNextImg = document.getElementById('next');
var buttonShowPreviousImg = document.getElementById('previous');
var slideImage = document.getElementById('slide-img');

//subscribe to events
buttonShowNextImg.addEventListener('click', onShowNextBtnClick);
buttonShowPreviousImg.addEventListener('click', onShowPrevBtnClick);

// create images array
var imagesUrls = [];
imagesUrls.push('https://i.pinimg.com/originals/5a/b8/c0/5ab8c006c9dd0ac02e6c32774a11f34a.jpg');
imagesUrls.push('https://i.pinimg.com/736x/5d/6a/b4/5d6ab41f1163b082b762ccb0cbbd9a5c--kobe-basketball-basketball-players.jpg');
imagesUrls.push('https://i.pinimg.com/736x/7c/7c/4d/7c7c4d5f07847f7aac01624ad5801bb5--celtics-basketball-basketball-art.jpg');
imagesUrls.push('https://i.pinimg.com/736x/9d/ad/4e/9dad4e34ad8b8a6ed350156a4654e4ca.jpg');
imagesUrls.push('http://image.cleveland.com/home/cleve-media/width960/img/plain-dealer/photo/2010/12/-c72ac2fecf8de5bd.jpg');


var currentImageIndex = 0;
slideImage.src = imagesUrls[currentImageIndex];
buttonShowPreviousImg.disabled = true;

//function defenitions
function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];
    buttonShowNextImg.disabled = false;

    //disable previous button if need
    if (currentImageIndex === 0) {
        buttonShowPreviousImg.disabled = true;
    }
}
function onShowNextBtnClick() {
    currentImageIndex++;
    slideImage.src = imagesUrls[currentImageIndex];
    buttonShowPreviousImg.disabled = false;

    //disable next button if need
    if (currentImageIndex === (imagesUrls.length -1)) {
        buttonShowNextImg.disabled = true;
    }
}