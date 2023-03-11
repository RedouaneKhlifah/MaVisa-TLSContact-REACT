<?php


  class connection{
        private $servername='localhost:3308';
        private $username='root';
        private $password='';
        private $dbname='tls';
        public $con;
        
    



    public function connect(){
        $servername='localhost:3308';
        $username='root';
        $password='';
        $dbname='tls';

        $conn = new mysqli($servername,$username, $password,$dbname); 

        return $conn;
    }


    

       





}

?>