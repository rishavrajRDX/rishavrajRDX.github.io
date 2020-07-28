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


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var collapsed=document.querySelector(".btn");
collapsed.addEventListener("click",function(){
  console.log("clicked");
  document.querySelector(".border").classList.toggle("changeBg");
})

// var btn=document.getElementById("regBtn");
// btn.addEventListener("click",function(){
//   console.log("clicked");
// })


 // if ($('#nav-menu-container').length) {
 //    var $mobile_nav = $('#nav-menu-container').clone().prop({
 //      id: 'mobile-nav'
 //    });
 //    $mobile_nav.find('> ul').attr({
 //      'class': '',
 //      'id': ''
 //    });
 //    $('body').append($mobile_nav);
 //    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
 //    $('body').append('<div id="mobile-body-overly"></div>');
 //    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

 //    $(document).on('click', '.menu-has-children i', function (e) {
 //      $(this).next().toggleClass('menu-item-active');
 //      $(this).nextAll('ul').eq(0).slideToggle();
 //      $(this).toggleClass("fa-chevron-up fa-chevron-down");
 //    });

 //    $(document).on('click', '#mobile-nav-toggle', function (e) {
 //      $('body').toggleClass('mobile-nav-active');
 //      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
 //      $('#mobile-body-overly').toggle();
 //    });

 //    $(document).click(function (e) {
 //      var container = $("#mobile-nav, #mobile-nav-toggle");
 //      if (!container.is(e.target) && container.has(e.target).length === 0) {
 //        if ($('body').hasClass('mobile-nav-active')) {
 //          $('body').removeClass('mobile-nav-active');
 //          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
 //          $('#mobile-body-overly').fadeOut();
 //        }
 //      }
 //    });
 //  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
 //    $("#mobile-nav, #mobile-nav-toggle").hide();
 //  }