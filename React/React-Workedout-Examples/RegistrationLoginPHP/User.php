<?php

class User {

  private $id;
  private $fname;
  private $gender;
  private $age;
  private $email;
  private $phone;
  private $password;


  function __construct(
    $id,
    $fname,
    $gender,
    $age,
    $email,
    $phone,
    $password
  ) {
    $this->id = $id;
    $this->fname = $fname;
    $this->gender = $gender;
    $this->age = $age;
    $this->email = $email;
    $this->phone = $phone;
    $this->password = $password;
  }

  function getId() {
    return $this->id;
  }
  function getFname() {
    return $this->fname;
  }
  function getGender() {
    return $this->gender;
  }
  function getAge() {
    return $this->age;
  }
  function getEmail() {
    return $this->email;
  }
  function getPhone() {
    return $this->phone;
  }
  function getPassword() {
    return $this->password;
  }
  

  function setId($id) {
    $this->id = $id;
  }
  function setFname($fname) {
    $this->fname = $fname;
  }
  function setGender($gender) {
    $this->gender = $gender;
  }
  function setAge($age) {
    $this->age = $age;
  }
  function setEmail($email) {
    $this->email = $email;
  }
  function setPhone($phone) {
    $this->phone = $phone;
  }
  function setPassword($password) {
    $this->password = $password;
  }

  function toArray() {
    return array(
      "id" => $this->id,
      "fname" => $this->fname,
      "gender" => $this->gender,
      "age" => $this->age,
      "email" => $this->email,
      "phone" => $this->phone,
      "password" => $this->password
    );
  }

}

?>