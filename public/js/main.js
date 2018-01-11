var offsetX, offsetY;
var element = document.getElementById('drag-bozo');
var dropZones = document.getElementsByClassName('droppable');
alert('start dragging'+ dropZones.length);
// Start Dragging bozo
element.addEventListener('touchstart', function(event) {
  var touch = event.targetTouches[0];
  
  offsetX= element.offsetLeft - touch.pageX;
  offsetY= element.offsetTop - touch.pageY;
}, false);

// Move Bozo
element.addEventListener('touchmove', function(event) {
  var touch = event.targetTouches[0];
  var target;
  
  if (touch.target.target) {
    target = touch.target.target;
    target.style.background = "purple";
  }
  else {
    if (target)
    {
      target.style.background = "";
      target = null;
    }
  }

  element.style.left = touch.pageX + offsetX + 'px';
  element.style.top = touch.pageY + offsetY + 'px';

  event.preventDefault();
}, false);

// Start Dragging bozo
element.addEventListener('touchend', function(event) {
  event.preventDefault();
  var touch = event.targetTouches[0];
  alert ("Fire!" );
  if (touch) {
    alert('touch');
  }
  if (touch.target) {
    alert('touch.target');
  }
  if (touch.target.target) {
    alert('touch.target.target');
  }

  var span = document.getElementById("pos");
  span.innerText = JSON.stringify(event);
},false);



// drop Box

for (var i= 0; i < dropZones.length; i++){
  dropZones[i].addEventListener('drop', function(event) {
    event.preventDefault();
    alert('doc dropped');
    dropZones[i].innerHTML="Boz's Dropped";
  });
}