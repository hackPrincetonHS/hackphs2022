function calcScrollParameters(elem, scrolled) {
    /* This kinda works, somehow */
    let rect = elem.getBoundingClientRect();
    let start = rect.top;
    let end = rect.top + window.innerHeight;
    return (end - start) / 100 * scrolled - start;
}

window.addEventListener("scroll", function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-fish").style.transform = `translateX(${100 - calcScrollParameters(document.getElementById("scroll-fish"), scrolled)}%)`;
    document.getElementById("scroll-jellyfish").style.transform = `translateX(${calcScrollParameters(document.getElementById("scroll-jellyfish"), scrolled)}%)`;
});