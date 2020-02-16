import loadPicture from '../pic'

export default function createPersonPhotoElem({photoPath}){
    const pictureContainer = document.createElement('div');
    pictureContainer.className = "pictureContainer";
    console.log('createPersonPhotoElem started');
    try{
        pictureContainer.appendChild(loadPicture(photoPath));
    }
    catch{
        pictureContainer.appendChild(loadPicture('../assets/img/user.jpg'));
    }
    console.log(pictureContainer);
    return pictureContainer;
}