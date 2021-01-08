var canvas = document.getElementById('canvas');
var clipcanvas = document.getElementById('clipcanvas');
var ctx = canvas.getContext('2d');
var img = document.getElementById('img');
var clipPath;
var square;
var circle;
var polygon;
var ogImg;
var clipImg;

var hasCropped = false;

var addRectBtn = document.getElementById('addRectBtn');
var addCircleBtn = document.getElementById('addCircleBtn');
var addPolygonBtn = document.getElementById('addPolygonBtn');
var addPointBtn = document.getElementById('addPointBtn');
var removePointBtn = document.getElementById('removePointBtn');
var deleteBtn = document.getElementById('deleteBtn');
var cropBtn = document.getElementById('cropBtn');
var canvasfabric = new fabric.Canvas('canvas', { });
var clipcanvasfabric = new fabric.Canvas('clipcanvas', { });

img.onload = function() {

  ogImg = new fabric.Image(img, {
    top: 0,
    left: 0,
    selectable: false
  });

  clipImg = new fabric.Image(img, {
    top: 0,
    left: 0,
    selectable: false
  });

  canvasfabric.add(ogImg);
  canvasfabric.centerObject(ogImg);
  canvasfabric.renderAll();

  // Add Rectangle
  addRectBtn.onclick = function() {
    square = new fabric.Rect({ top: 175, left: 175, width: 50, height: 50, fill: 'green', opacity: 0.5 });
    square.name = "square";
    canvasfabric.discardActiveObject().renderAll();
    canvasfabric.add(square);
    canvasfabric.bringToFront(square);
    canvasfabric.setActiveObject(square);
    canvasfabric.renderAll();

    clipPath = new fabric.Rect({ top: 175, left: 175, width: 50, height: 50 });
    clipcanvasfabric.add(clipImg);
    clipcanvasfabric.centerObject(clipImg);
    clipcanvasfabric.renderAll();
    clipcanvasfabric.clipPath = clipPath;
    clipcanvasfabric.renderAll();
  }

  // Add Circle
  addCircleBtn.onclick = function() {
    circle = new fabric.Circle({ top: 160, left: 160, radius: 40, fill: 'blue', lockRotation: true, opacity: 0.5 });
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
    clipcanvasfabric.add(clipImg);
    clipcanvasfabric.centerObject(clipImg);
    clipcanvasfabric.renderAll();
    clipcanvasfabric.clipPath = clipPath;
    clipcanvasfabric.renderAll();
  }

  // Add Polygon
  addPolygonBtn.onclick = function() {
    var points =
    [ { x: 0, y: 0 },
      { x: 40, y: 20 },
      { x: 40, y: 60 },
      { x: -40, y: 60 },
      { x: -40, y: 20 },
    ];
    polygon = new fabric.Polygon(points, {
  		left: 160,
  		top: 170,
  		fill: 'red',
      opacity: 0.5,
  		scaleX: 1,
  		scaleY: 1,
      objectCaching: false,
      cornerColor: 'red',
      transparentCorners: false
  	});
    polygon.name = "polygon";
  	canvasfabric.add(polygon);
    canvasfabric.bringToFront(polygon);
    canvasfabric.renderAll();

    clipPath = new fabric.Polygon(points, {
  		left: 160,
  		top: 170,
  		scaleX: 1,
  		scaleY: 1,
      objectCaching: false
  	});
    clipcanvasfabric.add(clipImg);
    clipcanvasfabric.centerObject(clipImg);
    clipcanvasfabric.clipPath = clipPath;
    clipcanvasfabric.renderAll();

    Edit();
  }

  // Crop
  cropBtn.onclick = function() {

    disableInputCanvas();
    hasCropped = true;

    clipImg.selectable = true;
    disabled = true;
    clipPath.visible = false;
    var cropped = new Image();
    cropped.src = clipcanvasfabric.toDataURL({
      left: clipPath.left,
      top: clipPath.top,
      width: clipPath.width,
      height: clipPath.height
    });
    cropped.onload = function() {
      clipcanvasfabric.clear();
      clipImg = new fabric.Image(cropped);
      clipImg.left = clipPath.left;
      clipImg.top = clipPath.top;
      clipImg.setCoords();
      clipcanvasfabric.add(clipImg);
      clipcanvasfabric.clipPath = null;
      clipcanvasfabric.renderAll();
    }
    console.log("CROPPED!");
  };

  // Add Polygon point
  addPointBtn.onclick = function() {
    // var cachedPoints = polygon.points;
    var firstPoint = polygon.points[0];
    var lastPoint = polygon.points[polygon.points.length-1];
    var newPoint = { x: 0, y: 0 };
    newPoint.x = (lastPoint.x + firstPoint.x) / 2;
    newPoint.y = (lastPoint.y + firstPoint.y) / 2;
    polygon.points.push(newPoint);
    Edit();
    Edit();
  }

  // Remove Polygon point
  removePointBtn.onclick = function() {
    polygon.points.pop();
    Edit();
    Edit();
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
    else if (selection.name == "polygon") {
      polygon = undefined;
    }

    canvasfabric.discardActiveObject();
    clipcanvasfabric.clear();
    canvasfabric.requestRenderAll();
  }
}

