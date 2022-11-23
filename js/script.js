const btn = document.querySelector( ".hero-btn button")
btn.addEventListener("click",() => {
    document.querySelector(".hero-modal").style.display= "block"
})
const btnClose = document.querySelector( ".hero-modal-block-square-close")
btnClose.addEventListener("click",() => {
    document.querySelector(".hero-modal").style.display= "none"
})
 const swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});