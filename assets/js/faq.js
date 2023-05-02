
$(function(){
  $('.accordion_one .accordion_header').click(function(){
    $(this).next('.accordion_inner').slideToggle();
    $(this).toggleClass("open");
  });
});