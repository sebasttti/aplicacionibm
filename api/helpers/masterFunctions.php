<?php

//Funcion agregada 12-09-2019
function numeroTexto($valor){

  $valorNumero = (int)$valor;

  if ($valorNumero < 10) {
    return "0$valorNumero";
  }else{
    return "$valorNumero";
  }

}

//Funcion agregada 12-09-2019
function borrarArchivos($location){

  $ficheros = glob($location.".*");

    if ($ficheros) {
        foreach ($ficheros as $key => $value) {
          unlink($value);
        }
    }
}

//funcion agregada 24-09-2019
function imprimirJSON($string){
  header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
  header('Access-Control-Allow-Origin: *');
  header('Content-type:application/json; charset=utf-8');
  echo json_encode($string, JSON_UNESCAPED_UNICODE);
}

function enviarRespuesta($string){
  header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
  header('Access-Control-Allow-Origin: *');
  header('Content-type:text/html; charset=utf-8');
  echo "Hola mundo";
}

//funcion agregada 24-09-2019
function exitoFracaso($res){

  if ($res) {
    $aux = ['exito'=>'exito'];
  }else{
    $aux = ['fracaso'=>'fracaso'];
  }

  return $aux;
}

//funcion agregada 06/11/2019
function encontrarEnArray($value,$array,$param){
  foreach ($array as $key => $element) {
    if ($element->$param == $value) {
      return $element;
    }
  }
}

 ?>
