var element = document.getElementById('drag-bozzo');

// Move Bozzo

element.addEventListener('touchmove', function(event) {
  var touch = event.targetTouches[0];
  element.style.left = touch.pageX + 'px';
  element.style.top = touch.pageY + 'px';
  event.preventDefault();
}, false);


// drop Bozzo