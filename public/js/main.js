var offsetX, offsetY;
var element = document.getElementById('drag-bozo');
var dropZones = document.getElementsByClassName('droppable');
alert('start dragging');
// Start Dragging bozo
element.addEventListener('touchstart', function(event) {
  var touch = event.targetTouches[0];
  
  offsetX= element.offsetLeft - touch.pageX;
  offsetY= element.offsetTop - touch.pageY;
},false);

// Move Bozo
element.addEventListener('touchmove', function(event) {
  var touch = event.targetTouches[0];
  var target;
  
  if (event.target.target) {
    target = event.target.target;
    target.style.background = "purple";
  }
  else {
    if (target)
    {
      target.style.background = "";
      target = null
    }
  }

  element.style.left = touch.pageX + offsetX + 'px';
  element.style.top = touch.pageY + offsetY + 'px';

  event.preventDefault();
}, false);

// Start Dragging bozo
element.addEventListener('touchend', function(event) {
  var touch = event.targetTouches[0];
  var target;
  
  if (event.target.target) {
    target = event.target.target;
    target.innerText = "Dropped with finger";
  }

},false);

// drop Box

for (var i= 0; i < dropZones.length; i++){
  dropZones[i].addEventListener('drop', function(event) {
    event.preventDefault();
    alert('doc dropped');
    dropZones[i].innerHTML="Boz's Dropped";
  });
}