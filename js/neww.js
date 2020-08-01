

// navbar

      $(function () {
      $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        var $banner = $("#home");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $banner.height());
        });
      });




window.addEventListener("load",function(){
  console.log("loaded");
  var load_screen=document.querySelector(".preloader");
  document.body.removeChild(load_screen);
})