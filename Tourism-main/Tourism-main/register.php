<?php
    include("demo.php");
    if(isset($_POST["ok"])){
        $name=$_POST["firstname"];
        $lastname=$_POST["lastname"];
        $age=$_POST["age"];
        $email=$_POST["email"];
        $password=$_POST["password"];
        $repassword=$_POST["repassword"];
        if($password!=$repassword){
            echo "error";
        }
    }
?>