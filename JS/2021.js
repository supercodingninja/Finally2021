// Ref. https://www.w3schools.com/howto/howto_js_slideshow.asp //
var sIndex = 1;
viewSlide (sIndex);

// Next/previous controls
function plusSlides(n) {
  viewSlide (sIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  viewSlide (sIndex = n);
}

function viewSlide (n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var mkDots = document.getElementsByClassName("theDots");
  if (n > slides.length) {sIndex = 1}
  if (n < 1) {sIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < mkDots.length; i++) {
      mkDots[i].className = mkDots[i].className.replace(" active", "");
  }
  slides[sIndex-1].style.display = "block";
  mkDots[sIndex-1].className += " active";
}


// Autorun slides. //
var sIndex = 0;
viewSlide ();

function viewSlide () {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  sIndex++;
  if (sIndex > slides.length) {sIndex = 1}
  slides[sIndex-1].style.display = "block";
  setTimeout(viewSlide , 2000); // Change image every 2 seconds
}