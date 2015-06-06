define(["jquery","mapbox"],function($){
	L.mapbox.accessToken = 'pk.eyJ1IjoiY2h1cm82Nzk1NiIsImEiOiJmNDAzNTg5YWFhMmY4NWQ2MDQ5YmRiNDkxZWRhMTY0MiJ9.t5BallSzW_n9CgxWWaLFOg';
	// Create a map in the div #map
	var map =  L.mapbox.map('map', 'churo67956.mcedc4nm');
	 map.setView([42.76919491914051 - 0.15,-1.6311645624227822],9);


});
