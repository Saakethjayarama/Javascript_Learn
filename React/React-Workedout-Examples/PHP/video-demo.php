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
    if($method == 'GET') {
        if(isset($_GET['id'])){
            $id = $_GET['id'];

            $loc = '';

            switch ($id) {
                case 'A':
                    $loc = 'a.mp4';
                    break;
                case 'B':
                    $loc = 'b.mp4';
                    break;
                case 'C':
                    $loc = 'c.mp4';
                    break;
                case 'D':
                    $loc = 'd.mp4';
                    break;
                case 'E':
                    $loc = 'e.mp4';
                    break;
                default:
                    break;
            }
            echo json_encode(array(
                "loc" => $loc
            ));
        }
    }else {
        echo json_encode(array("message" => "method not allowed"));
        http_response_code(405);
    }

?>