const header = document.querySelector("#home-page__header")
const iconsTop = document.querySelector("#home-page__socialsTop")
const iconsMid = document.querySelector("#home-page__socialsMid")
const navbar = document.querySelector("#home-page__navbar")
const logo = document.querySelector("#logo")

window.addEventListener('scroll', function() {

     const scrollPosition = window.scrollY;

    const iconPosition = iconsTop.offsetTop;
    if (scrollPosition > iconPosition && !iconsTop.classList.contains("show")) {
        iconsTop.classList.add("show");
        navbar.classList.add("show");
        iconsMid.classList.add("show");
        logo.style.opacity = "0";
        header.classList.toggle("bg")
    } else if (scrollPosition <= iconPosition && iconsTop.classList.contains("show")) {
        logo.style.opacity = "1";
        iconsTop.classList.remove("show");
        navbar.classList.remove("show");
        iconsMid.classList.remove("show");
        header.classList.remove("bg")
    }
    });
