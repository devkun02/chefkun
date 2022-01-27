let menu = document.querySelector('#menubar');
let nav = document.querySelector('.navbar');
let formbtn = document.querySelector('#formbar');
let form = document.querySelector('#order-form');
let formcbtn = document.querySelector('#crossbtn');



menu.onclick = function res(){
	nav.classList.toggle('show');
}

let ser = document.querySelector('#searchbar');
let sform = document.querySelector('#search-form');
// let cros = document.querySelector('#crossbtn')

ser.onclick = function res2(){
	sform.classList.toggle('show1')
}

// form
formbtn.onclick = function forms(){
	form.classList.toggle('show2');
}
formcbtn.onclick =  function forms(){
	form.classList.toggle('show2');
}

//for button hide and show

window.addEventListener("scroll", hide)

function hide(){
	var a = document.getElementById('top-btn');
	if(window.pageYOffset > 50){
		a.style.display = 'block'
	}else{
		a.style.display = 'none'
	}
}

//top button//

var butt = document.getElementById('top-btn');

butt.addEventListener("click" , btn);

function btn(){
	document.documentElement.scrollTop = 0;
}


var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop:true,

      });


let loadbtn = document.querySelector('.load');
let foodshow = 6;

loadbtn.onclick = function more(){
	let boxes = [...document.querySelectorAll('.box-container .box')];
	for(var i = foodshow; i < foodshow + 6; i++){
		boxes[i].style.display = 'inline-block';
	}
	foodshow +=6;
	if(foodshow >= boxes.length){
		loadbtn.style.display = 'none';
	}
}





// const section = document.querySelectorAll('section');
// const nava = document.querySelectorAll('.naav .navbar a');

// window.addEventListener("scroll", function scrollfun(){
// 	let current = "";
// 	section.forEach((section) => {
// 		const sectionTop = section.offsetTop;
// 		const sectionHeight = section.clientHeight;
// 		if(pageYOffset >= sectionTop - sectionHeight /3){
// 			current = section.getAttribute("id");
// 		}
// 	})
// });

// nava.forEach((b) function scrollfun()){
// 	a.classList.remove('.active');
// 	if(a.classList.contains(current)){
// 		a.classList.add('.active');
// 	}
// });










// window.onscroll = () => {
// 	nav.classList.remove('show');
// }

// document.querySelector('#searchbar').onclick = () =>{
// 	document.querySelector('search-form').classList.toggle('show1');

// }

// document.querySelector('#crossbtn').onclick = () =>{
// 	document.querySelector('#search-form').classList.remove('show1');

// }

