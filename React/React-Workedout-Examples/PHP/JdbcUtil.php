<?php

function getConnection($dbName) {
    $host = "localhost:3306";
    $userName = 'root';
    $password = '';

    return mysqli_connect($host, $userName, $password, $dbName);
}


?>