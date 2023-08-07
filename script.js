document.addEventListener("mousemove", function(event) {
    let background = document.querySelector(".background");
    let mouseX = event.clientX;
    let mouseY = event.clientY;
  
    background.style.transform = `translate(${mouseX / 50}px, ${mouseY / 50}px)`;
  });