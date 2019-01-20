(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, {
    height: 500
  });

  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems);

  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems);

  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);

  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

$(document).ready(function () {
  $('textarea#textarea2').characterCounter();
});