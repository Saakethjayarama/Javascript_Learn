<?php 
  require_once 'UserDaoImpl.php';
  require_once 'UserNotFoundException.php';

  $udi = new UserDaoImpl();

  $user = new User(null, 'Saaketh', 'M', 21, 'saakethaj@gmail.com', '9663971485', 'Saaketh');
  $id = $udi->register($user, 'institution');
  echo $id;

  try {
    $user = $udi->authenticate(new User(null, null, null, null, 'saakethaj@gmail.com', null, 'Saaketh'), 'institution');
    print_r($user);
  }catch (UserNotFoundException $unfe) {
    echo 'UserNotFound';
  }

?>