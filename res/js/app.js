'use strict';
(function () {
  $(document).ready(function () {
    // set min height for content block excuted header+footer height
    if ($('#js-content').length) {
      $('#js-content').css('min-height', 'calc(100% - ' + ($('#js-header').outerHeight() + $('#js-footer').outerHeight()) + 'px)');
    }

    // sticky aside
    function toggleAside() {
      var y = $(document).scrollTop();
      if (y >= $('#js-header').outerHeight() + 20) { //  header height + 20px (aside position top 60px-40px absolute/fixed)
        aside.addClass('c-aside--sticky');
      } else {
        aside.removeClass('c-aside--sticky');
      }
    }

    if ($('#js-aside').length) {
      var aside = $("#js-aside");
      toggleAside();
      $(document).scroll(function () {
        toggleAside();
      });

      // reduce aside height if window scroll < 110px
      if ($(document).height() - $(window).height() < $('#js-header').outerHeight() + 20) { // same like scroll
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

    // toggle follow popup
    if ($('#js-popup-follow').length) {
      $('.js-popup-follow-close, #js-popup-follow').on('click', function (e) {
        e.preventDefault();
        $('#js-popup-follow').hide()
        $('body').removeClass('body-popup');
      });
      $('#js-follow').on('click', function (e) {
        e.preventDefault();
        $('#js-popup-follow').show();
        $('body').addClass('body-popup');
      });
      $('#js-popup-follow-inner').on('click', function (e) {
        e.stopPropagation();
      });

      // follow form submit
      $('#js-follow-submit').on('click', function (e) {
        e.preventDefault();
        $('#js-follow-form').slideUp(300)
        $('#js-follow-success').slideDown(300)
      });
    }

  });
})(window, document);
