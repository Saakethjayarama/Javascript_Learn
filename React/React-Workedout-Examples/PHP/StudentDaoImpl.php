<?php
    require_once 'Student.php';
    require_once 'StudentDao.php';
    require_once 'JdbcUtil.php';

    class StudentDaoImpl implements StudentDao {
        function getStudentById($id) {
            $connection = getConnection('institution');
            $sql = 'select * from students where usn = ? ';
            $statement = $connection->prepare($sql);
            $statement->bind_param('s', $id);
            
            $student = null;
            if($statement->execute()){
                $statement->bind_result($usn, $name, $gender, $age, $qualificationCode, $city);
                if($statement->fetch()){
                    $student = new Student($usn, $name, $gender, $age, $qualificationCode, $city);
                }
            }

            $connection->close();
            return $student;
        }

        function getStudentsByGender($gender) {
            $connection = getConnection('institution');
            $sql = 'select * from students where gender = ?';
            $statement = $connection->prepare($sql);
            $statement->bind_param('s', $gender);

            $students = [];
            if($statement->execute()){
                $statement->bind_result($usn, $name, $gender, $age, $qualificationCode, $city);
                while($statement->fetch()){
                    $students[] = new Student($usn, $name, $gender, $age, $qualificationCode, $city);
                }
            }

            $connection->close();
            return $students;
        }

    }

?>