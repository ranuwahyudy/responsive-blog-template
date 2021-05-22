let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click', function() {
    collapse.forEach(col => col.classList.toggle("collapse-toggle"))
})

//with masonry
new Masonry("#posts .grid", {
    itemSelector : '.grid-item',
    gutter : 20
});

//swiper library initialization
new Swiper('.swiper-container',{
    direction:'horizontal',
    loop: true,
    slidesPerView: 5,
    autoplay: {
        delay: 3000
    }
})