<?php

    class Student {
        private $usn;
        private $name;
        private $gender;
        private $age;
        private $qualificationCode;
        private $city;


        function __construct($usn, $name, $gender, $age, $qualificationCode, $city){
            $this->usn = $usn;
            $this->name = $name;
            $this->gender = $gender;
            $this->age = $age;
            $this->qualificationCode = $qualificationCode;
            $this->city = $city;
        }

        function getUsn() {
            return $this->usn;
        }
        function getName() {
            return $this->name;
        }
        function getGender() {
            return $this->gender;
        }
        function getAge() {
            return $this->age;
        }
        function getQualificationCode() {
            return $this->qualificationCode;
        }
        function getCity() {
            return $this->city;
        }


        function setUsn($usn) {
            $this->usn = $usn;
        }
        function setName($name) {
            $this->name = $name;
        }
        function setGender($gender) {
            $this->gender = $gender;
        }
        function setAge($age) {
            $this->age = $age;
        }
        function setQualificationCode($qualificationCode) {
            $this->qualificationCode = $qualificationCode;
        }
        function setCity($city) {
            $this->city = $city;
        }

        function toArray() {
            return array(
                "usn" => $this->usn,
                "name" => $this->name,
                "gender" => $this->gender,
                "age" => $this->age,
                "qualificationCode" => $this->qualificationCode,
                "city" => $this->city
            );
        }

    }

?>