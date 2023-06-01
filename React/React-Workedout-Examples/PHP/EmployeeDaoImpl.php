<?php
    require_once 'JdbcUtil.php';
    require_once 'Employee.php';
    require_once 'EmployeeDao.php';

    class EmployeeDaoImpl implements EmployeeDao{
        function getAllEmployees(){
            $connection = getConnection('organization');

            $sql = 'select * from employees';
            $resultSet = $connection->query($sql);

            $employees = [];

            if($resultSet->num_rows> 0){
                while($row = $resultSet->fetch_assoc()){
                    $employees[] = new Employee(
                        $row['employee_id'],
                        $row['name'],
                        $row['gender'],
                        $row['date_of_birth'],
                        $row['date_of_joining'],
                        $row['dept_no'],
                        $row['designation_id'],
                        $row['manager_id'],
                        $row['email_id']
                    );
                }
            }

            $connection->close();
            return $employees;
        }
        
        function employeesByName($name){
            $connection = getConnection('organization');

            $sql = "select * from employees where name like '%".$name."%' ";
            $resultSet = $connection->query($sql);

            $employees = [];
            if($resultSet->num_rows > 0){
                while($row = $resultSet->fetch_assoc()){
                    $employees[] = new Employee(
                        $row['employee_id'],
                        $row['name'],
                        $row['gender'],
                        $row['date_of_birth'],
                        $row['date_of_joining'],
                        $row['dept_no'],
                        $row['designation_id'],
                        $row['manager_id'],
                        $row['email_id']
                    );                 
                }
            }

            $connection->close();
            return $employees;
        }
        
        function employeesByGender($gender){
            $connection = getConnection('organization');

            $sql = 'select * from employees where gender = ?';
            $statement = $connection->prepare($sql);
            $statement->bind_param('s', $gender);


            $employees = [];
            if($statement->execute()){
                $statement->bind_result($employeeId, $name, $gender, $dateOfBirth, $dateOfJoining, $deptNo, $designationId, $managerId, $emailId);
                while($statement->fetch()){
                    $employees[] = new Employee($employeeId, $name, $gender, $dateOfBirth, $dateOfJoining, $deptNo, $designationId, $managerId, $emailId);
                }
            }

            $connection->close();
            return $employees;
        }
        
        function employeesByDepartments($deptId){
            $connection = getConnection('organization');

            $sql = 'select * from employees where dept_no = ?';
            $statement = $connection->prepare($sql);
            $statement->bind_param('i', $deptId);


            $employees = [];
            if($statement->execute()){
                $statement->bind_result($employeeId, $name, $gender, $dateOfBirth, $dateOfJoining, $deptNo, $designationId, $managerId, $emailId);
                while($statement->fetch()){
                    $employees[] = new Employee($employeeId, $name, $gender, $dateOfBirth, $dateOfJoining, $deptNo, $designationId, $managerId, $emailId);
                }
            }

            $connection->close();
            return $employees;
        }
        
    }
?>