//Carga la configuracion definida dentro del modulo "configuracion" 
requirejs(['./configuracion'],function(configuracion){
	 requirejs(['codigo/aplicacion']);
});