<?php
include_once (  MODELS .'/connexion.php');
class methods extends connection {

    /// user properties
    public $id_user;
    public $First_name;
    public $Last_name;
    public $date_of_birth;
    public $nationality;
    public $family_status ;
    public $address;
    
    public $visat_ype;
    public $Date_of_departure;
    public $Date_of_arrival ;
    public $document_type;
    public $document;

    public $Reference_key;


    /// user propertyies
    public $id_reservation;
    public $date_reservation;
    public $time;




    //////////////////   GET   /////////////////////////////////


        //// get all  reservation ///

    public function get_all_reservs(){

        // sql 
        $sql = "select * from reservation";

        // exucution 
        $req = $this->connect()->query($sql);

        return  $req;

    }

      //// get all  user ////

      public function get_all_user(){

        // sql 
        $sql = "select * from user";

        // exucution 
        $req = $this->connect()->query($sql);

        return  $req;

    }

            //// get single resevation

    public function get_single_req(){
        $sql = "select * from reservation where id_user = '$this->id_user'";
   
        $req = $this->connect()->query($sql);

       
        $row  = mysqli_fetch_assoc($req);


        $this->id_reservation = $row['id_reservation'];
        $this->date_reservation = $row['date_reservation'];
        $this->id_user = $row['id_user'];
        
    }

            /// get one user ///

    public function get_user_req(){
        $sql = "select * from user where Reference_key = '$this->Reference_key'";
   
        $req = $this->connect()->query($sql);
        $num  = mysqli_num_rows($req);

        if($num >0){
              
        $row  = mysqli_fetch_assoc($req);


        $this->id_user = $row['id_user'];
        $this->First_name = $row['First_name'];
        $this->Last_name = $row['Last_name'];
        $this->date_of_birth = $row['date_of_birth'];
        $this->nationality = $row['nationality'];

        $this->family_status = $row['family_status'];
        $this->address = $row['address'];
        $this->visat_ype = $row['visat_ype'];
        $this->Date_of_departure = $row['Date_of_departure'];

        $this->Date_of_arrival = $row['Date_of_arrival'];
        $this->document_type = $row['document_type'];
        $this->document = $row['document'];
        $this->Reference_key = $row['Reference_key'];
        return true;

        }else 
        return false;
        
    }


    ///// get reseve ///

    public function get_reserv_req(){
        $sql = "select * from reservation where id_user = '$this->id_user'";
   
        $req = $this->connect()->query($sql);
        $num  = mysqli_num_rows($req);

        if($num >0){
              
        $row  = mysqli_fetch_assoc($req);

        $this->id_reservation = $row['id_reservation'];
        $this->date_reservation = $row['date_reservation'];
        $this->time = $row['time'];
        return true;

        }else 
        return false;
        
    }

        /// get user id to insert it to reservation ///

    public function get_id_user(){
        $sql  = "SELECT MAX( id_user ) as now_user FROM `user`";
        $req = $this->connect()->query($sql);
        $row  = mysqli_fetch_assoc($req);

        return $row['now_user'] ;


    }



    
    //////////////////   INSERT   /////////////////////////////////

    // create user

    public function add_user_req(){
        
        // clean data 
        $this->First_name = htmlspecialchars(strip_tags($this->First_name));
        $this->Last_name = htmlspecialchars(strip_tags($this->Last_name));
        $this->date_of_birth = htmlspecialchars(strip_tags($this->date_of_birth));
        $this->nationality = htmlspecialchars(strip_tags($this->nationality));


        $this->family_status = htmlspecialchars(strip_tags($this->family_status));
        $this->address = htmlspecialchars(strip_tags($this->address));
        $this->visat_ype = htmlspecialchars(strip_tags($this->visat_ype));
        $this->Date_of_departure = htmlspecialchars(strip_tags($this->Date_of_departure));


        $this->Date_of_arrival = htmlspecialchars(strip_tags($this->Date_of_arrival));
        $this->document_type = htmlspecialchars(strip_tags($this->document_type));
        $this->document= htmlspecialchars(strip_tags($this->document));
        $this->Reference_key = htmlspecialchars(strip_tags($this->Reference_key));

        
        $con  =  $this->connect();

        $query = "insert into user (First_name, Last_name, date_of_birth, nationality, family_status, address,visat_ype, Date_of_departure, Date_of_arrival, document_type, document, Reference_key )VALUES(?,?,?,?,?,?,?,?,?,?,?,?) ";

        //prepare statment 
        $stmt = $con->prepare($query);



        // bind data 

        $stmt->bind_param('ssssssssssss',$this->First_name,$this->Last_name,$this->date_of_birth,$this->nationality,$this->family_status,$this->address,$this->visat_ype,$this->Date_of_departure,$this->Date_of_arrival,$this->document_type,$this->document,$this->Reference_key);
        
        
        if($stmt->execute()){
            return true;
        }else {
            return false;
        }
    }


