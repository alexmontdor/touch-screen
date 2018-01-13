var offsetX, offsetY;
var element = document.getElementById('drag-bozo');
var dropZones = document.getElementsByClassName('droppable');

window.onmousemove = function(e){
  e = e || window.event;
  var dragX = e.clientX, dragY = e.clientY;

  console.log ('pos', dragX, dragY)
  element.style.left = dragX + offsetX + 'px';
  element.style.top = dragY + offsetY + 'px';
};

element.addEventListener('dragstart', handleDragStart);
element.addEventListener('dragend', handleDragEnd);
element.addEventListener('drag', handleDrag);

for (var i=0; i<dropZones.length; i++) {
  dropZones[i].addEventListener('dragenter', handleDragEnter);
  dropZones[i].addEventListener('dragleave', handleDragLeave);
  dropZones[i].addEventListener('drop', handleDrop);
}


function handleDragStart (event) {
  
  var el = (event.targetTouches)? event.targetTouches[0] : event;
  
  offsetX= element.offsetLeft - el.pageX;
  offsetY= element.offsetTop - el.pageY;
  //event.dataTransfer.effectAllowed = "move"; 
  event.dataTransfer.setData ('text', "Bozo is moved");        // compulsory with FireFox : text/plain
}


function handleDrag (event) {
  
  event.preventDefault();
  
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
    
}

function handleDrop (event) {
  //event.preventDefault();
  console.log(event);
  alert(event.dataTransfer.getData('text'));
}

