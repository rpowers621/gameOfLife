
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" type="text/css" href="login.css?<?php echo time(); ?>" />
 </head>
  </head>
  <body>
    
    
    <div class="main">

          <form action = "login.php" method = "post">
          <!--Form containing the the fields: username, password-->
              <fieldset class = column>
                  <legend>Login:</legend>


                      <label class = "heading" for = "username">Username: </label>
                      <input type = "text" name = "username" size = "16"> <br> <br>

                      <label class = "heading" for = "password">Password: </label>
                      <input type = "password" name = "password" size = "16"> <br> <br>

            <!--Submit button-->
            <input name="submit" type="submit" value="login">
        </fieldset>
    </form>

      <?php
          session_start();
          if(isset($_POST['submit'])){
              $username = $_POST['username'];
              $password = $_POST['password'];

              $file = file_get_contents("users.txt");
              if(!strstr($file, "$username||$password")){
                  echo "Invalid username or password";
              }else{
                  $_SESSION['user'] = $username;
                  $_SESSION['logged'] = "yes";

                  echo <<< ENDPAGE
                  <!DOCTYPE html>
                  <html>
                    <head>
                    </head>
                  </html>
                  <body>
                  </body>
                  ENDPAGE;
              }
          }
      ?>
        </div>
      </div>
    </div>
  </body>
</html>
