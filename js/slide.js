var i = 0;
var images = [];
var time = 3000;


//Image list

images[0] = 'img-product/baner.png';
images[1] = 'img-product/baner1.png';
images[2] = 'img-product/baner2.png';

// change Image

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 2) {
        i++;

    } else {
        i = 0;
    }


    setTimeout("changeImg()", time);
}

window.onload = changeImg;