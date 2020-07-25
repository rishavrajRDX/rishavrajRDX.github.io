console.log("hi");
  $(document).ready(function(){
  var docEl = $(document),
      headerEl = $('header'),
      headerWrapEl = $('.wrapHead'),
      navEl = $('nav'),
      linkScroll = $('.scroll');
  
  docEl.on('scroll', function(){
    if ( docEl.scrollTop() > 60 ){
      headerEl.addClass('fixed-to-top');
      headerWrapEl.addClass('fixed-to-top');
      navEl.addClass('fixed-to-top');
    }
    else {
      headerEl.removeClass('fixed-to-top');
      headerWrapEl.removeClass('fixed-to-top');
      navEl.removeClass('fixed-to-top');
    }
  });
  
  linkScroll.click(function(e){
      e.preventDefault();
      $('body, html').animate({
         scrollTop: $(this.hash).offset().top
      }, 500);
   });
});

//  function myFunction() {
//   var elmnt = document.getElementById("home");
//   console.log("hit");
//   elmnt.scrollIntoView();
// }


function myFunction(){
  var elmt=document.getElementById("heading");
  elmt.classList.add("bounceInUp");
  console.log("hit");
}