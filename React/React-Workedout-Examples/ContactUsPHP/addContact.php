<?php

    require_once 'Contact.php';
    require_once 'ContactDao.php';
    require_once 'ContactDaoImpl.php';

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

      if(isset($data['fname']) && isset($data['email']) && isset($data['phone']) && isset($data['message']) && isset($data['dbName'])){

        $fname = $data['fname'];
        $email = $data['email'];
        $phone = $data['phone'];
        $message = $data['message'];
        $dbName = $data['dbName'];

        $contact = new Contact(null, $fname, $email, $phone, $message);
        $cdi = new ContactDaoImpl();
        $cdi->addContact($contact, $dbName);


        echo json_encode(array(
            "status" => 'Done'
        ));
        http_response_code(200);
      }
    }
        
?>