const menuBtn = document.querySelector("#more-menu")
const navbar = document.querySelector("#home-page__navbar")
const navBtns = document.querySelectorAll(".menu-text")

const changeIcon = () =>{
    if(navbar.classList.contains("activeMenu")){
        menuBtn.querySelector("img").src = "/public/images/close-menu.png"
    }else{
        menuBtn.querySelector("img").src = "/public/images/menu-burger.png"
    }
}
const showMenu = () =>{
    navbar.classList.toggle("activeMenu")
    changeIcon()
}
const hideMenu = () =>{
    navbar.classList.remove("activeMenu")
    changeIcon()
}



menuBtn.addEventListener("click",showMenu)
navBtns.forEach(btn =>{
    btn.addEventListener("click", hideMenu)
})