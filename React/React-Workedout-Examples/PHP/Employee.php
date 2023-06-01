<?php
    class Employee {

        private $employeeId;
        private $name;
        private $gender;
        private $dateOfBirth;
        private $dateOfJoining;
        private $deptNo;
        private $designationId;
        private $managerId;
        private $emailId;

        // Constructor

        function __construct(
            $employeeId,
            $name,
            $gender,
            $dateOfBirth,
            $dateOfJoining,
            $deptNo,
            $designationId,
            $managerId,
            $emailId
        ) {
            $this->employeeId = $employeeId;
            $this->name = $name;
            $this->gender = $gender;
            $this->dateOfBirth = $dateOfBirth;
            $this->deptNo = $deptNo;
            $this->designationId = $designationId;
            $this->managerId = $managerId;
            $this->emailId = $emailId;
        }

        // Getters

        function getEmployeeId() {
            return $this->employeeId;
        }
        function getName(){
            return $this->name;
        }
        function getGender(){
            return $this->gender;
        }
        function getDateOfBirth() {
            return $this->dateOfBirth;
        }
        function getDeptNo() {
            return $this->deptNo;
        }
        function getDesignationId() {
            return $this->designationId;
        }
        function getManagerId() {
            return $this->managerId;
        }
        function getEmailId(){
            return $this->emailId;
        }

        // Setters

        function setEmployeeId($employeeId) {
            $this->employeeId = $employeeId;
        }
        function setName($name) {
            $this->name = $name;
        }
        function setGender($gender) {
            $this->gender = $gender;
        }
        function setDateOfBirth($dateOfBirth) {
            $this->dateOfBirth = $dateOfBirth;
        }
        function setDeptNo($deptNo) {
            $this->deptNo = $deptNo;
        }
        function setDesignationId($designationId) {
            $this->designationId = $designationId;
        }
        function setManagerId($managerId) {
            $this->managerId = $managerId;
        }
        function setEmailId($emailId) {
            $this->emailId = $emailId;
        }

        // To Array
        function toArray() {
            return array(
                "employeeId" => $this->employeeId,
                "name" => $this->name,
                "gender" => $this->gender,
                "dateOfBirth" => $this->dateOfBirth,
                "deptNo" => $this->deptNo,
                "designationId" => $this->designationId,
                "managerId" => $this->managerId,
                "email" => $this->emailId
            );
        }

    }

?>