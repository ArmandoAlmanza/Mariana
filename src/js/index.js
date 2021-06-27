document.addEventListener("DOMContentLoaded", () => {
    App();
});

const App = () => {
    scrollNav();
    navblock();

    show();
};

const scrollNav = () => {
    const links = document.querySelectorAll(".navbar a");
    links.forEach(function (link) {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const section = document.querySelector(
                e.target.attributes.href.value
            );
            section.scrollIntoView({
                behavior: "smooth",
            });
        });
    });
};

const navblock = () => {
    const navbar = document.querySelector(".header");
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            navbar.classList.remove("block");
        } else {
            navbar.classList.add("block");
        }
    });
    // Elemento a observar
    observer.observe(document.querySelector(".thx"));
};

const show = () =>{
    const spoty = document.getElementById('reproductor');
    const btn = document.getElementById('btn');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if(spoty.classList.contains('d-block')){
            spoty.classList.remove('d-block');
            spoty.classList.add('d-none');
        } else {
            spoty.classList.add('d-block');
            spoty.classList.remove('d-none');
        }
    })
}