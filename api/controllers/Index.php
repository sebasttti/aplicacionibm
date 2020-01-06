<?php

class Index extends Controller{

      private $db;
      
      public function __construct($method,$parameters){

        $this->db = new Database;        
        $this->$method();

      }

      public function index(){ //este es el metodo que carga la pagina
        echo "Este es el índice de la página";        
      }

      public function ejemplo(){
        $this->db->query("SELECT * FROM cliente");
        $result = $this->db->responseAll();

        imprimirJSON($result);
      }

      public function getallinfo(){

        $table = $_REQUEST['table'];        

        $this->db->query("SELECT * from $table");

        $res = $this->db->responseAll();

        imprimirJSON($res);

      }

      public function getinfo(){


        $id=$_REQUEST['id'];
        $table = $_REQUEST['table'];

        if($table == 'consumo'){
          $aux = "tarjeta_";
        }else{
          $aux = "";
        }


        $this->db->query("SELECT * from $table where id_$aux$table = $id");

        $res = $this->db->responseAll();

        imprimirJSON($res);

      }

      public function sendInfo(){

        $table = $_REQUEST['table'];
        $tableField = $_REQUEST['tableField'];
        $data = $_REQUEST['data'];
        $data = preg_replace('/\\\\/', '', $data);              
               
        $this->db->query("INSERT INTO $table ($tableField) values (:data) ");        
        $this->db->bind(':data',$data);  
        
        $res = $this->db->execute();                      

        imprimirJSON(exitoFracaso($res));

      }

      public function agregarCliente(){

        $table = $_REQUEST['table'];
        $tableField = $_REQUEST['tableField'];
        $data = $_REQUEST['data'];    
               
       
        
        $this->db->query("INSERT INTO $table ($tableField) values (:data) ");        
        $this->db->bind(':data',$data);  
        
        $res = $this->db->execute();                
               
        if ($res) {

            $this->db->query("SELECT * from cliente ORDER BY info_cliente DESC LIMIT 1");

            $res = $this->db->responseUnique();

            imprimirJSON($res);

        }      

      }

      public function agregarTarjeta(){

        $idCliente = $_REQUEST['idCliente'];
        $data = $_REQUEST['data'];
        $res = "";
        
        
        // primero separo la data
        $data = json_decode($data);

        //ahora obtengo un arreglo

        foreach ($data as $key => $tarjeta) {

            $stringInfo = json_encode($tarjeta);

            $this->db->query("INSERT INTO tarjeta (id_cliente_tarjeta, info_tarjeta) values (:idCliente, :data) ");   

            $this->db->bind(':idCliente',$idCliente);     
            $this->db->bind(':data',$stringInfo);        

            $res = $this->db->execute();                

        }

        imprimirJSON(exitoFracaso($res));
        
        return;     

      }


      public function modificarInfo(){

        $id = $_REQUEST['id'];
        $table = $_REQUEST['table'];
        $data = $_REQUEST['data'];

        $data = preg_replace('/\\\\/', '', $data);
                        

        $str = "UPDATE $table SET info_$table = :data WHERE id_$table = $id ";      

        $this->db->query($str);
        $this->db->bind(':data',$data);

        $res = $this->db->execute();

        imprimirJSON(exitoFracaso($res));
        

      }

      public function agregarConsumo(){
        $idTarjeta = $_REQUEST['idTarjeta'];
        $data = $_REQUEST['data'];

        $data = preg_replace('/\\\\/', '', $data);

        $str = " INSERT INTO consumo (id_tarjeta_consumo,info_consumo) VALUES (:idTarjeta,:data) ";      

        $this->db->query($str);
        $this->db->bind(':idTarjeta',$idTarjeta);
        $this->db->bind(':data',$data);

        $res = $this->db->execute();

        imprimirJSON(exitoFracaso($res));
        

      }

      public function post(){
        // var_dump($_POST);
        imprimirJSON($_POST);
      }




}

 ?>
