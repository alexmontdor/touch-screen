var offsetX, offsetY;
var element = document.getElementById('drag-bozo');
var dropZones = document.getElementsByClassName('droppable');

element.addEventListener('dragstart', handleDragStart, false);

for (var i=0; i<dropZones.length; i++) {
  dropZones[i].addEventListener('dragenter', handleDragEnter);
  dropZones[i].addEventListener('dragleave', handleDragLeave);
  dropZones[i].addEventListener('drop', handleDrop);
}


function handleDragStart (event) {
  event.dataTransfert.setData ('text/plain', 'Bozo is moved');        // compulsory with FireFox : text/plain
}

function handleDragEnter (event) {
  event.preventDefault();
  event.target.classList.add('enterDropZone');
}

function handleDragLeave (event) {
  event.preventDefault();
  event.target.classList.remove('enterDropZone');
}

function handleDrop (event) {
  event.preventDefault();
  console.log(event.dataTransfer.getData('text/plain'));
  alert(event.dataTransfer.getData('text/plain'));
}

