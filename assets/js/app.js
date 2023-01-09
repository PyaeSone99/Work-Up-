const navbar = document.querySelector('.navbar');
const navlinks = document.querySelector('.nav-links')
const cross = document.querySelector('.cross')
const navlinksLi = document.querySelectorAll('.nav-links li')
window.addEventListener('scroll',()=>{
    if(this.scrollY >= 100){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})

window.addEventListener('click',()=>{
    navlinks.classList.toggle('active')
    cross.classList.toggle('active')
})

navlinksLi.forEach(li => li.addEventListener('click',()=>{
    navlinksLi.forEach(li => li.classList.remove('active'))
    li.classList.add('active')
}))


// Typed js

var options = {
  strings: ['Pyae Sone Aung', 'Web Developer'],
  typeSpeed: 40,
  loop: true,
  loopCount: Infinity,
  backDelay: 1500,
};

var typed = new Typed('#top-bg-title', options);


AOS.init();