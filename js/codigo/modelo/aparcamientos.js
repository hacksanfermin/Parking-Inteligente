define(['codigo/modelo/aparcamiento','jquery','underscore','backbone',],function(APARCAMIENTO,$,_,Backbone){
	var APARCAMIENTOS = Backbone.Collection.extend({
		url : 'index.php/ocupacion',
		model : APARCAMIENTO,
		parse : function(respuesta){
			this.ULTIMA_ACTUALIZACION = respuesta["ULTIMA_ACTUALIZACION"];
			return respuesta["APARCAMIENTO"];
		}
	});
	return APARCAMIENTOS;
});