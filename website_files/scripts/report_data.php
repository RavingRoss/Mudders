<?php
	$connect = mysqli_connect('sql110.epizy.com', 'epiz_32627995', 'kNf1SSO8y6O4J', 'epiz_32627995_trail_data'); //connects us to the database
	$query = 'SELECT * FROM trail_reports'; //tells the database what data we want
	$result = mysqli_query($connect, $query); //returns the requested data

	$report_data = array();
	
	while($row = mysqli_fetch_assoc($result))
	{
		$report_data[] = $row; //format data
	}
	
	header('Content-Type: application/json');
	echo json_encode($report_data); //returns our data in json format
