
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');
const zoomInBtn = document.getElementById('zoom-in-btn');
const zoomOutBtn = document.getElementById('zoom-out-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const header = document.querySelector("header")
const imageIndexDisplay = document.getElementById('image-index');

let currentImageIndex = 0;
let zoomLevel = 1.0;

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImageIndex = index;
        showLightbox();
        header.style.zIndex = 0
    });
});

function showLightbox() {
    lightbox.style.display = 'flex';
    updateLightboxImage();
    updateImageIndex();
}

function updateLightboxImage() {
    lightboxImg.src = galleryImages[currentImageIndex].src;
    lightboxImg.style.transform = `scale(${zoomLevel})`;
}

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    header.style.zIndex = 99

});

zoomInBtn.addEventListener('click', () => {
    zoomLevel += 0.1;
    updateLightboxImage();
});

zoomOutBtn.addEventListener('click', () => {
    if (zoomLevel > 0.2) {
        zoomLevel -= 0.1;
        updateLightboxImage();
    }
});

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
    updateImageIndex()
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
    updateImageIndex()
});

updateLightboxImage();


function updateImageIndex() {
    imageIndexDisplay.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
}

$(document).ready(function () {

    $('.gallery_mobile').slick({
        dots: true,
        slidesToShow: 1,
        arrows: false,

    });

});

const right = document.querySelector(".gallery .right")
const showAll = document.createElement("div");
showAll.classList.add("show-all")
const text = document.createElement("p");
text.classList.add("show-all-text")
showAll.appendChild(text)
text.innerHTML = `<i class="fa-solid fa-image"></i>  Show All`
showAll.style.backgroundColor = "rgba(26,26,26,0.5)"
if (right.children.length > 4) {
    for (let i = 4; i < right.children.length; i++) {
        right.children[i].style.display = "none";
        right.children[3].appendChild(showAll);
    }
}
showAll.addEventListener("click", function () {
    lightbox.style.display = 'flex';
    header.style.zIndex = 0
});