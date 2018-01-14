var containerPressed = document.getElementById('mpressed')
var containerMoving = document.getElementById('mmoving')

var container = document.getElementById('container')
var draggable = document.getElementById('draggable')
var dropzone = document.getElementById('dropzone')
var draggedElement
mouse = { 
    pressed:false,
    position: {
        x: 0,
        y: 0
    },
    objectOffset: {
        x:0,
        y:0
    }
}

/* create_gets_sets(mousePressed);
listen_to(mousePressed, status, displayPressed()); */

/**
 * Management Button management
 * @param {*} doc 
 * @param {*} e 
 */
draggable.onmousedown = function(e){
    mouse.pressed= true;
    mouse.objectOffset.x = e.clientX - this.offsetLeft
    mouse.objectOffset.y = e.clientY - this.offsetTop
    displayPressed()
}

document.onmouseup = function(doc, e){
    mouse.pressed= false;
    displayPressed ()
}

var dragX = 0,
    dragY = 0;

draggable.addEventListener('dragstart', function(e) {
    e.dataTransfer.setData('id',this.id);
    document.ondragover = function(event) {
        event = event || window.event;
        mouse.position = {
            x : event.pageX,
            y : event.pageY
        }
    };
    draggedElement = this
}, false)


document.addEventListener('drag', function(e){

 displayMoving(this)

}, false)

document.body.addEventListener('dragend', function(e){
}, false)
     
document.addEventListener('dragenter', function(e) {
    var target = null

    if (e.target.parentNode.classList.contains('dropzone'))
        target = e.target.parentNode

    if (e.target.classList.contains("dropzone"))
        target = e.target
    
    if (target) {
        target.classList.add('over');

    }
    
}, false)



document.addEventListener('dragleave', function(e) {

    var target = null
    if (e.target.parentNode.classList.contains('dropzone'))
        target = e.target.parentNode
    if (e.target.classList.contains("dropzone"))
        target = e.target
    
    if (target) {
        target.classList.remove('over');

    }
}, false)

document.addEventListener("dragend", function( event ) {
}, false);


document.addEventListener("dragover", function( event ) {
    // prevent default to allow drop
    mouse.position = {
        x : e.pageX,
        y : e.pageY
    }
    event.preventDefault();
}, false);

document.addEventListener("drop", (e) => {
    e.preventDefault();
    var elementId = e.dataTransfer.getData("id");

    if (e.target.classList.contains("dropzone") ) {
        e.target.appendChild( document.getElementById(elementId)  );
    }
  
}, false);

function displayPressed (){
    if (mouse.pressed)
        containerPressed.innerHTML="Button pressed @ "+ mouse.objectOffset.x + " / " + mouse.objectOffset.y
    else
        containerPressed.innerHTML="Button released"
}

function displayMoving () {
    if (mouse.pressed){
        containerMoving.innerHTML = 'x: ' + mouse.position.x + 'y: '+mouse.position.y;
    }
}