        // create reservation
        
    public function add_reservation_req(){
        $con  =  $this->connect();
        $query = "insert into reservation (date_reservation,time,id_user)VALUES(?,?,?) ";

        //prepare statment 
        $stmt = $con->prepare($query);

        // clean data 
        $this->date_reservation = htmlspecialchars(strip_tags($this->date_reservation));
        $this->time = htmlspecialchars(strip_tags($this->time));
        


        // bind data 

        $stmt->bind_param('ssi',$this->date_reservation,$this->time,$this->id_user);

        if($stmt->execute()){
            return true;
        }else {
            return false;
        }
    }





    ////////////////////// DELETE ///////////////////////////

    public function delete_user_req(){

        // conecttion 
        $con  =  $this->connect();

        $query =  "delete from user where id_user  = ?";
        
        $stmt = $con->prepare($query);

        //clean data
        $this->id_user = htmlspecialchars(strip_tags($this->id_user));
        
        // bind data
        
        $stmt->bind_param('i',$this->id_user);

        if($stmt->execute()){
            return true;
        }else {
            return false;
        }

    }

    public function delete_reservation_req(){

        // conecttion 
        $con  =  $this->connect();

        $query =  "delete from reservation where id_reservation  = ?";
        
        $stmt = $con->prepare($query);

        //clean data
        $this->id_reservation = htmlspecialchars(strip_tags($this->id_reservation));
        
        // bind data
        
        $stmt->bind_param('i',$this->id_reservation);

        if($stmt->execute()){
            return true;
        }else {
            return false;
        }

    }



public function get_dates_req(){

    // sql 
    $sql = "SELECT date_reservation, COUNT(*) as count
    FROM reservation
    GROUP BY date_reservation
     HAVING COUNT(*) = 4";

    // exucution 
    $req = $this->connect()->query($sql);

    return  $req;

}


    // public function get_times(){
    //     // $sql = "SELECT `time` FROM reservation WHERE date_reservation = '2023-02-16'";
    //     // $req = $this->connect()->query($sql);
    //     // // var_dump('khalifa' ,$this->date_reservation );
    //     // return  $req;

    //     $sql = "SELECT `time` FROM reservation WHERE date_reservation = '2023-02-16'";
    
    //     // exucution 
    //     $req = $this->connect()->query($sql);
    
    //     return  $req;
    // }

    public function get_test(){
        // $sql = "SELECT `time` FROM reservation WHERE date_reservation = '2023-02-16'";
        // $req = $this->connect()->query($sql);
        // // var_dump('khalifa' ,$this->date_reservation );
        // return  $req;

        $sql = "SELECT `time` FROM reservation WHERE date_reservation = '$this->date_reservation'";
    
        // exucution 
        $req = $this->connect()->query($sql);
    
        return  $req;
    }




        //////////////////   update   /////////////////////////////////

    // update user

    public function upadte_user(){
        
        // clean data 
        
        $this->First_name = htmlspecialchars(strip_tags($this->First_name));
        $this->Last_name = htmlspecialchars(strip_tags($this->Last_name));
        $this->date_of_birth = htmlspecialchars(strip_tags($this->date_of_birth));
        $this->nationality = htmlspecialchars(strip_tags($this->nationality));


        $this->family_status = htmlspecialchars(strip_tags($this->family_status));
        $this->address = htmlspecialchars(strip_tags($this->address));
        $this->visat_ype = htmlspecialchars(strip_tags($this->visat_ype));
        $this->Date_of_departure = htmlspecialchars(strip_tags($this->Date_of_departure));


        $this->Date_of_arrival = htmlspecialchars(strip_tags($this->Date_of_arrival));
        $this->document_type = htmlspecialchars(strip_tags($this->document_type));
        $this->document= htmlspecialchars(strip_tags($this->document));
        $this->Reference_key = htmlspecialchars(strip_tags($this->Reference_key));

        
        $con  =  $this->connect();

        $query = "UPDATE user SET First_name=?, Last_name=?, date_of_birth=?, nationality=?, family_status=?, address=?,Date_of_departure=?, Date_of_arrival=? WHERE id_user='$this->id_user'";

        //prepare statment 
        $stmt = $con->prepare($query);



        // bind data 

        $stmt->bind_param('ssssssss',$this->First_name,$this->Last_name,$this->date_of_birth,$this->nationality,$this->family_status,$this->address,$this->Date_of_departure,$this->Date_of_arrival);
        
        
        if($stmt->execute()){
            return true;
        }else {
            return false;
        }
    }



}




