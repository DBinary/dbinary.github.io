document.addEventListener('DOMContentLoaded', function () {
const modal = document.getElementById('photo-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.modal-close');

document.querySelectorAll('.photo-frame img, .intro-photo').forEach(img => {
    img.addEventListener('click', function () {
    modal.style.display = "block";
    modalImg.src = this.src; // or use dataset for original path
    });
});

closeBtn.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
};
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});