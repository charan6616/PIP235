<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "demo235";

// Create a new connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$Name = $_POST['name'];
$Pride = $_POST['priden'];

// Prepare the SQL statement
$sql = "INSERT INTO pride (`name`, `pride`) VALUES ('$Name','$Pride')";

// Use $conn instead of $con for consistency
$rs = mysqli_query($conn, $sql);

if ($rs) {
    echo "Contact Records Inserted";
} else {
    echo "Error: " . $conn->error;
}

// Close the connection
$conn->close();
?>
