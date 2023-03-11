<?php

ini_set('display_errors', 1);
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: GET , POST , PUT , DELETE');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-Width');

    //traitement data
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }
    if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        return true;
    }


class createController  extends methods {

        //// add new user ////
    public function add_user(){
        $data  = json_decode(file_get_contents("php://input"));

        $this->First_name  = $data->First_name;
        $this->Last_name  = $data->Last_name;
        $this->date_of_birth  = $data->date_of_birth;
        $this->nationality  = $data->nationality;
        
        $this->address  = $data->address;
        
        $this->family_status  = $data->family_status;
        $this->address  = $data->address;
        $this->visat_ype  = $data->visat_ype;
        $this->Date_of_departure  = $data->Date_of_departure;

        $this->Date_of_arrival  = $data->Date_of_arrival;
        $this->document_type  = $data->document_type;
        $this->document = $data->document;
        $this->Reference_key  = uniqid();

        
        if($this->add_user_req()){
            echo json_encode(array('message = > data save'));
        }else {   
            echo json_encode(array('message = > data bot save'));
        }
    }



    /// add new reservation ///

    
    public function add_reservation(){
        $data  = json_decode(file_get_contents("php://input"));
        
        
        $this->date_reservation  = $data->date_reservation;
        $this->time = $data->time;
        $this->id_user = $this->get_id_user();

        var_dump($data->time);
      

        
        if($this->add_reservation_req()){
            echo json_encode(array('message = > data save'));
        }else {   
            echo json_encode(array('message = > data bot save'));
        }
    }


    


}