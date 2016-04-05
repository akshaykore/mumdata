     var data = [
    
    {
        "id" : 0,
        "name":"residential",
        "type":"static",
        "url":"http://localhost/~akshaykore/layer/residential.png",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {
        "id" : 1,
        "name":"commercial",
        "type":"static",
        "url":"http://localhost/~akshaykore/layer/industrial.png",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 2,
        "name":"name1",
        "type":"static",
        "url":"http://localhost/~akshaykore/layer/industrial.png",
        "visible":false,
        "author":"MCGM",
        "value":true
    },

    {   "id" : 3,
        "name":"name2",
        "type":"static",
        "url":"http://localhost/~akshaykore/layer/residential.png",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 4,
        "name":"all",
        "type":"static",
        "url":"http://localhost/~akshaykore/layer/all.png",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 5,
        "name":"all",
        "url":"http://localhost/~akshaykore/layer/all.png",
        "visible":false,
        "author":"MCGM",
        "value":true
    }

    

];
        
// This example uses a GroundOverlay to place an image on the map
// showing an antique map of Newark, NJ.

//bounds coordinates for overlay
var swlat = 18.877702;
var swlong = 72.671814;
var nelat = 19.339653;
var nelong = 73.048096;

//center of map
var centercoordinates = {lat: 19.0861289, lng: 72.90870667};
       
//event listener submit button. callback initMap function

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: centercoordinates
  });
     

    var imageBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(swlat, swlong),
      new google.maps.LatLng(nelat, nelong));
    
//shows length of json used
    var jsonlength = data.length;  
       // alert("jsonlength is "+jsonlength);
    var overlayurl = [];
    var overlayname = [];
    var overlayvisible = [];


//loops over json to push url in overlay array
for(var i = 0; i<jsonlength; i++){
    overlayurl.push(data[i].url);
    overlayname.push(data[i].name);
    overlayvisible.push(data[i].visible);
}

        
var arraylength = overlayurl.length;

  
  /*historicalOverlay2 = new google.maps.GroundOverlay(
      m,
      imageBounds2);
    
  historicalOverlay2.setMap(map);*/
    
    function makeoverlay(){
        for(var i=0; i<arraylength;i++ ){

overlayname[i] = new google.maps.GroundOverlay(overlayurl[i], imageBounds);
    
    if(overlayvisible[i] == false){
         overlayname[i].setMap(false);
    }
    
    else{
         overlayname[i].setMap(map);
    }
    
   
}
    
    }
    
    makeoverlay();





    
}
       
       function changedata(n){
        if(data[n].visible == false){data[n].visible = true;}
        else{data[n].visible = false;}
        
       }
       
//-----------------------//


var createlistelement = function(listelement){
    var node = document.createElement("div");
        node.id = "listelement";
    var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.class = "checkboxstyle";
        checkbox.id = listelement.name;
        checkbox.checked = false;
    var nameofelement = document.createTextNode(listelement.name);
    var image = document.createElement("img");
        image.setAttribute("src", listelement.url);
        image.setAttribute("width", "5");
        image.setAttribute("height", "5");
        image.setAttribute("alt", listelement.name);
        image.id = "legendstyle";
    
    node.appendChild(checkbox);
    node.appendChild(nameofelement);
    node.appendChild(image);
    
    document.getElementById("datalist").appendChild(node);  
}

///create list in popup
var createlist = function(){
    
    function removechildnodes(){
    var myNode = document.getElementById("datalist");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
    }
    
    removechildnodes();
    
    for(var i = 0; i < data.length; i++){
        if (data[i].value === true){  ///checks for value in data json
            createlistelement(data[i]);
            checkboxlistener(data[i]);
        }
    }
    
}



var checkboxlistener = function(foo) {
    
    console.log(foo.name);
    var checkboxtagname = document.getElementById(foo.name);
    checkboxtagname.addEventListener("change", function oncheckboxclick(){
        console.log(checkboxtagname);
        if(checkboxtagname.checked){
            
        foo.value = false;
        foo.visible = true;
        //alert("checked: " + foo.name + " " + foo.visible);
        //console.log(foo.visible);

        
            
    }
    else{
        
        foo.value = true;
        foo.visible = false;
        //alert("unchecked: " + foo.name + " " + foo.visible);
        //console.log(foo.visible);
        

    }
        
    });

        
}

//-------------//


var createcontrollistelement = function(createcontrollistelement){
        var node = document.createElement("div");
        node.id = "createcontrollistelement";
    var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.class = "checkboxstyle";
        checkbox.id = createcontrollistelement.name + "_id";
        checkbox.checked = true;       
    var nameofelement = document.createTextNode(createcontrollistelement.name);
    var image = document.createElement("img");
        image.setAttribute("src", createcontrollistelement.url);
        image.setAttribute("width", "30");
        image.setAttribute("height", "30");
        image.setAttribute("alt", createcontrollistelement.name);
        image.id = "legendstyle";
    var removebutton = document.createElement("input");
        removebutton.type = "button";
        removebutton.class = "closebutton";
        removebutton.id = createcontrollistelement.name + "_removebutton";
        
    
    node.appendChild(checkbox);
    node.appendChild(nameofelement);
    node.appendChild(image);
    node.appendChild(removebutton);
    
    document.getElementById("layer").appendChild(node); 
}


var createcontrollist = function(){
    
    function removechildnodes(){
    var myNode = document.getElementById("layer");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
    }
    
    removechildnodes();
    
    for(var i = 0; i < data.length; i++){
        if (data[i].value === false){  ///checks for value in data json            
            createcontrollistelement(data[i]);
            checkboxcontrollistener(data[i]);
            data[i].visible = true;
            removelayer(data[i]);
            
            
        }
    }
    
    initMap();
}





var checkboxcontrollistener = function(foo) {
    
    console.log(foo.name);
    var checkboxtagname = document.getElementById(foo.name + "_id");
    checkboxtagname.addEventListener("change", function oncheckboxclick(){
        console.log(checkboxtagname);
        if(checkboxtagname.checked){
        foo.visible = true;
        //alert("checked: " + foo.name + " " + foo.visible);
        //console.log(foo);
            
    }
    else{
        foo.visible = false;
        //alert("unchecked: " + foo.name + " " + foo.visible);
        //console.log(foo);

        
    }
    
        
        initMap();
        
    });

        
}


var removelayer = function(foo){
    console.log("remove" + foo.name);
    var removebuttontagname = document.getElementById(foo.name + "_removebutton");
    removebuttontagname.addEventListener("click", function onlayerremove(){
        console.log(foo.name);
        //alert("removed: " + foo.name);
        foo.visible = false;
        foo.value = true;
        createcontrollist();
        initMap();
    });
}


