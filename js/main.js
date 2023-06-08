let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

var indicator = document.querySelector('#indicator');

var progressIndicator = function() {
    indicator.style.width = (window.scrollY / (document.body.offsetHeight - window.innerHeight) * 100).toFixed(1) + "%";
};

window.addEventListener("scroll", progressIndicator);


menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
    menu.classList.remove('');
    navbar.classList.remove('nav-toggle');
}

const scrollBtn = document.querySelector('.scrollToTop-btn')
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 500)
  })
  scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

  window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.reveal')

    for(let i = 0; i< reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if(revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active')
      }
    }
  })

 
  window.addEventListener('DOMContentLoaded',  () => {
    
    const loader = document.querySelector('.loader')
    
    setTimeout( () => {
      loader.style.opacity = '0'
      setTimeout( () => {
        loader.style.display = 'none'
      }, 10)
    }, 2000)



  })
  window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 0)
    })
  })

