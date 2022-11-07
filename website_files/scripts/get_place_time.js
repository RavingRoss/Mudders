
function getPlaceTime()
{
	console.log("This should hopefully appear when I hit the submit button");
	
	//geolocation function that gets our current location
	getPos();
	document.getElementById("current_time").value = new Date().toISOString();
	
	console.log("right before submit");
	setTimeout(document.getElementById("report_upload").submit(), 1500);
}

function getPos()
{
		console.log("This should hopefully appear when if geolocation is working");
		navigator.geolocation.getCurrentPosition(setPos);
}

function setPos(pos)
{
	console.log("this should appear if setPos is working");
	console.log(pos);
	const loc = pos.coords;
	document.getElementById("current_lat").value = loc.latitude;
	document.getElementById("current_lng").value = loc.longitude;
	
}