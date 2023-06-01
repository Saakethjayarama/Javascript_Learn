<?php

    require_once 'User.php';
    require_once 'UserDao.php';
    require_once 'UserDaoImpl.php';

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
        isset($data['fname']) && 
        isset($data['gender']) && 
        isset($data['age']) && 
        isset($data['email']) && 
        isset($data['phone']) && 
        isset($data['password']) && 
        isset($data['dbName'])){

        $fname = $data['fname'];
        $gender = $data['gender'];
        $age = $data['age'];
        $email = $data['email'];
        $phone = $data['phone'];
        $password = $data['password'];
        $dbName = $data['dbName'];

        $user = new User(null, $fname, $gender, $age, $email, $phone, $password);
        $udi = new UserDaoImpl();
        $user = $udi->register($user, $dbName);
        
        echo json_encode($user->toArray());
        http_response_code(200);

      }
    }
        
?>