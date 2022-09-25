function calcScrollParameters(elem) {
    let rect = elem.getBoundingClientRect();
    let start = rect.top;
    return start * (window.innerWidth / window.innerHeight);
}

window.addEventListener("scroll", function() {
    document.getElementById("scroll-fish").style.left = `${calcScrollParameters(document.getElementById("scroll-fish"))}px`;
    document.getElementById("scroll-jellyfish").style.right = `${calcScrollParameters(document.getElementById("scroll-jellyfish"))}px`;
    document.getElementById("bg-fish").style.left = `${calcScrollParameters(document.getElementById("bg-fish"))}px`;
    document.getElementById("bg-fish2").style.right = `${calcScrollParameters(document.getElementById("bg-fish2"))}px`;
    document.getElementById("bg-fish3").style.right = `${calcScrollParameters(document.getElementById("bg-fish3"))}px`;
    document.getElementById("bg-fish4").style.left = `${calcScrollParameters(document.getElementById("bg-fish4"))}px`;
});