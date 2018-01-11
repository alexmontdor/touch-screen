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
  console.log ('event', event);
  var el = (event.targetTouches)? event.targetTouches[0] : event;
  
  offsetX= element.offsetLeft - el.clientX;
  offsetY= element.offsetTop - el.clientY;

  //event.dataTransfer.effectAllowed = "move"; 
  event.dataTransfer.setData ('text', "Bozo is moved");        // compulsory with FireFox : text/plain
}

function handleDrag (event) {
  var el = (event.targetTouches)? event.targetTouches[0] : event;
  element.style.left = el.clientX + offsetX + 'px';
  element.style.top = el.clientY + offsetY + 'px';
  
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

