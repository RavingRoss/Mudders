<?php
	$connect = mysqli_connect('sql110.epizy.com', 'epiz_32627995', 'kNf1SSO8y6O4J', 'epiz_32627995_trail_data'); //connects us to the database
		
	$reportType = $_POST['reportType'];
	$currentDate = $_POST['currentTime'];
	$currentLat = $_POST['currentLat'];
	$currentLng = $_POST['currentLng'];
	
	$query = "INSERT INTO 'trail_reports' ('type', 'time', 'lat', 'lng') VALUES ('$reportType', '$currentDate', '$currentLat', '$currentLng')"; //what to do in the database
	$result = mysqli_query($connect, $query); //returns something if yadda yadd i cant take it anymore
	
	if($result)
	{
		echo "Report uploaded!";
	}
	else
	{
		echo "Very sad, very sad indeed";
		echo "$reportType";
		echo "$currentDate";
		echo "$currentLat";
		echo "$currentLng";
		echo "Nothing echoing???";
	}
?>

