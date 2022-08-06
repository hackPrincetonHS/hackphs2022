let toggles = document.getElementsByClassName("accordion-button");
for (let toggle of toggles) {
    toggle.addEventListener("click", function(e) {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}