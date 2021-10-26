//image slider
const previsousEl = document.getElementById('previous')
const nextEl = document.getElementById('next')
const sliderEl = document.getElementById('slider')
let interval = undefined
let timeout = undefined
let selectedImageIndex = 0

previsousEl.addEventListener('click', onPreviousClick)
nextEl.addEventListener('click', onNextClick)

autoScroll()

function onPreviousClick(){
    const sliderWidth = sliderEl.offsetWidth
    sliderEl.scrollLeft -= sliderWidth
    --selectedImageIndex
    handleActiveDot()
    handleSliderClick()
}

function onNextClick(){
    const sliderWidth = sliderEl.offsetWidth
    sliderEl.scrollLeft += sliderWidth
    ++selectedImageIndex
    handleActiveDot()
    handleSliderClick()
}

function handleSliderClick(){
    clearTimeout(timeout)
    clearInterval(interval)
    interval = undefined
    timeout = setTimeout(() =>{
        autoScroll()
    },10000)
}

function handleActiveDot(){
    const list = Array.from(document.getElementsByClassName('dot'))
    
    if(selectedImageIndex < 0) selectedImageIndex = 0
    if(selectedImageIndex >= list.length) selectedImageIndex = list.length - 1
    
    list.forEach(el => el.classList.remove('active'))
    list[selectedImageIndex].classList.add('active')
}


function autoScroll(){
    if (interval) return;

    interval = setInterval(() => {
        const sliderWidth = sliderEl.offsetWidth
        const numberOfImages = sliderEl.childElementCount
        const selectedImage = (sliderEl.scrollLeft / sliderWidth) + 1

        if(numberOfImages === selectedImage){
            sliderEl.scrollLeft = 0
            selectedImageIndex = 0
            handleActiveDot()
            return
        }
         sliderEl.scrollLeft += sliderWidth
         ++selectedImageIndex
         handleActiveDot()
    }, 3000)
}

//searched products slider
let buttonNext = document.getElementById('nextButton')
let buttonPrev = document.getElementById('prevButton')

let selected = 0

buttonNext.addEventListener('click',proximo)
buttonPrev.addEventListener('click',anterior)


function proximo(){
    selected++
    if(selected === 3){
        selected = 2
    } else if(selected === 2){
        buttonNext.style.color = "#8b8b8b"
    }  else{
        buttonNext.style.color = "#333333"
        buttonPrev.style.color = "#333333"
    }
}

function anterior(){
     if(selected <= 2 && selected >1){
       buttonNext.style.color = "#333333"
       selected--
    } 
    else if (selected === 1){
        buttonPrev.style.color = "#8b8b8b"
        buttonNext.style.color = "#333333"
        selected--
    }
}

var swiper = new Swiper('.searched-products', {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 5,
    loop: false,
    speed:600,

    navigation: {
        nextEl: '#nextButton',
        prevEl: '#prevButton',
      },
  });



  
//searched Phones slider
var swiperPhone = new Swiper('.searched-phone-products', {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 5,
    loop: false,
    speed:600,

    navigation: {
        nextEl: '#nextButton-phone',
        prevEl: '#prevButton-phone',
      },
  });

