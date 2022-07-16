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
const header = document.querySelector('.header--wrapper');
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
    header.classList.toggle('dark')
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
