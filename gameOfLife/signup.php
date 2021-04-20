
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
     <link rel="stylesheet" type="text/css" href="login.css?<?php echo time(); ?>" />
  </head>
  <body>

    <div id="circle" >
    
      
    <div class="main">



    <form action = "http://codd.cs.gsu.edu/~jdebroux1/WP/PW/3/signup-submit.php" method = "post" >
        <!--Form containing the fields: username and password -->
        <fieldset class = "column">
            <legend>New User:</legend>

                <label class = "heading" for = "username">Username: </label>
                <input type = "text" name = "username" size = "16"> <br> <br>

                <label class = "heading" for = "password">Password: </label>
                <input type = "password" name = "password" size = "16"> <br> <br>

            <!--Submit button -->
            <input type = "submit" name = "submit" value = "signup">
        </fieldset>
    </form>

</body>
</html>

<?php
    if(isset($_POST['submit'])){
        $username = $_POST['username'];
        $password = $_POST['password'];

        $file = file_get_contents("users.txt");
        $string = "$username||$password";

        if(!strstr($file, "$string")){
            $myFile = "users.txt";
            $fh = fopen($myFile, 'a') or die("can't open file");
            $stringData = "$username||$password";
            $newLine = $stringData . "\n";
            fwrite($fh, $newLine);
            echo "Signup completed successfully";
            fclose($fh);
            echo <<< ENDPAGE
            <!DOCTYPE html>
            <html>
              <head>
              </head>
            </html>
            <body>
         
            </body>
            ENDPAGE;
        }else{
            echo "Username already in use";
        }
    }
?>
    </div>
  </div>
</div>
  </body>
</html>
