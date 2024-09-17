<?php
    include("demo.php");
    if(isset($_POST["done"])){
        $name=$_POST["name"];
        $age=$_POST["age"];
        $sql = "INSERT INTO booking (Name, Age) VALUES ('$name', $age)";
        if ($conn->query($sql) === TRUE) {
            echo "New booking has been added successfully!";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
$conn->close();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Booking Confirmation</title>
</head>
<body>
    <form action="home.php" method="POST">
        <h1>enter your details</h1>
        <input type="text" placeholder="name" name="name">
        <input type="number" placeholder="age" name="age">
        <input type="submit" value="submit" name="done">
    </form>
</body>
</html>