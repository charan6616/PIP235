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

$username = $_POST['userName'];
$mobile = $_POST['mobileNumber'];
$date=$_POST['bookingDate'];
$quantity=$_POST['numberofPersons'];
$nights=$_POST['nights'];
$fname=$_POST['paymentUserName'];
$email=$_POST['paymentUserEmail'];
$phno=$_POST['paymentUserPhone'];
$cardnumber=$_POST['cardNumber'];
$nameoncard=$_POST['cardName'];

// Prepare the SQL statement
$sql = "INSERT INTO hotelbooking (`Name`, `Mobile_Number`,`Date`,`people_number`,`nights_number`,`email`,`phno`,`cardnumber`,`nameoncard`) VALUES ('$username','$mobile','$date','$quantity','$nights','$fname','$email','$phno','$cardnumber','$nameoncard')";

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
