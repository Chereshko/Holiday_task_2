// JavaScript Document

'use strict'

const but= document.getElementById('navButton');
const nav= document.getElementById('navigation');
const links = document.getElementsByClassName('nav-link');
let isNavigationOpen = false;
but.onclick = ()=>{
	if(isNavigationOpen){
		nav.classList.remove('open');
		nav.classList.add('closed');
		isNavigationOpen = false;
		but.classList.remove('on');
		but.classList.add('off');
	}
	else{
		nav.classList.remove('closed');
		nav.classList.add('open');
		isNavigationOpen = true;
		but.classList.remove('off');
		but.classList.add('on');
	}
}

for (let i=0; i<links.length; i++){

	links[i].onclick = () =>{
		if(isNavigationOpen){

		nav.classList.remove('open');
		nav.classList.add('closed');
		isNavigationOpen = false;
		but.classList.remove('on');
		but.classList.add('off');
		}
	}
}