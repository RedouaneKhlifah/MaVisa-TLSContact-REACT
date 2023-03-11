<?php 
include_once (  MODELS .'/connexion.php');
class post extends connection {

    public $id;
    public $category_id;
    public $category_name;
    public $title;
    public $body;
    public $author ;
    public $created_at;
    
    


    public function set_id($id){
        $this->id = $id;
    }

    public function read(){
        // var_dump($con);
        // die;


        $sql = "select c.name as category_name ,p.id,p.category_id ,p.title,p.body,p.author,p.created_at FROM posts p LEFT JOIN categories c on p.category_id = c.id  
        ORDER BY `p`.`created_at` DESC";

        // var_dump($query);
        // die;

        $req = $this->connect()->query($sql);

        return  $req;


    }

    // get Single Post
    public function read_single(){
        $sql = "select c.name as category_name ,p.id,p.category_id ,p.title,p.body,p.author,p.created_at FROM posts p LEFT JOIN categories c on p.category_id = c.id  
        where p.id = '$this->id' limit 0,1";


        var_dump($sql);
        die;
        $req = $this->connect()->query($sql);



       
        $row  = mysqli_fetch_assoc($req);

        // var_dump( $row);
        // die;

        $this->title = $row['title'];
        $this->body = $row['body'];
        $this->author = $row['author'];
        $this->category_id = $row['category_id'];
        
    }

    // Create Post

    public function create(){
        $con  =  $this->connect();
        // $query = "insert into posts SET title = :title,body = :body,author = :author ,category_id  = :category_id ";
        $query = "insert into posts (title,body,author,category_id )VALUES(?,?,?,?) ";

        // var_dump($query);
        // die;

        //prepare statment 
        $stmt = $con->prepare($query);

        // clean data 
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->body = htmlspecialchars(strip_tags($this->body));
        $this->author = htmlspecialchars(strip_tags($this->author));
        $this->category_id = htmlspecialchars(strip_tags($this->category_id));

        // bind data 

        $stmt->bind_param('sssi',$this->title,$this->body,$this->author,$this->category_id);
        
        // $stmt->bind_param(':body',$this->body);
        // $stmt->bind_param(':author',$this->author);
        // $stmt->bind_param(':category_id',$this->category_id);

        if($stmt->execute()){
            return true;
        }else {
            return false;
        }
    }

    public function update(){

        // conecttion 
        $con  =  $this->connect();

       $query =  "update posts set title = ? ,body = ?,author= ?,category_id = ? Where id = ?";


        //prepare statment 
        $stmt = $con->prepare($query);

        // clean data 
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->body = htmlspecialchars(strip_tags($this->body));
        $this->author = htmlspecialchars(strip_tags($this->author));
        $this->category_id = htmlspecialchars(strip_tags($this->category_id));
        $this->id = htmlspecialchars(strip_tags($this->id));

        // bind data 

        $stmt->bind_param('sssii',$this->title,$this->body,$this->author,$this->category_id,$this->id);
        

        if($stmt->execute()){
            return true;
        }else {
            return false;
        }
    }



    // delete post 

    public function delete(){

        // conecttion 
        $con  =  $this->connect();

        $query =  "delete from posts where id  = ?";
        
        $stmt = $con->prepare($query);

        //clean data
        $this->id = htmlspecialchars(strip_tags($this->id));
        
        // bind data
        
        $stmt->bind_param('i',$this->id);

        if($stmt->execute()){
            return true;
        }else {
            return false;
        }

    }

}