<?php
	$connect = mysqli_connect('sql110.epizy.com', 'epiz_32627995', 'kNf1SSO8y6O4J', 'epiz_32627995_trail_data'); //connects us to the database
	$query = 'SELECT * FROM trail_coordinates'; //tells the database what data we want
	$result = mysqli_query($connect, $query); //returns the requested data

	$trail_coordinates = array();
	
	while($row = mysqli_fetch_assoc($result))
	{
		$trail_coordinates[] = $row; //format data
	}
	
	header('Content-Type: application/json');
	echo json_encode($trail_coordinates); //returns our data in json format
