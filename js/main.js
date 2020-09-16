var typed = new Typed('.typed', {
    strings: ["Yusuf","Web Developer"],
    typeSpeed: 70,
    startDelay: 90,
    loop:true,
});


var offsetTop = $('#sekils').offset().top;
    $(window).scroll(function() {
        var height = $(window).height();
        if($(window).scrollTop()+height > offsetTop) {
            jQuery('.skillbar').each(function(){
                jQuery(this).find('.skillbar-bar').animate({
                    width:jQuery(this).attr('data-percent')
                },2000);
            });
        } 
});


jQuery('.Count').each(function () {
    var $this = $(this);
    jQuery({ Counter: 0}).animate({ Counter: $this.text() }, {
      duration: 2000,
      easing: 'swing',
      step: function () {
        $this.text(Math.ceil(this.Counter));
      }
    });
  }); 


$(function(){
    $('.copyright').fadeIn('slow');
});

$(document).ready(function(){
    $(window).scroll(function(){
        $('.hideme').each(function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if(bottom_of_window > bottom_of_object){
                $(this).animate({'opacity': '1'}, 1500);
            }else{
                $(this).animate({'opacity': '0'}, 1500);
            }
        });
    });
});