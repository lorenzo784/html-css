// Quantity

const userInput = document.querySelector('.input__number');
const minusBtn = document.querySelector('.input__minus');
const plusBtn = document.querySelector('.input__plus');

let userInputNumber = 1;

plusBtn.addEventListener('click', function(e){
    userInputNumber++;
    userInput.value = userInputNumber;
});


minusBtn.addEventListener('click', function(e){
    if (userInputNumber <= 1){
        userInputNumber = 1;
    }else {
        userInputNumber--;
        userInput.value = userInputNumber;
    }
});


// Cart

const addToCartBtn = document.querySelector('.details__btn');
const cartNotification = document.querySelector('.header__cart-icon--notification');

let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', function() {
    lastValue = lastValue + userInputNumber;
    cartNotification.innerText = lastValue;
    userInputNumber = 1;
    userInput.value = userInputNumber;
    priceModal.innerHTML = `Q125.00 * ${lastValue} <span class="cart-modal__total">Q${lastValue*125}.00</span>`;
    ProductModal.classList.remove('hidden');
    checkoutBtn.classList.remove('hidden');
    elemento.classList.remove('show');
});


// Show Modal cart

const cartBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
const priceModal = document.querySelector('.cart-modal__prices');
const productContainer = document.querySelector('.cart-modal__checkout-container');
const elemento = document.querySelector('.cart-empty');
const ProductModal = document.querySelector('.cart-modal__details-container');
const checkoutBtn = document.querySelector('.cart-modal__checkout-btn');

cartBtn.addEventListener('click', function(){
    cartModal.classList.toggle('show');
});


// Delete cart

const deleteProductBtn = document.querySelector('.cart-modal__delete-btn');

deleteProductBtn.addEventListener('click', function(){
    lastValue = 0;
    cartNotification.innerText = lastValue;
    elemento.classList.add('show');
    ProductModal.classList.add('hidden');
    checkoutBtn.classList.add('hidden');
});


// Cambiar images

const imageContainer = document.querySelector('.gallery__image-container');
const previousGalleryBtn = document.querySelector('.gallery__previous');
const nextGalleryBtn = document.querySelector('.gallery__next');

let imgIndex = 1;

previousGalleryBtn.addEventListener('click', () => {
    changePreviuosImage(imageContainer);
});

nextGalleryBtn.addEventListener('click', () => {
    changeNextImage(imageContainer);
});

// thumbnails

let thumbnails = document.querySelectorAll('.gallery__thumbnail');
thumbnails = [...thumbnails]

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (event) => {
        imageContainer.style.backgroundImage = `url('./images/image-product-${event.target.id}.jpg')`;
    }); 
});



// Image modal

const ImageModal = document.querySelector('.modal-gallery__background');
const ImageModalContainer = document.querySelector('.modal-gallery__image-container');
const closeModalBtn = document.querySelector('.modal-gallery__close');


imageContainer.addEventListener('click', () => {
    ImageModal.style.display = 'grid';
});

closeModalBtn.addEventListener('click', () => {
    ImageModal.style.display = 'none';
});

const previousModalBtn = document.querySelector('.modal-gallery__previous');
const nextModalBtn = document.querySelector('.modal-gallery__next');

previousModalBtn.addEventListener('click', () => {
    changePreviuosImage(ImageModalContainer);
});

nextModalBtn.addEventListener('click', () => {
    changeNextImage(ImageModalContainer);
});


// Modal thumbnails

let modalThumbnails = document.querySelectorAll('.modal-gallery__thumbnail');
modalThumbnails = [...modalThumbnails]

modalThumbnails.forEach(modalThumbnail => {
    modalThumbnail.addEventListener('click', (event) => {
        ImageModalContainer.style.backgroundImage = `url('./images/image-product-${event.target.id.slice(-1)}.jpg')`;
    }); 
});



// Menu navbar modal

const menuNavbarBtn = document.querySelector('.header__menu');
const navbarModal = document.querySelector('.modal-navbar__backgorund');
const closeNavbarBtn= document.querySelector('.modal-navbar__close-icon');

menuNavbarBtn.addEventListener('click', () => {
    navbarModal.style.display = 'block';
});

closeNavbarBtn.addEventListener('click', () => {
    navbarModal.style.display = 'none';
});


// Funciones

function changeNextImage(imgContainer){
    if( imgIndex === 4){
        imgIndex = 1;
    }else {
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`;
};

function changePreviuosImage(imgContainer){
    if( imgIndex === 1){
        imgIndex = 4;
    }else {
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`;
};