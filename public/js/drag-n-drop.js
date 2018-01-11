var offsetX, offsetY;
var element = document.getElementById('drag-bozo');
var dropZones = document.getElementsByClassName('droppable');

element.addEventListener('dragstart', handleDragStart, false)
element.addEventListener('dragend', handleDragEnd, false)

for (var i = 0; i < dropZones.length; i++) {
  dropZones[i].addEventListener('drop', handleDrop);
}

/**
 * touchstart -> dragstart
 * touchmove -> drag
 * touchend -> dragend
 * 
 * if (drag) test drop
 */

// Start Dragging bozo
element.addEventListener('touchstart', function (event) {
  var touch = event.targetTouches[0];

  offsetX = element.offsetLeft - touch.pageX;
  offsetY = element.offsetTop - touch.pageY;

}, false);

// Move Bozo
element.addEventListener('touchmove', function (event) {
  var touch = event.targetTouches[0];

  event.preventDefault();
  element.style.left = touch.pageX + offsetX + 'px';
  element.style.top = touch.pageY + offsetY + 'px';
}, false);


var dragSrcEl = null;
function handleDragStart(e) {
  dragSrcEl = e.target;
  var dt = e.dataTransfer;
  dt.effectAllowed = 'move';
  dt.setData('text', 'Bozs dragged');

}
function handleDragOver(e) {
  if (dragSrcEl) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';

  }
}
function handleDragEnter(e) {
  if (dragSrcEl) {
    e.target.classList.add('over');
  }
}
function handleDragLeave(e) {
  if (dragSrcEl) {
    e.target.classList.remove('over');
  }
}
function handleDragEnd(e) {
  dragSrcEl = null;
  /* [].forEach.call(cols, function (col) {
      col.style.opacity = '';
      col.classList.remove('over');
  }); */
}
function handleDrop(e) {
  if (dragSrcEl) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    e.preventDefault();
    if (dragSrcEl != this) {
      this.innerHTML = e.dataTransfer.getData('text');
    }
  }
}

function dropElement(event) {
  event.preventDefault();
  alert('dropping element');
}

