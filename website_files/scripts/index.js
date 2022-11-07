let map;
var global_map;

//get our report data
async function getData(script)
{
	const response = await fetch(script);
	const return_data = await response.json();
	console.log(return_data);
	return return_data;
}

function getMap()
{
	return global_map;
}
	
async function initMap()
{
	console.log("I think this is working");
	const map = new google.maps.Map
	(
		document.getElementById("map"),
		{
			zoom: 10, 
			center: new google.maps.LatLng(29.2108, -81.0228)
		}
	)
	
	global_map = map;
	
	


	var report_data = await getData('scripts/report_data.php');
	var trail_info = await getData('scripts/trail_info.php');
	var trail_coordinates = await getData('scripts/trail_coordinates.php');
	
	//output reports
	for(let i=0; i<Object.keys(report_data).length; i++)
	{
		new google.maps.Marker(
		{
			position: new google.maps.LatLng(report_data[i].lat, report_data[i].lng),
			map: map,
		});	
	}
 
	//output trails
	for(let i=0; i<Object.keys(trail_info).length; i++)
	{
		var loop = 1;
		var trail_index_initial = 0;
		var trail_coordinate_size = Object.keys(trail_coordinates).length;
		var path = [];
		
		//loop through coordinate data and find initial index
		while(loop)
		{
			if(trail_coordinates[trail_index_initial].trail_id == trail_info[i].id)
			{
				loop = 0;
				console.log(trail_index_initial);
			}
			else
			{
				loop = 1;
				trail_index_initial++;
			}
		}
		
		loop = 1;
		
		//we have our starting index, loop through until we have all of our coordinates
		while(
			trail_coordinates[trail_index_initial].trail_id == trail_info[i].id 
			&& loop
			)
		{
			path.push(new google.maps.LatLng(
				trail_coordinates[trail_index_initial].lat, 
				trail_coordinates[trail_index_initial].lng
											));
			trail_index_initial++;
			
			if(trail_index_initial == trail_coordinate_size)//check if where gonna hit the end of the array
			{
				loop = 0; //cancel our loop
				trail_index_initial--; //set our index back inbounds
			}
		}
		
		//we have our path, now create a polyline
		new google.maps.Polyline(
		{
			strokeColor: "#FF0000",
            strokeOpacity: 1.000000,
            strokeWeight: 3,
			map: map,
			path: path
		});
		
	}

}


window.initMap = initMap;

var currentTime = new Date();
console.log(currentTime);

console.log(getMap());