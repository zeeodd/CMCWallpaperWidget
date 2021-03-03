var easyBtn = document.getElementById('easy');
var mediumBtn = document.getElementById('medium');
var hardBtn = document.getElementById('hard');

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
var img6 = document.getElementById('img6');
var img7 = document.getElementById('img7');
var img8 = document.getElementById('img8');
var img9 = document.getElementById('img9');

easyBtn.addEventListener("click", function(e) {
  easyToggle();
  // img1.style.display = "none";
  // img1.src = "...";
});

mediumBtn.addEventListener("click", function(e) {
  mediumToggle();
});

hardBtn.addEventListener("click", function(e) {
  hardToggle();
});

function easyToggle() {
  img1.src = "img/easy/easy0.png";
  img2.src = "img/easy/easy1.png";
  img3.src = "img/easy/easy2.png";
  img4.src = "img/easy/easy3.png";
  img5.src = "img/easy/easy4.jpg";
  img6.src = "img/easy/easy5.jpg";
  img7.src = "img/easy/easy6.jpg";
  img8.src = "";
  img9.src = "";

  img1.style.display = "inline-block";
  img2.style.display = "inline-block";
  img3.style.display = "inline-block";
  img4.style.display = "inline-block";
  img5.style.display = "inline-block";
  img6.style.display = "inline-block";
  img7.style.display = "inline-block";
  img8.style.display = "none";
  img9.style.display = "none";
}

function mediumToggle() {
  img1.src = "img/medium/medium0.png";
  img2.src = "img/medium/medium1.png";
  img3.src = "img/medium/medium2.png";
  img4.src = "img/medium/medium3.png";
  img5.src = "";
  img6.src = "";
  img7.src = "";
  img8.src = "";
  img9.src = "";

  img1.style.display = "inline-block";
  img2.style.display = "inline-block";
  img3.style.display = "inline-block";
  img4.style.display = "inline-block";
  img5.style.display = "none";
  img6.style.display = "none";
  img7.style.display = "none";
  img8.style.display = "none";
  img9.style.display = "none";
}

function hardToggle() {
  img1.src = "img/hard/hard0.png";
  img2.src = "img/hard/hard1.png";
  img3.src = "img/hard/hard2.png";
  img4.src = "img/hard/hard3.png";
  img5.src = "img/image3.png";
  img6.src = "img/image3.png";
  img7.src = "img/image3.png";
  img8.src = "img/image3.png";
  img9.src = "img/image3.png";

  img1.style.display = "inline-block";
  img2.style.display = "inline-block";
  img3.style.display = "inline-block";
  img4.style.display = "inline-block";
  img5.style.display = "none";
  img6.style.display = "none";
  img7.style.display = "none";
  img8.style.display = "none";
  img9.style.display = "none";
}

