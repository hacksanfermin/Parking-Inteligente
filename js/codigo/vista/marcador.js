define(['jquery','underscore','backbone'],function($,_,Backbone){
	
	var Marcador = Backbone.View.extend({
		initialize : function(opciones){
			this.zoom = false;
			this.mapa = opciones.mapa;
			this.listenTo(this,"change:PLAZAS",this.actualizacion_plazas);
			this.render(this.mapa.gMapa);
		},
		actualizacion_plazas : function(){
			if (this.model.disponibilidad())
				this.gMarcador.setIcon("assets/img/disponible.png");
			else
				this.gMarcador.setIcon("assets/img/noDisponible.png"); 
		},
		informacion : function(){
			var plantilla =  '<div id="plantilla" class="section">'+
							    '<h4>DIRECCION</h4>'+
							    '<p>'+this.model.direccion()+'</p>'+
							 '</div>'+
							 '<div class="section">'+
							    '<div  style="float:left;margin-right:2em">'+
							    '<h4>HORARIO DESDE</h4>'+
							    '<p>'+this.model.horario_desde()+'</p>'+
							    '</div>'+
							    '<div style="float:left;margin-right:2em">'+
							    '<h4>HORARIO HASTA</h4>'+
							    '<p>'+this.model.horario_hasta()+'</p>'+
							    '</div>'+
							    '<div style="float:left;margin-right:2em">'+
							    '<h4>TELEFONO</h4>'+
							    '<p>'+this.model.telefono()+'</p>'+
							    '</div>'+
							    '<div style="clear:both;margin-right:2em">'+
							    	'<button>RESERVA</button>'+
							    '</div>'
							 '</div>';
			var infowindow = new google.maps.InfoWindow({
      					content: plantilla 
  			});	
	  		infowindow.open(this.mapa.gMapa,this.gMarcador);	
	  				
		}, 
		render : function(mapa){
			var that = this;
			var centro = new google.maps.LatLng(this.model.latitud(),this.model.longitud());
			var icon = "undefined";
			//calculo la disponibilidad e assingo el icono
			if (this.model.disponibilidad())
				icon = "assets/img/disponible.png";
			else
				icon = "assets/img/noDisponible.png"; 
			//creo el marcador cuyo centro es el posicionamiento del modelo 
			this.gMarcador = new google.maps.Marker({
  				position:centro,
  				animation: google.maps.Animation.BOUNCE,
  				icon: icon
 			 });
			//centro el marcador dentro del mapa
			this.gMarcador.setMap(mapa);
				

			setTimeout(function(){
				  that.gMarcador.setAnimation(null);
			},2000);
			
			//escucha ante el evento onClick sobre el marcador
			google.maps.event.addListener(this.gMarcador,'click',function() {
				if (!that.zoom){
	  				that.zoom = true;
	  				that.gMarcador.setAnimation(google.maps.Animation.BOUNCE);
					mapa.setZoom(19);										
					setTimeout(function(){
					  that.gMarcador.setAnimation(null);
					},2000);	
					mapa.setCenter(that.gMarcador.getPosition());
				}
				else{
					that.zoom = false;
					that.mapa.animacion_marcadores();
  					mapa.setZoom(13);
  				}
  			});
		}
	});

	return Marcador;

});