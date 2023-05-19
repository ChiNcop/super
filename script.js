const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // effect: "fade",
    // effect: "cube",
    // grabCursor: true,
    // cubeEffect: {
    //     shadow: true,
    //     slideShadows: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94,
    // },
    // effect: "flip",
    // grabCursor: true,
    // effect: "cards",
    // grabCursor: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: true

    },
    slidesPerView: 3,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    }
});

const image = ['./images/01.jpg', './images/02.jpg', './images/03.jpg', './images/04.jpg', './images/05.jpg']

for (let i = 0; i < image.length; i++) {
    const swiperWrapper = document.querySelector('.swiper-wrapper')
    const swiperSlide = document.createElement('div')
    const img = document.createElement('img')
    img.src = image[i]
    
    swiperSlide.className = 'swiper-slide'

    swiperSlide.append(img)
    swiperWrapper.append(swiperSlide)
    

}