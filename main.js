const toTop = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100)
    toTop.classList.add("active");
    else {
        toTop.classList.remove("active")
    };
})  


const checkbox = document.getElementById('checkbox')
const background = document.querySelector('#home--background--image')
const title = document.querySelector('.home--title')
const description = document.querySelector('.home--desc')
const interest = document.querySelectorAll(".interest")
const logointerest = document.querySelector(".fa-palette")
const logointerestsecond = document.querySelector(".fa-code")
const logointerestthird = document.querySelector(".fa-soundcloud")
const interestTitles = document.querySelectorAll(".interest--subtitle")

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    background.classList.toggle('darky')
    title.classList.toggle('darktext')
    description.classList.toggle('darktext')
    logointerest.classList.toggle('change')
    logointerestsecond.classList.toggle('change')
    logointerestthird.classList.toggle('change')
})



checkbox.addEventListener('change',()=>{
  interest.forEach(el => {
    el.classList.toggle('light');
  })
  interestTitles.forEach(el => {
    el.classList.toggle('change');
  })
})

// preloader

/*
setTimeout(function() {
  const loader = document.getElementById('preloader')
  window.addEventListener("load", () => {
      loader.style.display = "none"
  })
})
*/

const preloader = document.getElementById('preloader');


const fadeOutEffect = setInterval(() => {
  if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 0.9;
  } else {
    clearInterval(fadeEffect);
  }
  preloader.style.display = 'none'
}, 1000);



ScrollReveal().reveal('.interest--wrapper', { delay: 250 });
ScrollReveal().reveal('.skills--wrapper', { delay: 250 });
ScrollReveal().reveal('.home--logo--switch', { delay: 1050 });
ScrollReveal().reveal('#menu', { delay: 1050 });

 

window.addEventListener('load', fadeOutEffect);
