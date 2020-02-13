// JavaScript Document

'use strict'

const illustrations = document.getElementsByClassName('work-box');
const divWithPicture = document.getElementById('illustration');
const img=document.createElement('img');
let isPictureOpen = false;
const back=document.getElementById('back');
const closePictureBut=document.getElementById('closeButton');

for(let i=0; i<illustrations.length;i++){

	illustrations[i].onclick = () =>{
		if(!isPictureOpen){
			let src = illustrations[i].children[0].children[0].getAttribute('src');
			img.setAttribute('src', src)
			divWithPicture.appendChild(img);
			back.classList.add('visible');
			back.classList.remove('invisible');
			isPictureOpen=true;
			divWithPicture.setAttribute('background-color','white');
			}
		}
}

closePictureBut.onclick = () => {
	if(isPictureOpen){
		back.classList.remove('visible');
		back.classList.add('invisible');
		isPictureOpen=false;
	}
}