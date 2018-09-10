$(document).ready(function() {
  $('.expandable-content').each(function(i, el) {
    var expanded = false;
    var container = $(el),
        expandToggle = $('<a class="expand"><span>Развернуть</span><br/><img src="../assets/images/down.png" /></a>'),
        swiperContainer = $('> .carousel .swiper-container', container).fadeIn();

    expandToggle.insertAfter(container);
    expandToggle.click(function() {
      if (expanded) {
        expanded = false;
        $('span', expandToggle).text('Развернуть');
        swiperContainer.hide();
        container.slideUp();
      } else {
        expanded = true;
        $('span', expandToggle).text('Свернуть');
        swiperContainer.hide();
        container.slideDown(function(){
          swiperContainer.fadeIn();
          var swiper = new Swiper(swiperContainer, {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows : true,
            },
            pagination: {
              el: '.swiper-pagination',
            },
          });
        });
      }
    });

  });
});
