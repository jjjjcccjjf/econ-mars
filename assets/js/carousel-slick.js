$('.carousel-slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    responsive: [
    {
        breakpoint: 820,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
        }
    },
]
});