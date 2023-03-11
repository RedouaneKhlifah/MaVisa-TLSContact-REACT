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

class ReadController extends methods {


 //// get all user /////////

public function get_users(){
        
    //get_all query
    $result  = $this->get_all_user();
    
    
    
    //Get row count
    
    $num  = mysqli_num_rows($result);

    // check if database not empty
    
    if ($num > 0){
       $post_arr = array();
       $post_arr['data'] = array();
        while ($row  = mysqli_fetch_assoc($result)){
            extract($row);

            $post_item = array(
                'id_user' => $id_user,
                'First_name ' => $First_name,
                'Last_name' =>$Last_name,
                'date_of_birth' => $date_of_birth,
                'nationality' => $nationality,
                'family_status' => $family_status,

                'address' => $address,
                'visat_ype ' => $visat_ype,
                'Date_of_departure' =>$Date_of_departure,
                'Date_of_arrival' => $Date_of_arrival,
                'document_type' => $document_type,
                'document' => $document,

                'Reference_key' => $Reference_key,
    
            );
    
            // push tp 'data'
            array_push($post_arr['data'],$post_item);
    
        }
        // turn to JSON & output
        echo json_encode($post_arr);
    
    }else {
        echo json_encode(array('message' => 'no data found'));
    }
}







   /// get single user ////////

public function get_user($Reference_key){

    /// get id
    $this->Reference_key  = $Reference_key;

    // excute query
    if($this->get_user_req()){
        $post_arr = array(
            'id_user' => $this->id_user,
            'First_name' => $this->First_name,
            'Last_name' =>$this->Last_name,
            'date_of_birth' => $this->date_of_birth,
            'nationality' => $this->nationality,
            'family_status' => $this->family_status,
    
            'address' => $this->address,
            'visat_ype' => $this->visat_ype,
            'Date_of_departure' =>$this->Date_of_departure,
            'Date_of_arrival' => $this->Date_of_arrival,
            'document_type' => $this->document_type,
            'document' => $this->document,
    
            'Reference_key' => $this->Reference_key,
    
        );
    
        // make jason

        header('Content-Type: application/json');
        print_r(json_encode($post_arr));
    }else {
        header('HTTP/1.1 400 Bad Request');
        print_r(json_encode(['error' => 'User request failed'], 400));
    }

    // push data into array

    
}



    /// get all reservation ///

    public function get_reservation(){
        
        //get_all query
        $result  = $this->get_all_reservs();
        
        
        
        //Get row count
        
        $num  = mysqli_num_rows($result);
    
        // check if database not empty
        
        if ($num > 0){
           $post_arr = array();
           $post_arr['data'] = array();
            while ($row  = mysqli_fetch_assoc($result)){
                extract($row);
    
                $post_item = array(
                    'id_reservation' => $id_reservation,
                    'date_reservation' => $date_reservation,
                    'id_user' =>$id_user
        
                );
        
                // push tp 'data'
                array_push($post_arr['data'],$post_item);
        
            }
            // turn to JSON & output
            echo json_encode($post_arr);
        
        }else {
            echo json_encode(array('message' => 'no data found'));
        }
    }


    ///////  get last user ///////

    public function current_usr_Reference_key(){
        $sql = "SELECT Reference_key FROM `user` ORDER BY Reference_key DESC LIMIT 1";
        $req = $this->connect()->query($sql) ;
        $req = mysqli_fetch_assoc($req);

       
        $this->Reference_key = $req['Reference_key'];


        $post_arr = array(
            
            'Reference_key' =>$this->Reference_key,

    
        );
    
        // make jason
    
        print_r(json_encode($post_arr));

        
    }



    public function get_disabled_dates(){

        $result = $this->get_dates_req();

        $num  = mysqli_num_rows($result);
         
         if ($num > 0){
            $post_arr = array();
            $post_arr['data'] = array();
             while ($row  = mysqli_fetch_assoc($result)){
                 extract($row);
     
                 $post_item = array(
                     'date_reservation' => $date_reservation
         
                 );
         
                 // push tp 'data'
                 array_push($post_arr['data'],$post_item);
         
             }
             // turn to JSON & output
             echo json_encode($post_arr);
         
         }else {
             echo json_encode(array('message' => 'no data found'));
         }
    }

    public function get_times(){
        $data  = json_decode(file_get_contents("php://input"));

        $this->date_reservation  = $data->date_reservation;

        // var_dump( $this->date_reservation);
        $result  = $this->get_test();
        
        $num  = mysqli_num_rows($result);
       

        if ($num > 0){
            $post_arr = array();
            $post_arr = array();
             while ($row  = mysqli_fetch_assoc($result)){
                 extract($row);
     
                //  $post_item = array(
                //      'time' => $time
         
                //  );
         
                 // push tp 'data'
                 array_push($post_arr,$time);
         
             }
             // turn to JSON & output

             echo json_encode($post_arr);
         
         }else {
             echo json_encode(array());
         }

       

    }





}