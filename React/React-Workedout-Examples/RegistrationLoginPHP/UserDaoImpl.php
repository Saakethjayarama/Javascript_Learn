<?php

  require_once 'User.php';
  require_once 'UserDao.php';
  require_once 'JdbcUtil.php';
  require_once 'UserNotFoundException.php';

  class UserDaoImpl implements UserDao {
    function register($user, $dbName){
      $fname = $user->getFname();
      $gender = $user->getGender();
      $age = $user->getAge();
      $email = $user->getEmail();
      $phone = $user->getPhone();
      $password = $user->getPassword();


      $connection = JdbcUtil::getConnection($dbName);

      $sql = 'insert into users (fname, gender, age, email, phone, password) values (?,?,?,?,?,?)';
      $statement = $connection->prepare($sql);
      $statement->bind_param('ssisss', $fname, $gender, $age, $email, $phone, $password);
      $statement->execute();

      $user->setId($connection->insert_id);
      $connection->close();

      return $user;
    }

    function authenticate($user, $dbName){
      $email = $user->getEmail();
      $password = $user->getPassword();

      $connection = JdbcUtil::getConnection($dbName);

      $sql = 'select * from users where email = ? and password = ?';
      $statement = $connection->prepare($sql);
      $statement->bind_param('ss', $email, $password);

      $user = null;

      if($statement->execute()) {
        $statement->bind_result($id, $fname, $gender, $age, $email, $phone, $password);
        if($statement->fetch()) {
          $user = new User($id, $fname, $gender, $age, $email, $phone, $password);
        } else {
          throw new UserNotFoundException();
        }
      }

      $connection->close();
      return $user;
    }
  }

?>