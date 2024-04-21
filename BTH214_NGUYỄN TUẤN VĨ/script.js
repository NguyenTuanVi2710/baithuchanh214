$(document).ready(function(){
    $('.menu > ul > li:has(ul)').addClass('menu-dropdown');
    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">Menu</a>");
    $(".menu > ul > li").click(function(){
      if($(window).width() <= 768){
        $(this).children("ul").slideToggle(150);
      }
    });
    $(".menu-mobile").click(function(e){
      $(".menu > ul").toggleClass('show-on-mobile');
      e.preventDefault();
    });
  });
  