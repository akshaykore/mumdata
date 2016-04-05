var root = "http://localhost/~akshaykore"
var map;
var mumbai = {lat: 19.0861289, lng: 72.90870667};

//load map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: mumbai,
    zoom: 11
  });
 
/*ward boundary overlay this will work
 *only when index html is accesed from 
 *a host*/
    map.data.loadGeoJson(root + '/ward_boundary/c.json');
    
}

