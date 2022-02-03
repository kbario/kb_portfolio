const burger = document.getElementById('burger');
// const navlinks = document.getElementById('navlinks')

burger.addEventListener('click',() => {
    // remove the center div
    burger.children[1].classList.toggle('opacity-0');
    // remove translate and rotate the top div
    burger.children[0].classList.toggle('-rotate-45');
    burger.children[0].classList.toggle('translate-y-2');
    // remove translate and rotate the bottom div
    burger.children[2].classList.toggle('rotate-45');
    burger.children[2].classList.toggle('-translate-y-2');

    // bring navlinks into view of screen
    // navlinks.classList.toggle('translate-x-full')
});