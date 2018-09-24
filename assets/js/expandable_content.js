$(document).ready(function() {
  $('.expandable-content').each(function(i, el) {
    var expanded = false;
    var swiper = null;
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
          if (swiper == null) {
            swiper = new Swiper(swiperContainer, {
              effect: 'coverflow',
              grabCursor: true,
              centeredSlides: true,
              slidesPerView: 'auto',
              loop: true,
              coverflowEffect: {
                rotate: 0,
                stretch: 5,
                depth: 700,
                modifier: 1,
                slideShadows : true,
              },
              pagination: {
                el: '.swiper-pagination',
              },
            });
          }
        });
      }
    });

  });
});
