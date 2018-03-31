'use strict';
(function () {
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
    $(document).ready(function () {
      if ($(document).height() - $(window).height() < 110) {
        $('#js-aside__inner').addClass('c-aside__inner--short');
      }
    });
  }
})();
