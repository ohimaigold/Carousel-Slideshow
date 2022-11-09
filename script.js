let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector(".btn-prev"),
  arrowRight = document.querySelector(".btn-next"),
  imageNumbers = document.querySelector(".number"),
  allImages= document.querySelectorAll(".slide"),
  current = 0;
//Show arrows when hover on images 
allImages.forEach(item => {
  item.addEventListener("mouseover", function(){
    arrowLeft.style.display="block";
    arrowRight.style.display="block";
    imageNumbers.style.display="block";
  });
});
//Remove arrows when mouse remove on  images 
allImages.forEach(item => {
  item.addEventListener("mouseout", function(){
    arrowLeft.style.display="none";
    arrowRight.style.display="none";
    imageNumbers.style.display="none";
  });
});
//Show arrows when hover on arrow left 
arrowLeft.addEventListener("mouseover", function(){
  arrowLeft.style.display="block";
  arrowRight.style.display="block";
  imageNumbers.style.display="block";
});
//Show arrows when hover on arrow right 
arrowRight.addEventListener("mouseover", function(){
  arrowLeft.style.display="block";
  arrowRight.style.display="block";
  imageNumbers.style.display="block";
});
// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}
// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
