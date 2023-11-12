var animatethis = document.querySelectorAll('.animatethis');
// fadeleft
animatethis.forEach(animatethisElement => {
  if(animatethisElement.getBoundingClientRect().top < window.innerHeight){
    animatethisElement.classList.add('animate__fadeInLeft');
  }
});

animatethis.forEach(animatethisElement => {
  window.addEventListener('scroll', function () {
    if(animatethisElement.getBoundingClientRect().top < window.innerHeight){
      animatethisElement.classList.add('animate__fadeInLeft');
    }
  });
});
