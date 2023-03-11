<?php 

header('Accsess-controle-Allow-Origne: *');
header('Content-type: aplication/json');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-headers: access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Autorization,X-Requested');

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
}