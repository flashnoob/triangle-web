// to get current year
function getYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/

function myMap() {
    const mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    const map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// function addDarkmodeWidget() {
//     new Darkmode().showWidget();
//   }
//   window.addEventListener('load', addDarkmodeWidget);