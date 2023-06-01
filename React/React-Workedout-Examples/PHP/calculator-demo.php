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
        $data = json_decode(file_get_contents('php://input'), true);

        if(isset($data['op1']) && isset($data['op2']) && isset($data['op'])){
            $result = null;

            $a = $data['op1'];
            $b = $data['op2'];

            switch ($data['op']) {
                case '+':
                    $result = $a + $b;
                break;
                case '-':
                    $result = $a - $b;
                break;
                case '*':
                    $result = $a * $b;
                break;
                case '/':
                    $result = $a / $b;
                break;
                default:
                    $result = $a % $b;
            }


            echo json_encode(array(
                "result" => $a.$data['op'].$b.'='.$result
            ));
            http_response_code(200);
        }
        http_response_code(200);
    }else {
        echo json_encode(array("message" => "method not allowed"));
        http_response_code(405);
    }
?>