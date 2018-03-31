'use strict';
(function () {

  if ($('#js-aside').length) {
    // sticky aside
    $(document).scroll(function () {
      var y = $(document).scrollTop();
      var navbar = $("#js-aside");
      if (y >= 110) {
        navbar.addClass('c-aside--sticky');
      } else {
        navbar.removeClass('c-aside--sticky');
      }
    });

    // reduce aside height if window scroll < 110px
    $(document).ready(function () {
      if ($(document).height() - $(window).height() < 110) {
        $('#js-aside__inner').addClass('c-aside__inner--short');
      }
    });
  }
})();
