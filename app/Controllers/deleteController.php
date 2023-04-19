<?php 

header('Accsess-controle-Allow-Origne: *');
header('Content-type: aplication/json');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-headers: access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Autorization,X-Requested');

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

class deleteController  extends methods {

    // delete methods
    public function delete_user($id){
        
        $this->id_user  = isset($id) ?$id:die();
        // $this->read_single();
        
        if($this->delete_user_req()){
            echo json_encode(array('message = > data deleted'));
        }else {   
            echo json_encode(array('message = > data not deleted'));
        }
    }

    public function delete_reservation($id){
        
        $this->id_reservation  = isset($id) ?$id:die();
      
        
        if($this->delete_reservation_req()){
            echo json_encode(array('message = > data deleted'));
        }else {   
            echo json_encode(array('message = > data not deleted'));
        }
    }
}