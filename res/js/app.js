'use strict';
(function () {
  $(document).ready(function () {
    // sticky aside
    if ($('#js-aside').length) {
      var aside = $("#js-aside");
      $(document).scroll(function () {
        var y = $(document).scrollTop();
        if (y >= 110) {
          aside.addClass('c-aside--sticky');
        } else {
          aside.removeClass('c-aside--sticky');
        }
      });

      // reduce aside height if window scroll < 110px
      if ($(document).height() - $(window).height() < 110) {
        $('#js-aside__inner').addClass('c-aside__inner--short');
      }
    }

    // hide last coma in Content lsit
    if ($('.c-content-list').length) {
      $('.c-content-list').find('a').last().addClass('c-content-list__last-a');
    }

    if ($('.c-content-list__toggle')) {
      $('.c-content-list__toggle').on('click', function () {
        $(this).parent().toggleClass('c-content-list--collapsed');
      });
    }
  });
})(window, document);
