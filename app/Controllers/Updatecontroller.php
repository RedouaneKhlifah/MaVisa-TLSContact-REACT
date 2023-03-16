<?php 

// headers 

use function PHPSTORM_META\map;

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

class Updatecontroller  extends methods {
    public function update($id_user){
        $data  = json_decode(file_get_contents("php://input"));

        $this->id_user  = $id_user;
        $this->First_name  = $data->First_name;
        $this->Last_name  = $data->Last_name;
        $this->date_of_birth  = $data->date_of_birth;
        $this->nationality  = $data->nationality;
        
        $this->family_status  = $data->family_status;
        $this->address  = $data->address;
        $this->Date_of_departure  = $data->Date_of_departure;
        $this->Date_of_arrival  = $data->Date_of_arrival;

        
        
        if($this->upadte_user()){
            echo json_encode(array('message = > data updated'));
        }else {   
            echo json_encode(array('message = > data not updated'));
        }
    }
}