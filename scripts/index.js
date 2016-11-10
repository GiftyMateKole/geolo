
(function() {
document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	
function onDeviceReady() {
		document.getElementById("geo").onclick = function() {
navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 30000 });
		}
	};
		
function onSuccess(position) {
var lat=position.coords.latitude;
var lang=position.coords.longitude;

//Google Maps

}

function onError(error) {
alert('code: ' + error.code + '\n' +
'message: ' + error.message + '\n');
}


})();