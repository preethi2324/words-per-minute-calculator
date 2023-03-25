<html>

<body>
    <?php
    include('db.php');
    if (isset($_POST['submit'])) {
        $email = $_POST['email'];
        $username = $_POST['username'];
        $password = $_POST['password'];
        if (($email === "") or ($password === "")) {
            echo '<script> alert("Fields cannot be empty\nTry again!"); </script>';
            include('register.html');
        } else {
            if (mysqli_num_rows(mysqli_query($con, "SELECT * from `words_per_min` where username='$username'")) > 0) {
                echo '<script> alert("User ID already exists"); </script>';
                include('index.html');
            } else {
                $password = password_hash($password, PASSWORD_DEFAULT);
                mysqli_query($con, "INSERT into `words_per_min`(`username`,`email`,`password`) values('$username','$email','$password')");
                echo '<script> alert("User Registered!!"); </script>';
                include('index.html');
            }
        }
    }
    ?>
</body>

</html>