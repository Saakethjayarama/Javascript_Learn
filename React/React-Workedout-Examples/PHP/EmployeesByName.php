<?php

    require_once 'EmployeeDaoImpl.php';

    $edi = new EmployeeDaoImpl();    

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
        if(isset($_GET['name'])){

            $name = $_GET['name'];
            $employees = [];
            foreach($edi->employeesByName($name) as $employee){
                $employees[] = $employee->toArray();
            }

            echo json_encode($employees);
            http_response_code(200);

        }else {
            echo json_encode(array("message"=>"not acceptable"));
            http_response_code(406);
        }
    }else {
        echo json_encode(array("message" => "method not allowed"));
        http_response_code(405);
    }

?>