<?php

    interface CountryDao{
        function getAllCountries();
        function searchByName($name);
        function countriesByContinent($continentCode);
    }

?>