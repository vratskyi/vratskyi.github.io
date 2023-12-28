function animate() {
  let animates = document.querySelectorAll(".animate");

  for (let i = 0; i < animates.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = animates[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      animates[i].classList.add("active");
    } else {
      animates[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", animate);

/**
 * 
 * .animate{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}

.animate.active{
  transform: translateY(0);
  opacity: 1;
}


.active{
  visibility: visible !important;
}
 * 
 */