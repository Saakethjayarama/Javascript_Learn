<?php

    require_once 'User.php';
    require_once 'UserDao.php';
    require_once 'UserDaoImpl.php';
    require_once 'UserNotFoundException.php';

    //mandatory
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Origin: *");

    // for prefetch
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin");
    
    $method = $_SERVER['REQUEST_METHOD'];
    if($method == 'POST') {
      $data = json_decode(file_get_contents('php://input'), true);

      if(
        isset($data['email']) && 
        isset($data['password']) && 
        isset($data['dbName'])){

        $email = $data['email'];
        $password = $data['password'];
        $dbName = $data['dbName'];

        $user = new User(null, null, null, null, $email, null, $password);
        $udi = new UserDaoImpl();

        try {
          $user = $udi->authenticate($user, $dbName);
          echo json_encode($user->toArray());
          http_response_code(200);
        } catch (UserNotFoundException $unfe) {
          echo json_encode(array (
            "status" => "Username or password is incorrect or not exists"
          ));
          http_response_code(200);
        }
      }
    }
        
?>