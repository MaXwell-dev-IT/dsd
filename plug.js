$(document).ready(function(){
 var sliderheight = $(window).height();
     navheight    = $(".navbar").innerHeight();
     upperheight  = $(".upper-bar").innerHeight();
 $(".slider .carousel-item").height(sliderheight - (navheight + upperheight));

  $(".featured-work ul li").on('click',function(){
     $(this).addClass('active').siblings().removeClass('active');
     if($(this).data('class') === 'all'){
         $('.shuffel-image .col-md').css('opacity' , 1);
     }else{
        $('.shuffel-image .col-md').css('opacity' , '.08');
        $($(this).data('class')).parent().css('opacity' , 1);
     }
  });
});