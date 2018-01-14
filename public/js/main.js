var containerPressed = document.getElementById('mpressed')
var containerMoving = document.getElementById('mmoving')

var container = document.getElementById('container')
var draggable = document.getElementById('draggable')
var dropzone = document.getElementById('dropzone')
var draggedElement

var dragX = 0,
    dragY = 0;

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

draggable.addEventListener('dragstart',dragStart , false)
document.addEventListener('drag', (e)=>{}, false)
document.addEventListener('dragend', (e)=>{}, false)
document.addEventListener("dragover", dragOver, false);
document.addEventListener('dragenter', dragEnter, false)
document.addEventListener('dragleave', dragLeave, false)
document.addEventListener("drop", drop, false)

dragStart = (e) => {
    e.dataTransfer.setData('id',this.id); // required by Mozilla
    draggedElement = this
}

dragEnter = (e) => {
    var target = null

    if (e.target.parentNode.classList.contains('dropzone'))
        target = e.target.parentNode

    if (e.target.classList.contains("dropzone"))
        target = e.target
    
    if (target) {
        target.classList.add('over');
    }
}

dragLeave =(e)=> {

    var target = null
    if (e.target.parentNode.classList.contains('dropzone'))
        target = e.target.parentNode
    if (e.target.classList.contains("dropzone"))
        target = e.target
    
    if (target) {
        target.classList.remove('over');
    }
}

dragOver = (e) => {
    mouse.position = {
        x : e.pageX,
        y : e.pageY
    }
    displayMoving(this)
    
    // prevent default to allow drop
    e.preventDefault();
}

drop = (e) => {
    e.preventDefault();
    var elementId = e.dataTransfer.getData("id");

    if (e.target.classList.contains("dropzone") ) {
        e.target.appendChild( document.getElementById(elementId)  );
    }
};


/**
 * display function
 * 
 */
displayPressed = ()=>{
    if (mouse.pressed)
        containerPressed.innerHTML="Button pressed @ "+ mouse.objectOffset.x + " / " + mouse.objectOffset.y
    else
        containerPressed.innerHTML="Button released"
}

displayMoving =  ()=> {
    if (mouse.pressed){
        containerMoving.innerHTML = 'x: ' + mouse.position.x + 'y: '+mouse.position.y;
    }
}
