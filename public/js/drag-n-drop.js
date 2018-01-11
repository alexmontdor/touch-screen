var offsetX, offsetY;
var element = document.getElementById('drag-bozo');
var dropZones = document.getElementsByClassName('droppable');

element.addEventListener('dragstart', dragStartElement, false)
element.addEventListener('drag', dragElement, false)
element.addEventListener('dragend', dropElement, false)

/**
 * touchstart -> dragstart
 * touchmove -> drag
 * touchend -> dragend
 * 
 * if (drag) test drop
 */

// Start Dragging bozo
element.addEventListener('touchstart', function(event) {
  var touch = event.targetTouches[0];
  
  offsetX= element.offsetLeft - touch.pageX;
  offsetY= element.offsetTop - touch.pageY;
  element.createEvent('DragEvent')
  element.initDragEvent('dragstart',event)

}, false);

// Move Bozo
element.addEventListener('touchmove', function(event) {
  var touch = event.targetTouches[0];
  
  event.preventDefault();
  element.createEvent('DragEvent')
  element.initDragEvent('drag',event)
  element.style.left = touch.pageX + offsetX + 'px';
  element.style.top = touch.pageY + offsetY + 'px';
}, false);

// Start Dragging bozo
element.addEventListener('touchend', function(event) {
  event.preventDefault();
  element.createEvent('dragend', dropElement)
  
  var span = document.getElementById("pos");
  span.innerText = JSON.stringify(event);
    

/* 
  if (touch) {
    alert('touch');
  }
  if (touch.target) {
    alert('touch.target');
  }
  if (touch.target.target) {
    alert('touch.target.target');
  } 
*/


},false);



// drop Box




function dragStartElement (event) {
//  alert ('start dragging element');
}

function dragElement (event) {
  event.preventDefault();
  var target;
 // alert('dragging element');

   
  if (event.target.target) {
    target = touch.target;
    target.style.background = "purple";
  }
  else {
    if (target)
    {
      target.style.background = "";
      target = null;
    }
  }

}

function dropElement (event) {
  event.preventDefault();
  alert('dropping element');
}

for (var i= 0; i < dropZones.length; i++){
  dropZones[i].addEventListener('mouseover', function(event) {
    event.preventDefault();
    
    this.innerHTML="Boz's Dropped";
  });
}