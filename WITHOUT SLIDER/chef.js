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
















// window.onscroll = () => {
// 	nav.classList.remove('show');
// }

// document.querySelector('#searchbar').onclick = () =>{
// 	document.querySelector('search-form').classList.toggle('show1');

// }

// document.querySelector('#crossbtn').onclick = () =>{
// 	document.querySelector('#search-form').classList.remove('show1');

// }

