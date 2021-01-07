var canvas = document.getElementById('canvas');
var clipcanvas = document.getElementById('clipcanvas');
var ctx = canvas.getContext('2d');
var img = document.getElementById('img');
var clipPath;
var square;
var circle;

var addRectBtn = document.getElementById('addRectBtn');
var addCircleBtn = document.getElementById('addCircleBtn');
var deleteBtn = document.getElementById('deleteBtn');
var canvasfabric = new fabric.Canvas('canvas', { });
var clipcanvasfabric = new fabric.Canvas('clipcanvas', { });

img.onload = function() {

  var imgInstance = new fabric.Image(img, {
    top: 0,
    left: 0,
    selectable: false
  });

  canvasfabric.add(imgInstance);
  canvasfabric.centerObject(imgInstance);
  canvasfabric.renderAll();

  // Add Rectangle
  addRectBtn.onclick = function() {
    square = new fabric.Rect({ top: 175, left: 175, width: 50, height: 50, fill: 'green', opacity: 0.4 });
    square.name = "square";
    canvasfabric.discardActiveObject().renderAll();
    canvasfabric.add(square);
    canvasfabric.bringToFront(square);
    canvasfabric.setActiveObject(square);
    canvasfabric.renderAll();

    clipPath = new fabric.Rect({ top: 175, left: 175, width: 50, height: 50 });
    clipcanvasfabric.add(imgInstance);
    clipcanvasfabric.centerObject(imgInstance);
    clipcanvasfabric.renderAll();
    clipcanvasfabric.clipPath = clipPath;
    clipcanvasfabric.renderAll();
  }

  // Add Circle
  addCircleBtn.onclick = function() {
    circle = new fabric.Circle({ top: 160, left: 160, radius: 40, fill: 'blue', lockRotation: true, opacity: 0.4 });
    circle.name = "circle";
    circle.setControlsVisibility({
        mt: false,
        mb: false,
        ml: false,
        mr: false
    });
    canvasfabric.discardActiveObject().renderAll();
    canvasfabric.add(circle);
    canvasfabric.bringToFront(circle);
    canvasfabric.setActiveObject(circle);
    canvasfabric.renderAll();

    clipPath = new fabric.Circle({ top: 160, left: 160, radius: 40 });
    clipcanvasfabric.add(imgInstance);
    clipcanvasfabric.centerObject(imgInstance);
    clipcanvasfabric.renderAll();
    clipcanvasfabric.clipPath = clipPath;
    clipcanvasfabric.renderAll();
  }

  // Delete
  deleteBtn.onclick = function() {
    var selection = canvasfabric.getActiveObject();
    if (selection.type === 'activeSelection') {
        selection.forEachObject(function(element) {
            canvasfabric.remove(element);
        });
    }
    else{
        canvasfabric.remove(selection);
    }

    if (selection.name == "square") {
      square = undefined;
    }
    else if (selection.name == "circle") {
      circle = undefined;
    }

    canvasfabric.discardActiveObject();
    clipcanvasfabric.clear();
    canvasfabric.requestRenderAll();
  }
}

function update(progress) {
  if (square != undefined || circle != undefined) {
    addCircleBtn.disabled = true;
    addRectBtn.disabled = true;
    deleteBtn.disabled = false;
  }
  else {
    addCircleBtn.disabled = false;
    addRectBtn.disabled = false;
    deleteBtn.disabled = true;
  }

  if (clipPath != undefined && square != undefined) {
    clipPath.set('left', square.left);
    clipPath.set('top', square.top);
    clipPath.set('width', square.width * square.scaleX);
    clipPath.set('height', square.height * square.scaleY);
    clipPath.set('angle', square.angle);

    clipPath.setCoords();
    square.setCoords();
  }
  else if (clipPath != undefined && circle != undefined) {
    clipPath.set('left', circle.left);
    clipPath.set('top', circle.top);
    clipPath.set('radius', circle.radius * circle.scaleX);

    clipPath.setCoords();
    circle.setCoords();
  }

  clipcanvasfabric.renderAll();
  canvasfabric.renderAll();
}

function loop(timestamp) {
  var progress = (timestamp - lastRender);

  update(progress);

  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}
var lastRender = 0;
window.requestAnimationFrame(loop);
