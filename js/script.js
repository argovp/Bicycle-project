$('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });


//change background
const backgroundImages = ['home_bg1.jpg', 'home_bg2.jpg', 'home_bg3.jpg'];
appendBackgroundImage();

function appendBackgroundImage(index = 0) {
    const max = backgroundImages.length - 1;
    if (index > max) {
        index = 0;
    }
    const image = document.createElement("img");
    image.src = `images/${backgroundImages[index]}`;
    document.getElementsByClassName("background_home")[0].appendChild(image);
    setTimeout(function () {
        appendBackgroundImage(index + 1);
    }, 7000);
    setTimeout(function () {
        resetBackgroundImage();
    }, 8000);
}
function resetBackgroundImage() {
    document.querySelector(".background_home img:first-child").remove();
}


//slider
const testimonialSlides = document.querySelectorAll('.testimonial-slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(let testimonialSlide of testimonialSlides){
        testimonialSlide.classList.remove('active');
    }
    testimonialSlides[n].classList.add('active');
};

const activeDot = n => {
    for(let dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}


dots.forEach((itemDot,indexDot)=>{
    itemDot.addEventListener('click',()=>{
        index = indexDot;
        activeSlide(index);
        activeDot(index);
    })
})

const nextSlide = () => {
    if(index == testimonialSlides.length - 1){
        index = 0;
        activeSlide(index);
        activeDot(index);
    } else {
        index++;
        activeSlide(index);
        activeDot(index);
    }
};
setInterval(nextSlide, 3000)


// **section email***

const emailError = document.getElementById('email-error'),
      submitError = document.getElementById('submit-error');

function validateEmail(){
    const email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = "email is required";
        return false;
    }
    if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        emailError.innerHTML = "enter correct email";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(validateEmail()){
        submitError.style.display = "block";
        submitError.innerHTML = "You have successfully subscribed to our updates";       
    }
}