function disableInputCanvas() {
  var shadow = new fabric.Shadow({
            color: 'rgba(0, 0, 0, 0.2)',
            blur: 0,
            offsetX: 8,
            offsetY: 8
        });
  ogImg.shadow = shadow;
  canvasfabric.backgroundColor = 'rgba(0, 0, 0, 0.1)';
  canvasfabric.discardActiveObject();
  if (square != undefined) {
    square.selectable = false;
  }
  else if (circle != undefined) {
    circle.selectable = false;
  }
  else if (polygon != undefined) {
    polygon.selectable = false;
  }
}

function polygonPositionHandler(dim, finalMatrix, polygon) {
  var x = (polygon.points[this.pointIndex].x - polygon.pathOffset.x),
	    y = (polygon.points[this.pointIndex].y - polygon.pathOffset.y);
	return fabric.util.transformPoint(
		{ x: x, y: y },
    fabric.util.multiplyTransformMatrices(
      polygon.canvas.viewportTransform,
      polygon.calcTransformMatrix()
    )
	);
}

function actionHandler(eventData, transform, x, y) {
	var p = transform.target,
    currentControl = p.controls[p.__corner],
    mouseLocalPosition = p.toLocalPoint(new fabric.Point(x, y), 'center', 'center'),
    polygonBaseSize = p._getNonTransformedDimensions(),
		size = p._getTransformedDimensions(0, 0),
		finalPointPosition = {
			x: mouseLocalPosition.x * polygonBaseSize.x / size.x + p.pathOffset.x,
			y: mouseLocalPosition.y * polygonBaseSize.y / size.y + p.pathOffset.y
		};
	p.points[currentControl.pointIndex] = finalPointPosition;
	return true;
}

function anchorWrapper(anchorIndex, fn) {
  return function(eventData, transform, x, y) {
    var fabricObject = transform.target,
      absolutePoint = fabric.util.transformPoint({
          x: (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x),
          y: (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y),
      }, fabricObject.calcTransformMatrix()),
      actionPerformed = fn(eventData, transform, x, y),
      newDim = fabricObject._setPositionDimensions({}),
      polygonBaseSize = fabricObject._getNonTransformedDimensions(),
      newX = (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x) / polygonBaseSize.x,
	    newY = (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y) / polygonBaseSize.y;
    fabricObject.setPositionByOrigin(absolutePoint, newX + 0.5, newY + 0.5);
    return actionPerformed;
  }
}

function Edit() {
		canvasfabric.setActiveObject(polygon);
		polygon.edit = !polygon.edit;
		if (polygon.edit) {
      var lastControl = polygon.points.length - 1;
      polygon.cornerStyle = 'circle';
      polygon.cornerColor = 'rgba(255, 0, 255, 0.5)';
	    polygon.controls = polygon.points.reduce(function(acc, point, index) {
				acc['p' + index] = new fabric.Control({
					positionHandler: polygonPositionHandler,
					actionHandler: anchorWrapper(index > 0 ? index - 1 : lastControl, actionHandler),
					actionName: 'modifyPolygon',
					pointIndex: index
				});

				return acc;
			}, { });
		} else {
      polygon.cornerColor = 'red';
      polygon.cornerStyle = 'rect';
			polygon.controls = fabric.Object.prototype.controls;
		}
		polygon.hasBorders = !polygon.edit;
		canvasfabric.requestRenderAll();
	}

function update(progress) {
  if (!hasCropped) {
    if (polygon != undefined) {
      removePointBtn.style.display = "block";
      addPointBtn.style.display = "block";
      if (polygon.points.length <= 3) {
        removePointBtn.disabled = true;
      }
      else {
        removePointBtn.disabled = false;
      }
    }

    if (square != undefined || circle != undefined || polygon != undefined) {
      addCircleBtn.disabled = true;
      addRectBtn.disabled = true;
      addPolygonBtn.disabled = true;
      deleteBtn.disabled = false;
    }
    else {
      addCircleBtn.disabled = false;
      addRectBtn.disabled = false;
      addPolygonBtn.disabled = false;
      deleteBtn.disabled = true;
      removePointBtn.style.display = "none";
      addPointBtn.style.display = "none";
    }
  }
  else
  {
    addCircleBtn.disabled = true;
    addRectBtn.disabled = true;
    addPolygonBtn.disabled = true;
    deleteBtn.disabled = true;
    cropBtn.disabled = true;
    if (removePointBtn.style.display != "none") removePointBtn.disabled = true;
    if (addPointBtn.style.display != "none") addPointBtn.disabled = true;
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
  else if (clipPath != undefined && polygon != undefined) {
    clipPath = new fabric.Polygon(polygon.points, {
  		left: polygon.left,
  		top: polygon.top,
  		scaleX: 1,
  		scaleY: 1,
      objectCaching: false
  	});
    clipcanvasfabric.clipPath = clipPath;

    clipPath.setCoords();
    polygon.setCoords();
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
