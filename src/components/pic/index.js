const path= require('path');

const loadPicture = function(url) {
    const myImage = new Image();
    myImage.src = url;
    myImage.className = "img-fluid"
    console.log(myImage);
    return myImage;
};

export default loadPicture;