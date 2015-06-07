define(['jquery','underscore','backbone','./marcador'],function($,_,Backbone,Marcador){
	
	var MapaApartamientos = Backbone.View.extend({
		padre : $("body"),
		initialize:function(){
			this.listenTo(this.collection,"add",this.anadirMarcador);
			this.padre.prepend(this.$el);
			this.$el.attr("id","mapa");
			this.render();
			this._marcadores = [];
		},
		render : function(){
			var that = this;
			var mapProp = {
			    center:new google.maps.LatLng(42.8094381,-1.6406661),
			    zoom:13,
			    mapTypeId:google.maps.MapTypeId.HYBRID
		  	};
		  	this.gMapa = new google.maps.Map(document.getElementById("mapa"),mapProp);
		  	google.maps.event.addListenerOnce(this.gMapa, 'idle', function(){
				that.collection.fetch();
			});
			google.maps.event.addListener(this.gMapa, 'zoom_changed', function() {
	 			//recoger los marcadores y ver cual tiene zoom a true
	 			zoom = _.find(that._marcadores,function(marcador){
	 				return marcador.zoom == true;
	 			});

	 			if (zoom){
	 				console.log(zoom);
	 				zoom.informacion();
	 			}
	 			//console.log("zoom nchanged");
			});
		},
		anadirMarcador : function(aparcamiento){
			this._marcadores.push(new Marcador({model : aparcamiento , mapa : this})); 	
		},
		animacion_marcadores : function(){
			_.each(this._marcadores,function(marcador){
				marcador.gMarcador.setAnimation(google.maps.Animation.BOUNCE);
				setTimeout(function(){
					 marcador.gMarcador.setAnimation(null);
				},2000);
			});
		}
	});

	return MapaApartamientos;
});