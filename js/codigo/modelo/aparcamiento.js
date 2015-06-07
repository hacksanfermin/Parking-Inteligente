define(['jquery','underscore','backbone'],function($,_,Backbone){
	var APARCAMIENTO = Backbone.Model.extend({
		nombre : function(){//devuelve el nombre del aparcamiento
			return this.get("NOMBRE");
		},
		nombre_corto : function(){//devuelve el nombre_corto del aparcamiento
			return this.get("NOMBRE_CORTO");
		}, 
		direccion:function(){//devuelve la direccion del aparcamiento
			return this.get("DIRECCION");
		},
		telefono : function(){//devuelve el telefono del aparcamiento
			return this.get("TELEFONO");
		},
		geo : function(){ //devuelve un objeto con la geolocalizacion del aparcamiento.Este objeto
			//presenta dos propiedades : LATITUD y LONGITUD
			return {LATITUD : this.get("LATITUD") , LONGITUD :  this.get("LONGITUD")};
		},
		latitud : function(){//devuelve la latitud del aparcamiento
			return this.get("LATITUD");
		},
		longitud : function(){//devuelve la lpngitud del aparcamiento
			return this.get("LONGITUD");
		},
		horario : function(){//devuelve un objeto con el horario del apracamiento.Este objeto presenta
			//las siguientes propiedades : FORMATO,DESDE,HASTA
			return this.get("HORARIO");	
		},
		horario_desde : function(){//devuelve el la propiedad DESDE del objeto HORARIO
			return this.get("HORARIO").DESDE;	
		},
		horario_hasta : function(){//devuelve el la propiedad HASTA del objeto HORARIO
			return this.get("HORARIO").HASTA;
		},
		plazas : function(){//devuelve el la propiedad DESDE del objeto HORARIO
			return this.get("PLAZAS");
		},
		plazas_total : function(){
			return this.get("PLAZAS").TOTAL;
		},
		plazas_libres : function(){
			return this.get("PLAZAS").LIBRES;
		},
		tarifas : function(){

		},
		disponibilidad : function(){ //indica si existen plazas libres dentro de un aparcamiento
			total = parseInt(this.plazas_total());
			libres = parseInt(this.plazas_libres());
			disposicion = total - libres;
			return disposicion > 0; 
		}
	});
	return APARCAMIENTO;
});