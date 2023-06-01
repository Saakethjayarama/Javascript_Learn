<?php

interface UserDao {
  function register($user, $dbName);
  function authenticate($user, $dbName);
}

?>