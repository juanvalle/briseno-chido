function grid(latitude, longitude){
//	var n = 7;
//	var bottom = latitude - (((n - 1)/2)*(0.00451043715));
//	var right = longitude + (((n - 1)/2)*(0.00526486588));
	
	var lat_space = 0.00451043715;
	var lon_space = 0.00526486588;

	var locations = [
		[latitude + (3*(lat_space)), longitude - (3*(lon_space))], //1
		[latitude + (3*(lat_space)), longitude - (2*(lon_space))],
		[latitude + (3*(lat_space)), longitude - (1*(lon_space))],
		[latitude + (3*(lat_space)), longitude],
		[latitude + (3*(lat_space)), longitude + (1*(lon_space))],
		[latitude + (3*(lat_space)), longitude + (2*(lon_space))],
		[latitude + (3*(lat_space)), longitude + (3*(lon_space))],
		[latitude + (2*(lat_space)), longitude - (3*(lon_space))], //1
		[latitude + (2*(lat_space)), longitude - (2*(lon_space))],
		[latitude + (2*(lat_space)), longitude - (1*(lon_space))],
		[latitude + (2*(lat_space)), longitude],
		[latitude + (2*(lat_space)), longitude + (1*(lon_space))],
		[latitude + (2*(lat_space)), longitude + (2*(lon_space))],
		[latitude + (2*(lat_space)), longitude + (3*(lon_space))],
		[latitude + (1*(lat_space)), longitude - (3*(lon_space))], //1
		[latitude + (1*(lat_space)), longitude - (2*(lon_space))],
		[latitude + (1*(lat_space)), longitude - (1*(lon_space))],
		[latitude + (1*(lat_space)), longitude],
		[latitude + (1*(lat_space)), longitude + (1*(lon_space))],
		[latitude + (1*(lat_space)), longitude + (2*(lon_space))],
		[latitude + (1*(lat_space)), longitude + (3*(lon_space))],
		[latitude, longitude - (3*(lon_space))], //1
		[latitude, longitude - (2*(lon_space))],
		[latitude, longitude - (1*(lon_space))],
		[latitude, longitude],
		[latitude, longitude + (1*(lon_space))],
		[latitude, longitude + (2*(lon_space))],
		[latitude, longitude + (3*(lon_space))],
		[latitude - (1*(lat_space)), longitude - (3*(lon_space))], //1
		[latitude - (1*(lat_space)), longitude - (2*(lon_space))],
		[latitude - (1*(lat_space)), longitude - (1*(lon_space))],
		[latitude - (1*(lat_space)), longitude],
		[latitude - (1*(lat_space)), longitude + (1*(lon_space))],
		[latitude - (1*(lat_space)), longitude + (2*(lon_space))],
		[latitude - (1*(lat_space)), longitude + (3*(lon_space))],
		[latitude - (2*(lat_space)), longitude - (3*(lon_space))], //1
		[latitude - (2*(lat_space)), longitude - (2*(lon_space))],
		[latitude - (2*(lat_space)), longitude - (1*(lon_space))],
		[latitude - (2*(lat_space)), longitude],
		[latitude - (2*(lat_space)), longitude + (1*(lon_space))],
		[latitude - (2*(lat_space)), longitude + (2*(lon_space))],
		[latitude - (2*(lat_space)), longitude + (3*(lon_space))],
		[latitude - (3*(lat_space)), longitude - (3*(lon_space))], //1
		[latitude - (3*(lat_space)), longitude - (2*(lon_space))],
		[latitude - (3*(lat_space)), longitude - (1*(lon_space))],
		[latitude - (3*(lat_space)), longitude],
		[latitude - (3*(lat_space)), longitude + (1*(lon_space))],
		[latitude - (3*(lat_space)), longitude + (2*(lon_space))],
		[latitude - (3*(lat_space)), longitude + (3*(lon_space))],
	];  

	for(var i = 0; i < n; i++){
		points[i] = [, -116.621046];
		bottom += 0.00451043715;
	}
	document.write(points.toString(););
}



		map.addListener('click', function(e){
          placeMarkerAndPanTo(e.latLng, map);
        });

        function placeMarkerAndPanTo(latLng, map) {
        	var marker = new google.maps.Marker({
        		position: latLng,
        		map: map
        	});
        	map.panTo(latLng);
        }

  	for (var i = 0; i < locations.length; i++){
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
          });
      }

		map.addListener('click', function(e){
          placeMarkerAndPanTo(e.latLng, map);
        });

    radius = new google.maps.Circle({map: map,
        radius: 3500,
        center: event.latLng,
        fillColor: '#777',
        fillOpacity: 0.1,
        strokeColor: '#AA0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        draggable: false,    // Dragable
        editable: false      // Resizable
    });

    // Center of map
    map.panTo(new google.maps.LatLng(latitude,longitude));

}); //end addListener

var locations = [
        ['A', 31.863831, -116.621046, 1],
        ['B', 31.868341, -116.621046, 2],
        ['C', 31.872852, -116.621046, 3],
        ['D', 31.863831, -116.615759513, 4],
        ['E', 31.868341, -116.615759513, 5],
        ['F', 31.872852, -116.615759513, 6],
        ['G', 31.863831, -116.626332487, 7],
        ['H', 31.868341, -116.626332487, 8],
        ['I', 31.872852, -116.626332487, 9]
      ];


      