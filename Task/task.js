
 

$(document).ready(function(){
  $(window).scroll(function(){
    const position = $(document).scrollTop()
    
    if(position>420){
        var cs = document.querySelectorAll('.c > img')
    for(i=0 ; i<3 ; i++){
    var eachC = cs[i]
    eachC.style.animation = "rot 1s linear forwards"

  }  
    }
    if(position>800){
       document.querySelector('#head > h1').style.animation = "slide 1s ease-in-out forwards"
       document.querySelector('#bt').style.animation ="slide2 1s ease-in-out forwards"
    }
  })
})
var navSlide = () => {
  const burger= document.querySelector('.burger');
  const nav = document.querySelector('.navlinks');
  const navLinks = document.querySelectorAll('.navlinks li');
  // toggle nav
  burger.addEventListener('click',()=>{
     nav.classList.toggle('nav-active');
     // animate links 
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {

      link.style.animation = `navLinkFade 0.6s ease forwards ${index / 12 + 0.1}s`;
    }
  });
  // burger animation
 burger.classList.toggle('toggle');

  
  
  });
}
navSlide();

