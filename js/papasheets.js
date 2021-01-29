const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQR-98nB2vEmvZxcR5hyS4adDkqefg6EM4W7nZeGxrPHZPNv41RdXHRXyJSPmW686biVmw8dFL4SQbT/pub?gid=0&single=true&output=csv";

var imageGallery = document.getElementById("div3");
var imageIDs = []

Papa.parse(sheetURL, {
    download: true,
    complete: function(results) {
      console.log(results.data);
      for (var i = 0; i < results.data.length; i++) {
        var newImage = document.createElement("img");
        newImage.id = results.data[i][0];
        imageIDs.push(results.data[i][0]);
        newImage.classList.add("gallery-img");
        newImage.src = results.data[i][1];
        newImage.crossOrigin = "anonymous";
        imageGallery.appendChild(newImage);
      }
    }
   });
