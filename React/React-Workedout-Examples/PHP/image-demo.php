<?php
    // AJ -> Ajanta
    // GL -> Golgumbaz
    // HP -> Hampi
    // LB -> Lalbagh
    // MP -> mysore palace
    // TM -> tajmahal
    // VS -> Vidhanasoudha

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
                case 'AJ':
                    $loc = 'ajanta.jpg';
                    break;
                case 'GL':
                    $loc = 'golgumbaz.jpg';
                    break;
                case 'HP':
                    $loc = 'hampi.jpg';
                    break;
                case 'LB':
                    $loc = 'lalbagh.jpg';
                    break;
                case 'MP':
                    $loc = 'mysorepalace.jpg';
                    break;
                case 'TM':
                    $loc = 'tajmahal.jpg';
                    break;
                case 'VS':
                    $loc = 'vidhanasoudha.jpg';
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