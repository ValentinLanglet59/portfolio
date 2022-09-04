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
const skill = document.querySelectorAll('.skill')
const skillTwo = document.querySelector('.skill-two')
const skillThree = document.querySelector('.skill-three')
const skillLogo = document.getElementById('skill-logo')
const logo = document.querySelectorAll('#skill-logo')
const chevron = document.querySelectorAll('.fa-chevron-right')
const projects = document.querySelectorAll('.project')
const chevronCircle = document.querySelectorAll('.fa-circle-chevron-right')
const githubBtn = document.querySelectorAll('.project--link')

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
  githubBtn.forEach(el => {
    el.classList.toggle('bgwhite');
  })
})

checkbox.addEventListener('change',()=>{
  chevronCircle.forEach(el => {
    el.classList.toggle('black');
  })
})


checkbox.addEventListener('change',()=>{
  projects.forEach(el => {
    el.classList.toggle('light');
  })
})

checkbox.addEventListener('change',()=>{
  chevron.forEach(el => {
    el.classList.toggle('black');
  })
})


checkbox.addEventListener('change',()=>{
  logo.forEach(el => {
    el.classList.toggle('black');
  })
})


checkbox.addEventListener('change',()=>{
  skill.forEach(el => {
    el.classList.toggle('light');
  })
})
checkbox.addEventListener('change',()=>{
  skillTwo.classList.toggle('light');
})
checkbox.addEventListener('change',()=>{
  skillThree.classList.toggle('light');
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
  preloader.style.display = 'none'
}, 1000);



ScrollReveal().reveal('.interest--wrapper', { delay: 250 });
ScrollReveal().reveal('.skills--wrapper', { delay: 250 });
ScrollReveal().reveal('.home--logo--switch', { delay: 1050 });
ScrollReveal().reveal('#menu', { delay: 1050 });

 

window.addEventListener('load', fadeOutEffect);
