  
<?php
//load the php framework
require_once "../Slim/Slim.php";
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

//cargar aqui la pagina de inicio 0 index.html
$app->get("/", function () {
    echo file_get_contents("index.html");
});

//Recupera el nivel de ocupación de los parkings de Pamplona en tiempo real, incluyendo datos del parking,
//situación y contacto.
//http://www.pamplona.es/srv/opendata/verPagina.aspx?idioma=1&nifEntidad=P3120100G&paginaOpenData=2&cbotipos=42
$app->get("/ocupacion", function () {
	$url = 'http://www.pamplona.es/xml/parkings.xml';
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	$headers = array();
	$headers[] = 'Accept:*/*';
	$headers[] = 'Accept-Encoding:gzip, deflate, sdch';
	$headers[] = 'Accept-Language:es-ES,es;q=0.8,en;q=0.6,nb;q=0.4';
	$headers[] = 'Cache-Control:no-cache';
	$headers[] = 'Connection:keep-alive';
	$headers[] = 'CSP:active';
	$headers[] = 'Host:www.navarra.es';
	$headers[] = 'User-Agent:Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36';
	curl_setopt($ch,CURLOPT_HTTPHEADER, $headers);
	curl_setopt($ch,CURLOPT_RETURNTRANSFER,TRUE); 
	$server_output = curl_exec ($ch);
	$xml = simplexml_load_string($server_output);
	$json = json_encode($xml);
	echo $json;
});

$app->run();


?>