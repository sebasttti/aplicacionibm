<?php

class Error404 extends Controller{     

      public function __construct($method){
        $this->index();
      }

      public function index(){ 
        $result = ["error"=>'Página no encontrada'];

        imprimirJSON($result);
        
      }

}

 ?>
