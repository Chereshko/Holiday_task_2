'use strict'

const pictures = ['assets/img/testimonial-1.jpg', 'assets/img/testimonial-2.jpg'];
const h5_content=['Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo quam...', 'Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur....'];
const p_content=['SUSAN SIMS, INTERACTION DESIGNER AT XYZ', 'Angela Adams, marketing manager at Floral LLC']

const slider_img = document.getElementById('slider-picture');
const slider_h5 = document.getElementById('slider-h5');
const slider_p = document.getElementById('slider-p');
let times = 0;

function changeSlide(index){
	slider_img.setAttribute('src', pictures[index]);
	slider_h5.innerHTML= h5_content[index];
	slider_p.innerHTML=p_content[index];
	radios[index].checked=true;
}

const radioNames=['radio1', 'radio2'];
const radios=[];
for (let i=0;i<radioNames.length; i++) {
	radios.push(document.getElementById(radioNames[i]));
}

    for (let i=0;i<radios.length; i++) {
		let rad = document.getElementById(radioNames[i]);
		rad.addEventListener('change', function(){
			changeSlide(i);
		});
		
    }

setInterval(()=>{
	
	changeSlide(times%pictures.length);
	times++;
	
}, 5000);
