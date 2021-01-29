// IMAGE 1
document.getElementById('img1').addEventListener("click", function (e) {
  var imgsrc = document.getElementById('img1').src;

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
document.getElementById('img2').addEventListener("click", function (e) {
  var imgsrc = document.getElementById('img2').src;

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
document.getElementById('img3').addEventListener("click", function (e) {
  var imgsrc = document.getElementById('img3').src;

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
document.getElementById('img4').addEventListener("click", function (e) {
  var imgsrc = document.getElementById('img4').src;

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