window.addEventListener('load', (event) => {
  easyToggle();
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - -

// IMAGE 1
img1.addEventListener("click", function (e) {
  var imgsrc = img1.src;

  ogImg = fabric.Image.fromURL(imgsrc, function (img) {
    var scale = 1.0;
    if (img.height > (canvasHeight-25) || img.width > (canvasWidth-25)) {
      scale = (canvasHeight-25) / Math.max(img.height, img.width)
    }
    oImg = img.set({ left: 0,
                         top: 0,
                         angle: 0,
                         width: img.width,
                         height: img.height,
                         selectable: false }).scale(scale);
    canvasfabric.clear();
    canvasfabric.add(oImg).renderAll();
    canvasfabric.centerObject(oImg);
  });

  clipImg = fabric.Image.fromURL(imgsrc, function (img) {
    var scale = 1.0;
    if (img.height > (canvasHeight-25) || img.width > (canvasWidth-25)) {
      scale = (canvasHeight-25) / Math.max(img.height, img.width)
    }
    clipImg = img.set({ left: 0,
                         top: 0,
                         angle: 0,
                         width: img.width,
                         height: img.height,
                         selectable: false }).scale(scale);
  });

  imageAdded = true;
});

// IMAGE 2
img2.addEventListener("click", function (e) {
  var imgsrc = img2.src;

  ogImg = fabric.Image.fromURL(imgsrc, function (img) {
    var scale = 1.0;
    if (img.height > (canvasHeight-25) || img.width > (canvasWidth-25)) {
      scale = (canvasHeight-25) / Math.max(img.height, img.width)
    }
    oImg = img.set({ left: 0,
                         top: 0,
                         angle: 0,
                         width: img.width,
                         height: img.height,
                         selectable: false }).scale(scale);
    canvasfabric.clear();
    canvasfabric.add(oImg).renderAll();
    canvasfabric.centerObject(oImg);
  });

  clipImg = fabric.Image.fromURL(imgsrc, function (img) {
    var scale = 1.0;
    if (img.height > (canvasHeight-25) || img.width > (canvasWidth-25)) {
      scale = (canvasHeight-25) / Math.max(img.height, img.width)
    }
    clipImg = img.set({ left: 0,
                         top: 0,
                         angle: 0,
                         width: img.width,
                         height: img.height,
                         selectable: false }).scale(scale);
  });

  imageAdded = true;
});

// IMAGE 3
img3.addEventListener("click", function (e) {
  var imgsrc = img3.src;

  ogImg = fabric.Image.fromURL(imgsrc, function (img) {
    var scale = 1.0;
    if (img.height > (canvasHeight-25) || img.width > (canvasWidth-25)) {
      scale = (canvasHeight-25) / Math.max(img.height, img.width)
    }
    oImg = img.set({ left: 0,
                         top: 0,
                         angle: 0,
                         width: img.width,
                         height: img.height,
                         selectable: false }).scale(scale);
    canvasfabric.clear();
    canvasfabric.add(oImg).renderAll();
    canvasfabric.centerObject(oImg);
  });

  clipImg = fabric.Image.fromURL(imgsrc, function (img) {
    var scale = 1.0;
    if (img.height > (canvasHeight-25) || img.width > (canvasWidth-25)) {
      scale = (canvasHeight-25) / Math.max(img.height, img.width)
    }
    clipImg = img.set({ left: 0,
                         top: 0,
                         angle: 0,
                         width: img.width,
                         height: img.height,
                         selectable: false }).scale(scale);
  });

  imageAdded = true;
});

// IMAGE 4
img4.addEventListener("click", function (e) {
  var imgsrc = img4.src;

  ogImg = fabric.Image.fromURL(imgsrc, function (img) {
    var scale = 1.0;
    if (img.height > (canvasHeight-25) || img.width > (canvasWidth-25)) {
      scale = (canvasHeight-25) / Math.max(img.height, img.width)
    }
    oImg = img.set({ left: 0,
                         top: 0,
                         angle: 0,
                         width: img.width,
                         height: img.height,
                         selectable: false }).scale(scale);
    canvasfabric.clear();
    canvasfabric.add(oImg).renderAll();
    canvasfabric.centerObject(oImg);
  });

  clipImg = fabric.Image.fromURL(imgsrc, function (img) {
    var scale = 1.0;
    if (img.height > (canvasHeight-25) || img.width > (canvasWidth-25)) {
      scale = (canvasHeight-25) / Math.max(img.height, img.width)
    }
    clipImg = img.set({ left: 0,
                         top: 0,
                         angle: 0,
                         width: img.width,
                         height: img.height,
                         selectable: false }).scale(scale);
  });

  imageAdded = true;
});

// IMAGE 5
img5.addEventListener("click", function (e) {
  var imgsrc = img5.src;

  ogImg = fabric.Image.fromURL(imgsrc, function (img) {
    var scale = 1.0;
    if (img.height > (canvasHeight-25) || img.width > (canvasWidth-25)) {
      scale = (canvasHeight-25) / Math.max(img.height, img.width)
    }
    oImg = img.set({ left: 0,
                         top: 0,
                         angle: 0,
                         width: img.width,
                         height: img.height,
                         selectable: false }).scale(scale);
    canvasfabric.clear();
    canvasfabric.add(oImg).renderAll();
    canvasfabric.centerObject(oImg);
  });

  clipImg = fabric.Image.fromURL(imgsrc, function (img) {
    var scale = 1.0;
    if (img.height > (canvasHeight-25) || img.width > (canvasWidth-25)) {
      scale = (canvasHeight-25) / Math.max(img.height, img.width)
    }
    clipImg = img.set({ left: 0,
                         top: 0,
                         angle: 0,
                         width: img.width,
                         height: img.height,
                         selectable: false }).scale(scale);
  });

  imageAdded = true;
});

// IMAGE 6
img6.addEventListener("click", function (e) {
  var imgsrc = img6.src;

  ogImg = fabric.Image.fromURL(imgsrc, function (img) {
    var scale = 1.0;
    if (img.height > (canvasHeight-25) || img.width > (canvasWidth-25)) {
      scale = (canvasHeight-25) / Math.max(img.height, img.width)
    }
    oImg = img.set({ left: 0,
                         top: 0,
                         angle: 0,
                         width: img.width,
                         height: img.height,
                         selectable: false }).scale(scale);
    canvasfabric.clear();
    canvasfabric.add(oImg).renderAll();
    canvasfabric.centerObject(oImg);
  });

  clipImg = fabric.Image.fromURL(imgsrc, function (img) {
    var scale = 1.0;
    if (img.height > (canvasHeight-25) || img.width > (canvasWidth-25)) {
      scale = (canvasHeight-25) / Math.max(img.height, img.width)
    }
    clipImg = img.set({ left: 0,
                         top: 0,
                         angle: 0,
                         width: img.width,
                         height: img.height,
                         selectable: false }).scale(scale);
  });

  imageAdded = true;
});

// IMAGE 7
img7.addEventListener("click", function (e) {
  var imgsrc = img7.src;

  ogImg = fabric.Image.fromURL(imgsrc, function (img) {
    var scale = 1.0;
    if (img.height > (canvasHeight-25) || img.width > (canvasWidth-25)) {
      scale = (canvasHeight-25) / Math.max(img.height, img.width)
    }
    oImg = img.set({ left: 0,
                         top: 0,
                         angle: 0,
                         width: img.width,
                         height: img.height,
                         selectable: false }).scale(scale);
    canvasfabric.clear();
    canvasfabric.add(oImg).renderAll();
    canvasfabric.centerObject(oImg);
  });

  clipImg = fabric.Image.fromURL(imgsrc, function (img) {
    var scale = 1.0;
    if (img.height > (canvasHeight-25) || img.width > (canvasWidth-25)) {
      scale = (canvasHeight-25) / Math.max(img.height, img.width)
    }
    clipImg = img.set({ left: 0,
                         top: 0,
                         angle: 0,
                         width: img.width,
                         height: img.height,
                         selectable: false }).scale(scale);
  });

  imageAdded = true;
});

// IMAGE 8
img8.addEventListener("click", function (e) {
  var imgsrc = img8.src;

  ogImg = fabric.Image.fromURL(imgsrc, function (img) {
    var scale = 1.0;
    if (img.height > (canvasHeight-25) || img.width > (canvasWidth-25)) {
      scale = (canvasHeight-25) / Math.max(img.height, img.width)
    }
    oImg = img.set({ left: 0,
                         top: 0,
                         angle: 0,
                         width: img.width,
                         height: img.height,
                         selectable: false }).scale(scale);
    canvasfabric.clear();
    canvasfabric.add(oImg).renderAll();
    canvasfabric.centerObject(oImg);
  });

  clipImg = fabric.Image.fromURL(imgsrc, function (img) {
    var scale = 1.0;
    if (img.height > (canvasHeight-25) || img.width > (canvasWidth-25)) {
      scale = (canvasHeight-25) / Math.max(img.height, img.width)
    }
    clipImg = img.set({ left: 0,
                         top: 0,
                         angle: 0,
                         width: img.width,
                         height: img.height,
                         selectable: false }).scale(scale);
  });

  imageAdded = true;
});

// IMAGE 9
img9.addEventListener("click", function (e) {
  var imgsrc = img9.src;

  ogImg = fabric.Image.fromURL(imgsrc, function (img) {
    var scale = 1.0;
    if (img.height > (canvasHeight-25) || img.width > (canvasWidth-25)) {
      scale = (canvasHeight-25) / Math.max(img.height, img.width)
    }
    oImg = img.set({ left: 0,
                         top: 0,
                         angle: 0,
                         width: img.width,
                         height: img.height,
                         selectable: false }).scale(scale);
    canvasfabric.clear();
    canvasfabric.add(oImg).renderAll();
    canvasfabric.centerObject(oImg);
  });

  clipImg = fabric.Image.fromURL(imgsrc, function (img) {
    var scale = 1.0;
    if (img.height > (canvasHeight-25) || img.width > (canvasWidth-25)) {
      scale = (canvasHeight-25) / Math.max(img.height, img.width)
    }
    clipImg = img.set({ left: 0,
                         top: 0,
                         angle: 0,
                         width: img.width,
                         height: img.height,
                         selectable: false }).scale(scale);
  });

  imageAdded = true;
});
