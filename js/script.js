/*=================================
   JavaScript INDEX
===================================
    1. Typed JS
    2. Navbar JS
    3. Background image
    4. Isotope JS
    5. Magnific-popup JS
    6. Smooth scroll


 =================================*/

(function($){
    "use strict";
    setTimeout(function(){
      $('#preloader').addClass('preloaded');
    }, 800);
    setTimeout(function(){
      $('#preloader').remove();
    }, 2000);
    /**
     * 1. Typed JS
     */
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 100,
        startDelay: 100,
        backSpeed: 80,
        loop: true,
        loopCount: Infinity
    });
    /**
     * 2. Navbar JS
     */

    $(window).bind('scroll',function() {
        if ($(this).scrollTop() > 150){
            $('.navbar').addClass('fixed');
        } else {
            $('.navbar').removeClass('fixed');
        }
    });
    /**
     * 3. Background image
     */
    $("#home").css('background-image', 'url(' + 'assets/images/background/bgi.jpg' + ')');

    /**
     * 4. Isotope JS
     */
    // init Isotope
    var $grid = $('.portfolio-wrapper').isotope({
    // options
    itemSelector: '.portfolio-grid',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.portfolio-grid'
    }
  });
  // filter items on button click
  $('.portfolio-filter').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
    //   active button selection
  $('.portfolio-filter button').click(function(){
    $(this).siblings('button').removeClass('active');
    $(this).addClass('active');
  });

/**
 * 5. Magnific-popup JS
 */
 $('.expand-img').magnificPopup({
     type: 'image',
     gallery:{
         enabled: true
     }
 })

/**
 * 6. Smooth scroll
 */
 $("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
 
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});




})(jQuery);
























