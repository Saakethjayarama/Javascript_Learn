<?php

    //mandatory
    header("Content-Type: text/html; charset=UTF-8");
    header("Access-Control-Allow-Origin: *");

    // for prefetch
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin");
    
    
    $method = $_SERVER['REQUEST_METHOD'];

    // required only deployed
    if($method == 'OPTIONS'){
        http_response_code(200);
    }else
    if($method == 'GET') {
        if(isset($_GET['number'])){
            $n = $_GET['number'];

            $result = '<table border = "1">';
           

            $data = [];
            for($i = 1; $i <= 10; $i++){
                // $data[] = [$n, $i, $n*$i];
                $result.='<tr>
                    <td>'.$n.'</td>
                    <td>x</td>
                    <td>'.$i.'</td>
                    <td>=</td>
                    <td>'.$n*$i.'</td>
                </tr>';
            }

            $result.='</table>';

            echo $result;
            http_response_code(200);
        }
    }else {
        echo json_encode(array("message" => "method not allowed"));
        http_response_code(405);
    }
?>