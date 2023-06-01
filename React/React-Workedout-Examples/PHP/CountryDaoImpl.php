<?php
    require_once 'CountryDao.php';
    require_once 'JdbcUtil.php';
    require_once 'Country.php';

    class CountryDaoImpl implements CountryDao{
        function getAllCountries(){
            $connection = getConnection('geography');
            $sql = 'select * from countries';


            $countries = [];
            $resultSet = $connection->query($sql);
            if($resultSet->num_rows > 0){
                while($row = $resultSet->fetch_assoc()){
                    $countries[] = new Country(
                        $row['code'],
                        $row['name'],
                        $row['continent_code'],
                        $row['capital'],
                        $row['area'],
                        $row['population'],
                        $row['island'],
                        $row['harbour']);
                }
            }


            $connection->close();
            return $countries;
        }

        function searchByName($name){
            $connection = getConnection('geography');
            $sql = "select * from countries where name like '%".$name."%'";

            $resultSet = $connection->query($sql);

            $countries = [];
            if($resultSet->num_rows > 0){
                while($row = $resultSet->fetch_assoc()){
                    $countries[] = new Country(
                        $row['code'],
                        $row['name'],
                        $row['continent_code'],
                        $row['capital'],
                        $row['area'],
                        $row['population'],
                        $row['island'],
                        $row['harbour']);
                }
            }


            $connection->close();
            return $countries;
        }

        function countriesByContinent($continentCode){
            $connection = getConnection('geography');
            $sql = 'select * from countries where continent_code = ?';

            $statement = $connection->prepare($sql);
            $statement->bind_param('s', $continentCode);

            $countries = [];
            if($statement->execute()){
                $statement->bind_result($code, $name, $contCode, $capital, $area, $population, $island, $harbour);
                while($statement->fetch()){
                    $countries[] = new Country($code, $name, $contCode, $capital, $area, $population, $island, $harbour);
                }
            }

            $connection->close();
            return $countries;
        }

    }

?>