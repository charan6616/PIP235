<?php
    if(isset($_POST)){
        $data = file_get_contents("php://input");
        $user = json_decode($data,true);
        $CD = $user["cardDetails"];
        $date = $user["bookingDate"];
        $type = $user["bookingType"];
        $cdname = $CD["cardName"];
        $cdnumber = $CD["cardNumber"];
        $cvv = $CD["cvv"];
        $expdate = $CD["expiryDate"];
        $dest = $user["destination"];
        $htname = $user["hotelName"];
        $mbnumber = $user["mobileNumber"];
        $nights = $user["nights"];
        $nps = $user["numberOfPersons"];
        $pmethod = $user["paymentMethod"];
        $pemail = $user["paymentUserEmail"];
        $pname = $user["paymentUserName"];
        $pphone = $user["paymentUserPhone"];
        $pnight = $user["pricePerNight"];
        $uname = $user["userName"];
        echo $cdnumber;
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "demo235";
        $conn = new mysqli($servername,$username,$password,$dbname);

        if ($conn->connect_error) {
            echo json_encode(['success' => false, 'error' => 'Database connection failed']);
            exit();
        }
    
        $stmt = $conn->prepare("INSERT INTO alldet (date, type, cardname, cardnumber, cvv, expirydate, destination, hotelname, mobilenumber, nights, persons, paymentmethod, paymentemail, paymentname, paymentphone, price, username) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param(
            "sssiisssiiisssiis",
            $date,
            $type,
            $cdname,
            $cdnumber,
            $cvv,
            $expdate,
            $dest,
            $htname,
            $mbnumber,
            $nights,
            $nps,
            $pmethod,
            $pemail,
            $pname,
            $pphone,
            $pnight,
            $uname
        );
    
        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Data saved successfully']);
        } else {
            echo json_encode(['success' => false, 'error' => $stmt->error]);
        }
    
        $stmt->close();
        $conn->close();
    } else {
        echo json_encode(['success' => false, 'error' => 'No data received']);
    }