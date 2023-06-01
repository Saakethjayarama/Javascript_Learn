<?php
    class Country{
        private $code;
        private $name;
        private $continentCode;
        private $capital;
        private $area;
        private $population;
        private $island;
        private $harbour;

        // constructor

        function __construct(
            $code,
            $name,
            $continentCode,
            $capital,
            $area,
            $population,
            $island,
            $harbour
        ){
            $this->code = $code;
            $this->name = $name;
            $this->continentCode = $continentCode;
            $this->capital = $capital;
            $this->area = $area;
            $this->population = $population;
            $this->island = $island;
            $this->harbour = $harbour;
        }

        // getters
        function getCode(){
            return $this->code;
        }
        function getName(){
            return $this->name;
        }
        function getContinentCode(){
            return $this->continentCode;
        }
        function getCapital(){
            return $this->capital;
        }
        function getArea(){
            return $this->area;
        }
        function getPopulation(){
            return $this->population;
        }
        function getIsland(){
            return $this->island;
        }
        function getHarbour(){
            return $this->harbour;
        }
        
        // setters
        function setCode($code){
            $this->code = $code;
        }
        function setName($name){
            $this->name = $name;
        }
        function setContinentCode($continentCode){
            $this->continentCode = $continentCode;
        }
        function setCapital($capital){
            $this->capital = $capital;
        }
        function setArea($area){
            $this->area = $area;
        }
        function setPopulation($population){
            $this->population = $population;
        }
        function setIsland($island){
            $this->island = $island;
        }
        function setHarbour($harbour){
            $this->harbour = $harbour;
        }

        //to Array

        function toArray() {
            return array(
                "code" => $this->code,
                "name" => $this->name,
                "continentCode" => $this->continentCode,
                "capital" => $this->capital,
                "area" => $this->area,
                "population" => $this->population,
                "island" => $this->island,
                "harbour" => $this->harbour
            );
        }
    }

?>