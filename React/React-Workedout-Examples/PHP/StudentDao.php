<?php
    interface StudentDao {
        function getStudentById($id);
        function getStudentsByGender($gender);
    }

?>