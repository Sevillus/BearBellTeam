const showInfo = document.querySelectorAll('.show-info')
const oferta = document.querySelectorAll(".oferta-info")
const img = document.querySelectorAll(".show-info")


let lastOpenedIndex = null;

showInfo.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        if (lastOpenedIndex !== null && lastOpenedIndex !== i) {
            oferta[lastOpenedIndex].classList.remove("show");
            img[lastOpenedIndex].classList.remove("active");
        }
        img[i].classList.toggle("active");
        oferta[i].classList.toggle("show");
        lastOpenedIndex = i;
    });
});