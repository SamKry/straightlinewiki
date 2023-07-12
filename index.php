<!--This is an example file of a php index. It is by no means ready and shall not be displayed yet.
My intention is to use this instead of the index.html.
I have taken a break for a few weeks because I was on vacation and defenetly lost momentum for the release of this website,
But I doubt that anyone will ever read this note... If anyone doeas, please understand that my life is very stressful at this moment and I just want to make a few commits to start being active again.
I have some great ideas for the new feature.
My first idea will be to actually use this index.php and delete this comment.-->


<!DOCTYPE html>
<html>
<head>
    <title>Straight Line Wiki</title>
    <link rel="stylesheet" type="text/css" href="style.css" media="screen">
</head>
<body>
    <h1>Data from MySQL Table</h1>

    <table>
	<tr>
	    <th>Title</th>
	    <th>Straightliner</th>
	    <th>Posted On</th>
	    <th>Completeness</th>
		<th>Medal</th>
		<th>Burdell Score</th>
		<th>Line Length</th>
		<th>Max Deviation</th>
	</tr>
	<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//IF YOU HAPPEN TO CLONE THIS PROJECT, DON'T FORGET TO CHANGE YOUR ENVIRONMENT VARIABLES.
		$servername = "localhost";
		$username = getenv("DB_USERNAME");
		$password = getenv("DB_PASSWORD");
		$dbname = getenv("DB_DATABASE");

        // Create a connection
        	$conn = new mysqli($servername, $username, $password, $dbname);

        // Check the connection
        	if ($conn->connect_error) {
        	    die("Connection failed: " . $conn->connect_error);
        	}

        // Query to retrieve data from the table
        	$sql = "SELECT * FROM straightlines";
        	$result = $conn->query($sql);

        // Loop through the data and generate table rows
        	if ($result->num_rows > 0) {
        	    while ($row = $result->fetch_assoc()) {
        	        echo "<tr>";
        	        echo "<td>" . $row["Title"] . "</td>";
        	        echo "<td>" . $row["Straightliner"] . "</td>";
        	        echo "<td>" . $row["Posted_On"] . "</td>";
        	        echo "<td>" . $row["Completeness"] . "</td>";
					echo "<td>" . $row["Medal"] . "</td>";
        	        echo "<td>" . $row["Burdell_Score"] . "</td>";
        	        echo "<td>" . $row["Line_Length"] . "</td>";
        	        echo "<td>" . $row["Max_Deviation"] . "</td>";
        	        echo "</tr>";
        	    }
        	} else {
        	    echo "<tr><td colspan='4'>No data found</td></tr>";
        	}
	
        // Close the database connection
	$conn->close();
        ?>


</table>
</body>
</html>

