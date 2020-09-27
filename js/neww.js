

// navbar

      $(function () {
      $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        var $banner = $("#home");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $banner.height());
        $nav.show();
        });
      });


nav=document.querySelector("#mainNavbar");
nav.style.display="none";

window.addEventListener("load",function(){
  console.log("loaded");
  var load_screen=document.querySelector(".preloader");
  document.body.removeChild(load_screen);
})

p_1=document.querySelector("#p-btn1");
p_2=document.querySelector("#p-btn2");
p_3=document.querySelector("#p-btn3");



p_img1=  document.querySelectorAll(".prize-img")[0];
p_img2=  document.querySelectorAll(".prize-img")[1];
p_img3=  document.querySelectorAll(".prize-img")[2];

p_value1=  document.querySelectorAll(".prize-value")[0];
p_value2=  document.querySelectorAll(".prize-value")[1];
p_value3=  document.querySelectorAll(".prize-value")[2];

p_img1.style.display="block";
p_img2.style.display="block";
p_img3.style.display="block";


p_1.addEventListener("click",function(){
  if(p_img1.style.display==="block"){
    p_img1.style.display="none";
    console.log("clicked");
    p_value1.style.display="block";
    p_1.textContent="UntamedDragon"
    p_img2.style.display="block";
    p_value2.style.display="none";
     p_img3.style.display="block";
    p_value3.style.display="none";



  }
  else{
        p_img1.style.display="block";
            p_value1.style.display="none";
            p_1.textContent="WINNER"


  }

})


p_2.addEventListener("click",function(){
  if(p_img2.style.display==="block"){
    p_img2.style.display="none";
    console.log("clicked");
    p_value2.style.display="block";
    p_2.textContent="AIDER"
    p_img1.style.display="block";
    p_value1.style.display="none";
     p_img3.style.display="block";
    p_value3.style.display="none";


  }
  else{
        p_img2.style.display="block";
            p_value2.style.display="none";
            p_2.textContent="RUNNER-UP"


  }

})


p_3.addEventListener("click",function(){
  if(p_img3.style.display==="block"){
    p_img3.style.display="none";
    console.log("clicked");
    p_value3.style.display="block";
    p_3.textContent="noob_master"
    p_img2.style.display="block";
    p_value2.style.display="none";
     p_img1.style.display="block";
    p_value1.style.display="none";


  }
  else{
        p_img3.style.display="block";
            p_value3.style.display="none";
            p_3.textContent="BEST MECH-HACK"


  }

})


// scroll to top

// Set a variable for our button element.
const scrollToTopButton = document.getElementById('js-top');

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;
  
  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 10);
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}
