<script>

var lat2 = 31.8816705 
var lon2 = -116.6186571; 
var lat1 = 31.871777; 
var lon1 = -116.6236511; 

var R = 6371; // km 
//has a problem with the .toRad() method below.
var x1 = lat2-lat1;
var dLat = Math.radians(x1);  
var x2 = lon2-lon1;
var dLon = Math.radians(x2);  
var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(Math.radians(lat1)) * Math.cos(Math.radians(lat2)) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);  
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
var d = R * c; 

alert(d);

</script>