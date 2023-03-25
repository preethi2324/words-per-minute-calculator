<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Connecting to the Database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "words_per_min";

    // Create a connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Die if connection was not successful
    if (!$conn) {
        die("Sorry we failed to connect: " . mysqli_connect_error());
    } else {
        // Submit these to a database
        // Sql query to be executed 
        $sql = "INSERT INTO `subscribe` (`email`,`message`) VALUES ('$email','$message')";
        $result = mysqli_query($conn, $sql);
        if ($email === '' or $message == '') {
            echo '<script> alert("Given fields cannot be empty"); </script>';
            include('subscribe.html');
        } else {
            if ($result) {
                echo '<script> alert("Sucess! You have been subscribed to our newsletter"); </script>';
                include('subscribe.html');
                //     echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
                //   <strong>Success!</strong> Your have been subscribed to our newsletter!
                //   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                //     <span aria-hidden="true">×</span>
                //   </button>
                // </div>';
            } else {
                // echo "The record was not inserted successfully because of this error ---> ". mysqli_error($conn);
                echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Error!</strong> We are facing some technical issue and your entry ws not submitted successfully! We regret the inconvinience caused!
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>';
            }
        }
    }

}
?>