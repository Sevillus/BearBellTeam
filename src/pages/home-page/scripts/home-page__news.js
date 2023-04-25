const slides = document.querySelectorAll('.home-page__news-box')
const btns = document.querySelectorAll('.home-page__nav-btn')
const moveBtn = document.querySelectorAll('.home-page__news-btn')
let currentSlide = 0
let touchStartX = null;
let touchEndX = null;

const manualNav = (manual) =>{
    slides.forEach(slide =>{
        slide.classList.remove('active')
    })
    btns.forEach(btn =>{
        btn.classList.remove('active')
    })

    slides[manual].classList.add('active')
    btns[manual].classList.add('active')
}
btns.forEach((btn, i) =>{
    btn.addEventListener("click", () =>{
        manualNav(i);
        currentSlide = i;
    })
})

moveBtn[0].addEventListener("click", () => {
    if (currentSlide === 0) {
        manualNav(slides.length - 1);
        currentSlide = slides.length -1;
    } else {
        currentSlide--;
        manualNav(currentSlide);
    }
});

moveBtn[1].addEventListener("click", () => {
    if (currentSlide === slides.length - 1 ) {
        manualNav(0);
        currentSlide = 0;
    } else {
        currentSlide++;
        manualNav(currentSlide);
    }
});

const handleTouchStart = (event) => {
    touchStartX = event.changedTouches[0].screenX;
}

const handleTouchEnd = (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleGesture();
}

const handleGesture = () => {
    if (touchEndX < touchStartX) {
        moveBtn[1].click();
    }

    if (touchEndX > touchStartX) {
        moveBtn[0].click();
    }
}

const repeat = () =>{
    let active = document.getElementsByClassName('active');
    let i = 1;
    const repeater = () =>{
        setTimeout(()=>{
            [...active].forEach(({classList}) =>{
                classList.remove('active')
            })


            slides[i].classList.add('active')
            btns[i].classList.add('active')
            i++;

            if(slides.length === i){
                i = 0;
            }
            if(i>=slides.length){
                return;
            }
            repeater()
        },10000)
    }
    repeater()
}

// Dodanie obsługi zdarzeń dotyku
slides.forEach(slide => {
    slide.addEventListener('touchstart', handleTouchStart, false);
    slide.addEventListener('touchend', handleTouchEnd, false);
});

repeat()
