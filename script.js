const x = document.getElementById("demo");
const y = document.getElementById("demo1");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
    
function showPosition(position) {
    let lati = position.coords.latitude; 
    let long = position.coords.longitude;
    let url = "https://www.openstreetmap.org/#map=16/"+ lati + "/" + long;
    x.innerHTML = "<br>Latitude: " + lati + "<br>Longitude: " + long;
    y.innerHTML = url;
    y.setAttribute("href",url);    
}
