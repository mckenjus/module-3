console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Hey! thanks for submitting that!");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);