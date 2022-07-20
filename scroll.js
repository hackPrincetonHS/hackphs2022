window.addEventListener("scroll", function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-fish").style.transform = `translateX(${100 - scrolled * 18 + 850}%)`;
    document.getElementById("scroll-jellyfish").style.transform = `translateX(${scrolled * 18 - 900}%)`;
});