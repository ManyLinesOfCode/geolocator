let outputBox = document.getElementById("outputBox");

function grabCoordinates() {
     if (navigator.geolocation = true) {
          navigator.geolocation.getCurrentPosition(showCoords);
     } else {
          outputBox.innerHTML = "It seems that your browser does not support geoloation. You may want to update it.";
     }
}

function showCoords(location) {
     outputBox.innerHTML = "Your location is " + location.coords.latitude + ", " + location.coords.longditude + ".";
}