var typed = new Typed('.typed', {
    strings: ["Yusuf","Web Developer"],
    typeSpeed: 70,
    startDelay: 90,
    loop:true,
});


jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},4000);
	});
});

jQuery('.Count').each(function () {
    var $this = $(this);
    jQuery({ Counter: 0}).animate({ Counter: $this.text() }, {
      duration: 4000,
      easing: 'swing',
      step: function () {
        $this.text(Math.ceil(this.Counter));
      }
    });
  });

// var offsetTop = $('#sekils').offset().top;
//     $(window).scroll(function() {
//         var height = $(window).height();
//         if($(window).scrollTop()+height > offsetTop) {
//             jQuery('.skillbar').each(function(){
//                 jQuery(this).find('.skillbar-bar').animate({
//                     width:jQuery(this).attr('data-percent')
//                 },2000);
//             });
//         }   
// });