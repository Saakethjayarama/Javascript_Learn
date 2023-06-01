<?php
    interface EmployeeDao{
        function getAllEmployees();
        function employeesByName($name);
        function employeesByGender($gender);
        function employeesByDepartments($deptId);
    }
?>