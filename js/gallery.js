// IMAGE 1
document.getElementById('img1').addEventListener("click", function (e) {
  ogImg = new fabric.Image(document.getElementById('img1'), {
      top: 0,
      left: 0,
      selectable: false
    });

    clipImg = new fabric.Image(document.getElementById('img1'), {
      top: 0,
      left: 0,
      centerX: "center",
      centerY: "center",
      selectable: false
    });

    imageAdded = true;
    canvasfabric.add(ogImg);
    canvasfabric.centerObject(ogImg);
    canvasfabric.renderAll();
});

// IMAGE 2
document.getElementById('img2').addEventListener("click", function (e) {
  ogImg = new fabric.Image(document.getElementById('img2'), {
      top: 0,
      left: 0,
      selectable: false
    });

    clipImg = new fabric.Image(document.getElementById('img2'), {
      top: 0,
      left: 0,
      centerX: "center",
      centerY: "center",
      selectable: false
    });

    imageAdded = true;
    canvasfabric.add(ogImg);
    canvasfabric.centerObject(ogImg);
    canvasfabric.renderAll();
});

// IMAGE 3
document.getElementById('img3').addEventListener("click", function (e) {
  ogImg = new fabric.Image(document.getElementById('img3'), {
      top: 0,
      left: 0,
      selectable: false
    });

    clipImg = new fabric.Image(document.getElementById('img3'), {
      top: 0,
      left: 0,
      centerX: "center",
      centerY: "center",
      selectable: false
    });

    imageAdded = true;
    canvasfabric.add(ogImg);
    canvasfabric.centerObject(ogImg);
    canvasfabric.renderAll();
});
