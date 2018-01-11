var offsetX, offsetY;
var element = document.getElementById('drag-bozo');
var dropZones = document.getElementsByClassName('droppable');

element.addEventListener('dragstart', handleDragStart);
element.addEventListener('dragend', handleDragEnd);
element.addEventListener('drag', handleDrag);

for (var i=0; i<dropZones.length; i++) {
  dropZones[i].addEventListener('dragenter', handleDragEnter);
  dropZones[i].addEventListener('dragleave', handleDragLeave);
  dropZones[i].addEventListener('drop', handleDrop);
}


function handleDragStart (event) {
  console.log ('event', event.pageX, element.offsetLeft);
  var el = (event.targetTouches)? event.targetTouches[0] : event;
  
  offsetX= element.offsetLeft - el.pageX;
  offsetY= element.offsetTop - el.pageY;

  //event.dataTransfer.effectAllowed = "move"; 
  event.dataTransfer.setData ('text', "Bozo is moved");        // compulsory with FireFox : text/plain
}

function handleDrag (event) {
  var el = (event.targetTouches)? event.targetTouches[0] : event;
  element.style.left = el.pageX + offsetX + 'px';
  element.style.top = el.pageY + offsetY + 'px';
  
}


function handleDragEnter (event) {
  event.preventDefault();
  event.target.classList.add('enterDropZone');
}

function handleDragLeave (event) {
  event.preventDefault();
  event.target.classList.remove('enterDropZone');
}

function handleDragEnd (event) {
  event.preventDefault();
  console.log ('End of move', event); // check if we can get the coordinates
}

function handleDrop (event) {
  //event.preventDefault();
  console.log(event);
  alert(event.dataTransfer.getData('text'));
}

