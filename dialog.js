// shamelessly copied from https://stackoverflow.com/a/57463812/

window.addEventListener('click', function(e) {
    if (e.target.tagName === "DIALOG") {
        const rect = e.target.getBoundingClientRect();
        const clickedInDialog = (
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width
        );

        if (clickedInDialog === false) {
            e.target.close();
        }
    }
});