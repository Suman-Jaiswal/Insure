const navSlide = () => {
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

