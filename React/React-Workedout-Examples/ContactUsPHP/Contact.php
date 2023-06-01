<?php

class Contact {

  private $id;
  private $fname;
  private $email;
  private $phone;
  private $message;

  function __construct($id, $fname, $email, $phone, $message) {
    $this->id = $id;
    $this->fname = $fname;
    $this->email = $email;
    $this->phone = $phone;
    $this->message = $message;
  }


  function getId() {
    return $this->id;
  }
  function getFname() {
    return $this->fname;
  }
  function getEmail() {
    return $this->email;
  }
  function getPhone() {
    return $this->phone;
  }
  function getMessage() {
    return $this->message;
  }


  function setId($id) {
    $this->id = $id;
  }
  function setFname($fname) {
    $this->fname = $fname;
  }
  function setEmail($email) {
    $this->email = $email;
  }
  function setPhone($phone) {
    $this->phone = $phone;
  }
  function setMessage($message) {
    $this->message = $message;
  }
}

?>