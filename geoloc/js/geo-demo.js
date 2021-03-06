// geo-demo.js 
// geolocation demo script 
// completed script: https://gist.github.com/drstearns/aa07f2b583e0335eefb8

//updateMesage()
// updates the message p tag above the map
// parameters:
//  - msg (string)  message to display
//
function updateMessage(msg) {
    $('.map-message').html(msg);
} //updateMessage()

//onGeoSuccess()
// called with sucessfully-obtained geolocation
// parameters:
//  - position (Position object)
//      position.coords.latitude (number)
//      position.coords.longitude (number)
//      position.coords.accuracy (number of meters)
function onGeoSuccess(position) {
    //create a new Google LatLng object to represent
    //our current latitude and longitude

    //create a simple object for the map options

    //create a new Google Map object
    //passing a reference to the map container div
    //and our map options

    //now add a marker on the map showing our lat/long

    //finally update our message text
    updateMessage("Here is where you are (accuracy within " 
        + position.coords.accuracy + " meters)");

} //onGeoSuccess()

//onGeoError()
// called when geolocation produces an error
// parameters:
//  - err (PositionError object)
//      err.code (number)
//      err.message (string)
function onGeoError(err) {
    updateMessage("Sorry, I was unable to obtain your current position " + 
        "for the following reason: " + err.message);
} //onGeoError()


//docment ready function
$(function(){
    //make sure geolocation is available and if so
    //get our current position

}); //document ready
