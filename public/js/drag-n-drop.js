var offsetX, offsetY;
var element = document.getElementById('drag-bozo');
var dropZones = document.getElementsByClassName('droppable');
var mousePos

element.addEventListener('dragstart', handleDragStart);
element.addEventListener('dragend', handleDragEnd);
element.addEventListener('drag', handleDrag);
document.addEventListener('mousemove', getMousePos)

for (var i=0; i<dropZones.length; i++) {
  dropZones[i].addEventListener('dragenter', handleDragEnter);
  dropZones[i].addEventListener('dragleave', handleDragLeave);
  dropZones[i].addEventListener('drop', handleDrop);
}


function handleDragStart (event) {
  
  var el = (event.targetTouches)? event.targetTouches[0] : event;
  
  offsetX= element.offsetLeft - el.pageX;
  offsetY= element.offsetTop - el.pageY;
console.log (offsetX, offsetY)
  //event.dataTransfer.effectAllowed = "move"; 
  event.dataTransfer.setData ('text', "Bozo is moved");        // compulsory with FireFox : text/plain
}

function mouseCoords(ev){ 
    if(ev.pageX || ev.pageY){ 
        return {x:ev.pageX, y:ev.pageY}; 
    } 
	    return { 
	        x:ev.clientX + document.body.scrollLeft - document.body.clientLeft, 
	        y:ev.clientY + document.body.scrollTop  - document.body.clientTop 
	    }; 
	}

function getMousePos (ev) {
  mousePos = mouseCoords(ev)
}

function handleDrag (event) {
  event.preventDefault();
  element.style.left = mousePos.x + offsetX + 'px';
  element.style.top = mousePos.y + offsetY + 'px';
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

