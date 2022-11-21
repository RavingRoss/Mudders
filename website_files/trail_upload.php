<?php
	//establish connection to database
	$connect = mysqli_connect('sql110.epizy.com', 'epiz_32627995', 'kNf1SSO8y6O4J', 'epiz_32627995_trail_data'); //connects us to the database
		if($connect->connect_error)
		{
			die("Cennection failed (im going to kill myself): " . $connect->connect_error);
		}	
		
	//get trail info from form
	$trailName = $_POST['trailName'];
	$centerLat = $_POST['centerLat'];
	$centerLng = $_POST['centerLng'];
	
	//create new trail in trail database
	$query = "INSERT INTO `trail_info` (`name`, `center_lat`, `center_lng`) VALUES ('$trailName', '$centerLat', '$centerLng')";
	if($connect->query($query) === TRUE)
	{
		echo "Trail uploaded successfully";
	}
	else
	{
		echo "Error: " . $query . "<br>" . mysqli_errno($connect);
	}
	

	//get the value of the new trail id
	$query = "SELECT * FROM `trail_info` ORDER BY id DESC LIMIT 1;";
	$result = $connect->query($query);
	/*if(($result = $connect->query($query)) === TRUE)
	{
		echo "Last trail received succesfully";
	}
	else
	{
		echo "Error: " . $query . "<br>" . mysqli_errno($connect);
	}*/
	
	$row = mysqli_fetch_assoc($result);
	$id = $row['id']
	
	//open our file
	$tmpName = $_FILES['trail_file']['tmp_name'];
	$handle = fopen($tmpName, 'r');
	
	//upload coordinates from csv file to coordinate database
	while(($data = fgetcsv($handle, 1000, ",")) !== FALSE)
	{
		$query = "INSERT INTO `trail_coordinates` (`trail_id`, `lat`, `lng`) VALUES ('5', '$data[0]', '$data[1]')";
		if($connect->query($query) === TRUE)
		{
			echo "Report uploaded succesfully";
		}
		else
		{
			echo "Error: " . $query . "<br>" . mysqli_errno($connect);
		}
	}
	
	
	fclose($handle);