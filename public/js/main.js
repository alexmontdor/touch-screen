var offsetX, offsetY;
var element = document.getElementById('drag-bozo');


// Start Dragging bozo
element.addEventListener('touchstart', function(event) {
  var touch = event.targetTouches[0];
  
  offsetX= element.offsetLeft - touch.pageX;
  offsetY= element.offsetTop - touch.pageY;
},false);

// Move Bozo
element.addEventListener('touchmove', function(event) {
  var touch = event.targetTouches[0];
  element.style.left = touch.pageX + offsetX + 'px';
  element.style.top = touch.pageY + offsetY + 'px';
  event.preventDefault();
}, false);




// drop Bozo