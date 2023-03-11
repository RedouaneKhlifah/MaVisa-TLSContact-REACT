<?php 

header('Accsess-controle-Allow-Origne: *');
header('Content-type: aplication/json');
header('Access-Control-Allow-Methods : PUT');
header('Access-Control-Allow-headers: access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Autorization,X-Requested');

class Updatecontroller  extends post {
    public function update_post(){
        $data  = json_decode(file_get_contents("php://input"));

       
        $this->title  = $data->title;
        $this->body  = $data->body;
        $this->author  = $data->author;
        $this->category_id  = $data->category_id;
        $this->id  = $data->id;
        
        
        if($this->update()){
            echo json_encode(array('message = > data updated'));
        }else {   
            echo json_encode(array('message = > data not updated'));
        }
    }
}