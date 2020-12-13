$(document).on('load', function() {

    var setBgColor = document.getAttribute('data-state')
    var stillState = this.getAttribute('data-still')
    var animateState = this.getAttribute('data-animate')

    if (state === 'still') {
      this.setAttribute('src', animateState);
      this.setAttribute('data-state', 'animate');
    } else {
      this.setAttribute('src', stillState);
      this.setAttribute('data-state', 'still');
    }