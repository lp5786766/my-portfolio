$(document).ready(function () {
  $('.sidenav').sidenav();

  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      $('#profile').addClass('z-depth-3');
    } else {
      $('#profile').removeClass('z-depth-3');
    }
  }

  var x = window.matchMedia('(max-width: 768px)');
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes

  $('.activator').hover(function(){
    this.src = `assets/images/${this.id}-color.png`;
    }, function(){
      this.src = `assets/images/${this.id}.png`;
  });

});
