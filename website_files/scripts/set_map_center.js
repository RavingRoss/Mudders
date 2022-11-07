async function setMapCenter()
{
	var trail_data = await getData("scripts/trail_info.php");
	console.log("setMapCenter is being called");
	
	var trail_name = document.getElementById("trail_search_input").value;
	console.log(trail_name);
	
	var cont = 1;
	var trail_id = 0;
	
	//should get the id of our trail
	while(cont == 1)
	{
		if(trail_id == Object.keys(trail_data).length)
		{
			cont = 0;
		}
		else if(trail_name === trail_data[trail_id].name)
		{
			cont = 0;
		}
		else
		{
			trail_id++;
		}
	}
	
	//let newCoord = new google.maps.LatLng(trail_data[trail_id].lat, trail_data[trail_id].lng);
	getMap().panTo(new google.maps.LatLng(trail_data[trail_id].center_lat, trail_data[trail_id].center_lng));
}