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
                case 'BA':
                    $loc = 'Baarish.mp3';
                    break;
                case 'BR':
                    $loc = 'Breakup.mp3';
                    break;
                case 'BU':
                    $loc = 'Bulleya.mp3';
                    break;
                case 'IK':
                    $loc = 'Ikvaari.mp3';
                    break;
                case 'SN':
                    $loc = 'Sanam.mp3';
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