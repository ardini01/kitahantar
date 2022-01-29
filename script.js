let loginForm = document.querySelector('.login-form');

document.querySelector("#login-btn").onclick=() =>{
	loginForm.classList.toggle('active');
}

//cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//open cart
document.querySelector("#cart-icon").onclick =() => {
	cart.classList.add("active");

};
//close cart
document.querySelector("#close-cart").onclick =() => {
	cart.classList.remove("active");
}
