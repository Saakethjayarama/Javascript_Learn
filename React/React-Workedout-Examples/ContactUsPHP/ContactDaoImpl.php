<?php

require_once 'Contact.php';
require_once 'ContactDao.php';
require_once 'JdbcUtil.php';

class ContactDaoImpl implements ContactDao {
  function addContact($contact, $dbName) {
    $fname = $contact->getFname();
    $email = $contact->getEmail();
    $phone = $contact->getPhone();
    $message = $contact->getMessage();



    $connection = JdbcUtil::getConnection($dbName);
    $sql = 'insert into contact_us(fname, email, phone_number, message) values (?, ?, ?, ?)';

    $statement = $connection->prepare($sql);
    $statement->bind_param('ssss', $fname, $email, $phone, $message);
    $statement->execute();

    $connection->close();

  }
}

?>