<html>

<body>
    <?php
    include('db.php');
    // try {
    //     session_unset();
    // } catch (Exception $e) {
    // }
    // session_start();
    if (isset($_POST['submit'])) {
        $username = mysqli_real_escape_string($con, $_POST['username']);
        $password = mysqli_real_escape_string($con, $_POST['password']);

        $res = mysqli_query($con, "SELECT * from `words_per_min` where `username`='$username'");

        if (mysqli_num_rows($res) > 0) {
            $row = mysqli_fetch_assoc($res);
            $verify = password_verify($password, $row['password']);
            if ($verify == 1) {
                include 'main.html';
            } else {
                echo '<script> alert("Authentication failed\nInvalid credentials."); </script>';
                include('index.html');
            }
        } else {
            echo '<script> alert("Authentication failed\nInvalid username."); </script>';
            include('index.html');
        }
    }
    ?>
</body>

</html>