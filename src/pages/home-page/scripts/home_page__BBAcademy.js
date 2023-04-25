const moreInfo = document.querySelector("#McSqt-moreInfo")
const bbAcademyBtn = document.querySelector('#moreBtn')
const closeBtn = document.querySelectorAll(".close")



bbAcademyBtn.addEventListener("click", ()=>{
    moreInfo.classList.toggle("show")
})

closeBtn.forEach(btn =>{
    btn.addEventListener("click" ,()=>{
        moreInfo.classList.remove("show")
    })
})