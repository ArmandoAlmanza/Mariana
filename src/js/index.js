document.addEventListener("DOMContentLoaded", () => {
    App();
});

const App = () => {
    swipperPort();
    scrollUp();

    memoriesScroll();
};

const swipperPort = () => {
    let swiper = new Swiper(".gift__container", {
        cssMode: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
};

const scrollUp = () => {
    function scrollU() {
        const scrollU = document.getElementById("scroll-up");
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if (this.scrollY >= 560) scrollU.classList.add("show-scroll");
        else scrollU.classList.remove("show-scroll");
    }
    window.addEventListener("scroll", scrollU);
};

const memoriesScroll = () => {
    document.querySelectorAll("#recuerdos .list a").forEach((link) => {
        link.addEventListener("click", () => {
            document
                .querySelector("#recuerdos .active")
                .classList.remove("active");
            link.parentElement.classList.add('active');
        });
    });
};
