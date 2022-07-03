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
console.log(header)


checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    background.classList.toggle('dark')
    header.classList.toggle('dark')
    title.classList.toggle('darktext')
    description.classList.toggle('darktext')
    
})

