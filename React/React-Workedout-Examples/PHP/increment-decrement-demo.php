<?php

    //mandatory
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Origin: *");

    // for prefetch
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin");
    
    $method = $_SERVER['REQUEST_METHOD'];
    if($method == 'OPTIONS'){
        http_response_code(200);
    }else
    if($method == 'POST') {
        $data = json_decode(file_get_contents("php://input"), true);
        
        $mode = $data['mode'];
        $val = $data['val'];
        $result = null;
        
        if($mode == 'INC') {
            $result = $val + 1;
        }else {
            $result = $val - 1;
        }

        echo json_encode(array(
            "result"=> $result
        ));
        http_response_code(200);
    }else {
        echo json_encode(array("message" => "method not allowed"));
        http_response_code(405);
    }
    
?>