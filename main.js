let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');

}

let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');

}
let user = document.querySelector('.user');

document.querySelector('#user-icon').onclick = () => {
    user.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    
}

window.onscroll = () => {
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');

}

//Navbar Scroll
let header = document.querySelector('header');

window.addEventListener('scroll',() => {
    header.classList.toggle('shadow',window.scrollY > 0);
});

// Swiper
var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    centerdSlides: true,
    breakpoints: {
        0: {
            sliderPerView: 0,
        },
        568: {
            sliderPerView: 2,
        },
        768: {
            sliderPerView: 2,
        },
        1020: {
            sliderPerView: 3,
        },
    },
    
  });

  const productImg = document.getElementById('productImg');
const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const blueColor = document.getElementById('blueColor');
const redColor = document.getElementById('redColor');
const greenColor = document.getElementById('greenColor');
const productBrand = document.getElementById('productBrand');
const limited = document.getElementById('limited');


blueColor.addEventListener('click', () => {
    productImg.src = 'img/nike-blue.png';
    productName.textContent = 'Blue Nike Dunk High By You';
    productPrice.innerHTML = '<strong>$100.00</strong>';
    productBrand.style.backgroundColor = 'blue';
    limited.style.display = 'none';
})

redColor.addEventListener('click', () => {
    productImg.src = 'img/nike-red.png';
    productName.textContent = 'Red Nike Dunk High By You';
    productPrice.innerHTML = '<strong>$150.00</strong>';
    productBrand.style.backgroundColor = 'red';
    limited.style.display = 'block';
})

greenColor.addEventListener('click', () => {
    productImg.src = 'img/nike-green.png';
    productName.textContent = 'Green Nike Dunk High By You';
    productPrice.innerHTML = '<strong>$80.00</strong>';
    productBrand.style.backgroundColor = 'green';
    limited.style.display = 'none';
})