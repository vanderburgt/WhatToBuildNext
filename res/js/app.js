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

    // hide last coma in Content list
    if ($('.c-content-list').length) {
      $('.c-content-list').each(function (i, el) {
        $(el).find('a').last().addClass('c-content-list__last-a')
      });
    }

    // toggle Content list
    if ($('.c-content-list__toggle')) {
      $('.c-content-list__toggle').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('c-content-list--collapsed');
      });
    }

    // burger menu toggle
    $('#js-c-burger, #js-c-burger-close').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('body__mm-active');
      $('#js-mm').toggleClass('c-mm--active');
    });
    $('#js-mm__overlay').on('click', function () {
      $('body').toggleClass('body__mm-active');
      $('#js-mm').toggleClass('c-mm--active');
    });

  });
})(window, document);
