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
        if(isset($_GET['number'])){
            $result = '';
            switch ($_GET['number']) {
                case '0':
                    $result = 'Zero';
                    break;
                case '1':
                    $result = 'One';
                    break;
                case '2':
                    $result = 'Two';
                    break;
                case '3':
                    $result = 'Three';
                    break;
                case '4':
                    $result = 'Four';
                    break;
                case '5':
                    $result = 'Five';
                    break;
                case '6':
                    $result = 'Six';
                    break;
                case '7':
                    $result = 'Seven';
                    break;
                case '8':
                    $result = 'Eight';
                    break;
                case '9':
                    $result = 'Nine';
                    break;
                case '10':
                    $result = 'Ten';
                    break;
                default:
                    $result = "I'm sorry I don't recognise it";
            }
            echo json_encode(
                array(
                    "result" => $result
                )
                );
        }
        http_response_code(200);
    }else {
        echo json_encode(array("message" => "method not allowed"));
        http_response_code(405);
    }
?>