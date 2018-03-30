'use strict';
(function () {
  // sticky aside
  window.onscroll = function() {myFunction()};
  var navbar = document.getElementById('js-aside');
  var sticky = 90; // var sticky = navbar.offsetTop;
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('c-aside--sticky')
    } else {
      navbar.classList.remove('c-aside--sticky');
    }
  }
})();
