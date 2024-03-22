const imagePaths = [
  "images/slider-bg.jpg",
  "images/slide-bg-01.jpg",
  "images/slide-bg-02.jpg",
  "images/slide-bg-03.jpg",
];

let currentImageIndex = 0;
const carouselImageElement = document.querySelector(".carousel-img");

carouselImageElement.src = imagePaths[currentImageIndex];

const updateImage = () => {
  currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
  carouselImageElement.src = imagePaths[currentImageIndex];
};

setInterval(updateImage, 4000);

document.getElementById('cart-count').innerText = cartCount;