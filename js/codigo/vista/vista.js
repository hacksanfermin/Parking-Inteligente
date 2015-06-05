requirejs.config({
	baseUrl : "js/librerias3eros",
	paths : {
		notificacion : "../codigo/modulos/notificaciones",
		MiBackbone : "../codigo/MiBackbone"
	},
	shim : {
		"bootstrap" : { deps : ['jquery'] }
	}
});

requirejs(['aplicacion'],function(aplicacion){
	//especificamos el modulo correspondiente
	var cursor = "notificaciones";
	//cargamos el modulo
	var  modulo = aplicacion[cursor];
	//recuperamos el modelo del modulo
	var Modelo = notificacion.Modelo;
	//recuperamos la vista del modulo
	var Vista = notificacion.Vista;

	//
	// Notificaciones 
	//
	
	//modelo
	var mNotificacion = new Modelo({
									tipo : "exito",
									mensaje : "Enhorarabuena notificacion del tipo \"exito\" generada con exito",
									duracion : 1
								   });
	//vista
	var vNotificacion = new Vista({
									padre : $('.notificacion'),
									model : mNotificacion
								  });
	//notificar
	vNotificacion.notificar();

}