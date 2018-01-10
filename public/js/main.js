var offsetX, offsetY;
var element = document.getElementById('drag-bozo');
var dropZones = document.getElementsByClassName('droppable');

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





element.addEventListener("touchenter", function( event ) {
  if ( event.target.className == "droppable" ) {
      event.target.style.background = "purple";
  }

}, false);

element.addEventListener("touchleave", function( event ) {
  if ( event.target.className == "droppable" ) {
      event.target.style.background = "";
  }

}, false);


// drop Box

for (var i= 0; i < dropZones.length; i++){
  dropZones[i].addEventListener('drop', function(event) {
    event.preventDefault();
    zone.innerText ="Boz's Dropped";
  })
}