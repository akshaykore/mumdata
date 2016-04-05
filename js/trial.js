var urlbase = 'http://homepages.iitb.ac.in/~akshaykore/layers/';
var legendurl = 'http://homepages.iitb.ac.in/~akshaykore/layers/legend/';
var data = [
    
    {
        "id" : 0,
        "name":"Residential",
        "type":"static",
        "url":urlbase + "residential.svg",
        "legend": legendurl + "residential.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {
        "id" : 1,
        "name":"Commercial",
        "type":"static",
        "url":urlbase + 'commercial.svg',
        "legend": legendurl + "commercial.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 2,
        "name":"Education",
        "type":"static",
        "url":urlbase + 'education.svg',
        "legend": legendurl + "education.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 32,
        "name":"Dropouts Education",
        "legend": legendurl + "education.jpg",
        "type":"dynamic",
        "tdata":[
            {"tid":"32_1","tname":"All", "turl":urlbase + "education.svg", "tvisible":false},
            {"tid":"32_2", "tname":"< 10%", "turl":urlbase + "educationdropoutl10.svg", "tvisible":false},
            {"tid":"32_3", "tname":"> 10%", "turl":urlbase + "educationdropoutm10.svg", "tvisible":false}
        ],
        //"url":"http://localhost/~akshaykore/layer/all.png",
        "visible":false,
        "author":"MCGM",
        "value":true
    },

    {   "id" : 3,
        "name":"Medical",
        "type":"static",
        "url":urlbase + 'medical.svg',
        "legend": legendurl + "medical.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 4,
        "name":"Industrial",
        "type":"static",
        "url":urlbase + 'industrial.svg',
        "legend": legendurl + "industrial.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 5,
        "name":"26th July Floods",
        "legend": legendurl + "dynamic.jpg",
        "type":"dynamic",
        "tdata":[
            {"tid":"5_1","tname":"2:00 PM", "turl":urlbase + "26july1.gif", "tvisible":false},
            {"tid":"5_2", "tname":"2:30 PM", "turl":urlbase + "26july2.gif", "tvisible":false},
            {"tid":"5_3", "tname":"4:00 PM", "turl":urlbase + "26july3.gif", "tvisible":false}
        ],
        //"url":"http://localhost/~akshaykore/layer/all.png",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
         
    {   "id" : 6,
        "name":"Natural Areas",
        "type":"static",
        "url":urlbase + 'naturalareas.svg',
        "legend": legendurl + "naturalareas.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 7,
        "name":"Open Spaces",
        "type":"static",
        "url":urlbase + 'openspace.svg',
        "legend": legendurl + "openspace.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 8,
        "name":"Forest",
        "type":"static",
        "url":urlbase + 'forest.svg',
        "legend": legendurl + "forest.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 9,
        "name":"Swimming Pools",
        "type":"static",
        "url":urlbase + 'swimmingpool.svg',
        "legend": legendurl + "swimmingpool.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 10,
        "name":"Government Offices",
        "type":"static",
        "url":urlbase + 'governmentoffice.svg',
        "legend": legendurl + "governmentoffice.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 11,
        "name":"Law and Order",
        "type":"static",
        "url":urlbase + 'laworder.svg',
        "legend": legendurl + "laworder.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 12,
        "name":"Municipal Market",
        "type":"static",
        "url":urlbase + 'municipalmarket.svg',
        "legend": legendurl + "municipalmarket.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 13,
        "name":"Municipal Chowkies",
        "type":"static",
        "url":urlbase + 'municipalchowkies.svg',
        "legend": legendurl + "municipalchowkies.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 14,
        "name":"Municipal Office",
        "type":"static",
        "url":urlbase + 'municipaloffice.svg',
        "legend": legendurl + "municipaloffice.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 15,
        "name":"Communication",
        "type":"static",
        "url":urlbase + 'communication.svg',
        "legend": legendurl + "communication.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 16,
        "name":"Under Construction",
        "type":"static",
        "url":urlbase + 'underconstruction.svg',
        "legend": legendurl + "underconstruction.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 17,
        "name":"Urban Villages",
        "type":"static",
        "url":urlbase + 'urbanvillage.svg',
        "legend": legendurl + "urbanvillage.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 18,
        "name":"Utilities",
        "type":"static",
        "url":urlbase + 'utility.svg',
        "legend": legendurl + "utility.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 19,
        "name":"Vacant Land",
        "type":"static",
        "url":urlbase + 'vacant.svg',
        "legend": legendurl + "vacant.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 20,
        "name":"Water Bodies",
        "type":"static",
        "url":urlbase + 'waterbodiesall.svg',
        "legend": legendurl + "waterbodiesall.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 21,
        "name":"Cemetery",
        "type":"static",
        "url":urlbase + 'cemetery.svg',
        "legend": legendurl + "cemetery.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 22,
        "name":"Informal Markets",
        "type":"static",
        "url":urlbase + 'informalmarket.svg',
        "legend": legendurl + "informalmarket.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 23,
        "name":"Primary Activity",
        "type":"static",
        "url":urlbase + 'primaryactivity.svg',
        "legend": legendurl + "primaryactivity.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 24,
        "name":"Shopline",
        "type":"static",
        "url":urlbase + 'shopline.svg',
        "legend": legendurl + "shopline.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 25,
        "name":"Slum Areas",
        "type":"static",
        "url":urlbase + 'slum.svg',
        "legend": legendurl + "slum.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 26,
        "name":"Social Amenities",
        "type":"static",
        "url":urlbase + 'socialamenities.svg',
        "legend": legendurl + "socialamenities.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 27,
        "name":"Transport",
        "type":"static",
        "url":urlbase + 'transport.svg',
        "legend": legendurl + "transport.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 28,
        "name":"Road Network",
        "type":"static",
        "url":urlbase + 'roadnetwork.svg',
        "legend": legendurl + "roadnetwork.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 34,
        "name":"Classified",
        "type":"static",
        "url":urlbase + 'classified.svg',
        "legend": legendurl + "classified.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 33,
        "name":"Malaria Prone",
        "type":"static",
        "url":urlbase + 'malaria.svg',
        "legend": legendurl + "malaria.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 29,
        "name":"SPAs",
        "type":"static",
        "url":urlbase + 'spa.svg',
        "legend": legendurl + "spa.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 30,
        "name":"Planning Sectors",
        "type":"static",
        "url":urlbase + 'planningsector.svg',
        "legend": legendurl + "planningsector.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 31,
        "name":"Ward Boundary",
        "type":"static",
        "url":urlbase + 'wardboundary.svg',
        "legend": legendurl + "wardboundary.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    }

    

];
        
// This example uses a GroundOverlay to place an image on the map
// showing an antique map of Newark, NJ.

var map;

var styles =[
  {
    "stylers": [
      { "saturation": -100 },
      { "lightness": -30 },
      { "gamma": 0.38 }
    ]
  }
] ;

var changebackgroundsaturation = function(value){
    styles[0].stylers[0].saturation = value;
}

var changebackgroundlightness = function(value){
    styles[0].stylers[1].lightness = value;
}

var changebackgroundgamma = function(value){
    styles[0].stylers[2].gamma = value / 100;
}

var makedefaultstyle = function(){
    styles[0].stylers[0].saturation = -100;
    styles[0].stylers[1].lightness = -30;
    styles[0].stylers[2].gamma = 0.38;
    initMap();
}

//bounds coordinates for overlay
var swlat = 18.877702;
var swlong = 72.671814;
var nelat = 19.339653;
var nelong = 73.048096;

//center of map
var centercoordinates = {lat: 19.0861289, lng: 72.90870667};
var centerzoom = 11;

var currentcoordinates = centercoordinates;
var currentzoom =  centerzoom;

function CenterControl(controlDiv, map) {

  // Set CSS for the control border.
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#6d6a6a';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,0)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.position = 'relative';
  controlUI.style.top = '10px';
  controlUI.style.marginBottom = '10px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to recenter the map';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = '#ffffff';
  controlText.style.fontFamily = 'Source Sans Pro, sans-serif';
controlText.style.fontWeight = '300';
    
  controlText.style.fontSize = '12px';
  controlText.style.lineHeight = '40px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Center Map';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {
    currentcoordinates = centercoordinates;
    currentzoom =  centerzoom;
    map.setCenter(currentcoordinates);
    map.setZoom(currentzoom);
  });
    
controlUI.addEventListener('mouseover', function() {
    controlUI.style.boxShadow = '0 2px 6px rgba(100, 100, 100, 0.35)';
    controlUI.style.backgroundColor = '#4cbeff';
  });
controlUI.addEventListener('mouseout', function() {
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,0)';
    controlUI.style.backgroundColor = '#6d6a6a';
  });

}


//event listener submit button. callback initMap function

function initMap() {
    
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: currentzoom,
    center: currentcoordinates,
    disableDefaultUI: true,
    scaleControl: true,
    mapTypeControl: true,
        
    mapTypeControlOptions: {
      
      mapTypeIds: [
        
        'map_style',  
        google.maps.MapTypeId.SATELLITE,
        google.maps.MapTypeId.TERRAIN  
        
      ],
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.RIGHT_BOTTOM
    } 
  });
    
    var styledMap = new google.maps.StyledMapType(styles,
    {name: "Custom View"});
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    
    map.addListener('center_changed', function() {
    currentcoordinates = map.getCenter();
    });
    
    map.addListener('zoom_changed', function() {
    currentzoom = map.getZoom();
    });
    
    var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map);

    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

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
    if(data[i].type === "dynamic"){
        var m = data[i].tdata;
        var tdatalenght = m.length;
        for(var j = 0; j<tdatalenght; j++){
            overlayurl.push(m[j].turl); //alert(m[j].turl);
            overlayname.push(m[j].tname); //alert(m[j].tname);
            overlayvisible.push(m[j].tvisible); //alert(m[j].tvisible);
        }
        //alert("dynamic");
    }
    else if (data[i].type === "static"){
        overlayurl.push(data[i].url); 
        overlayname.push(data[i].name);
        overlayvisible.push(data[i].visible);
        //alert(data[i].url);
        //alert(data[i].name);
        //alert(data[i].visible);
    }
    
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
        checkbox.className = "checkboxstyle";
        checkbox.id = listelement.name;
        checkbox.checked = false;
    var nameofelementdiv = document.createElement("div");
        nameofelementdiv.id = 'elementname';
    var nameofelement = document.createTextNode(listelement.name);
    var image = document.createElement("img");
        image.setAttribute("src", listelement.legend);
        image.setAttribute("width", "40");
        image.setAttribute("height", "20");
        image.setAttribute("alt", listelement.name);
        image.id = "legendstyle";
    
    node.appendChild(checkbox);
    nameofelementdiv.appendChild(nameofelement);
    node.appendChild(nameofelementdiv);
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
        
        if(foo.type === "dynamic"){
            var a = foo.tdata;
            a[0].tvisible = true;
        
        }
        
        else if (foo.type === "static"){
            foo.visible = true;
        }
            
        foo.value = false;
        //alert("checked: " + foo.name + " " + foo.visible);
        //console.log(foo.visible);

        
            
    }
    else{
        
        if(foo.type === "dynamic"){
            var a = foo.tdata;
            var tdatalength = a.length;
            for(var f = 0; f<tdatalength; f++){
            a[f].tvisible = false;
            }
            
        
        }
        
        else if (foo.type === "static"){
            foo.visible = false;
        }
            
        
        
        foo.value = true;
        
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
        checkbox.className = "checkboxstyle";
        checkbox.id = createcontrollistelement.name + "_id";
        checkbox.checked = true;
    var nameofelementdiv = document.createElement("div");
        nameofelementdiv.id = 'elementname';
    var nameofelement = document.createTextNode(createcontrollistelement.name);
    var image = document.createElement("img");
        image.setAttribute("src", createcontrollistelement.legend);
        image.setAttribute("width", "40");
        image.setAttribute("height", "20");
        image.setAttribute("alt", createcontrollistelement.name);
        image.id = "legendstyle";
    var removebutton = document.createElement("DIV");
        removebutton.className = "closebutton";
        removebutton.id = createcontrollistelement.name + "_removebutton";
        
    nameofelementdiv.appendChild(nameofelement);
    node.appendChild(checkbox);
    node.appendChild(nameofelementdiv);
    node.appendChild(removebutton);
    node.appendChild(image);
    
    
    document.getElementById("layer").appendChild(node); 
}

var createtimelinebutton = function(timelineelement){
    var timelinediv = document.createElement("DIV");
        timelinediv.id = "timelinediv";
    var timelinebutton = document.createElement("input");
        timelinebutton.type = "checkbox";
        timelinebutton.name = "kore";
        timelinebutton.value = timelineelement.tname;
        timelinebutton.id = timelineelement.tname +"_" + timelineelement.tid + "_id";
    var timelineinnertext = document.createTextNode(timelineelement.tname);
    var timelineinnertextdiv = document.createElement("div");
        timelineinnertextdiv.id = "timelineinnertextdiv";
        timelinediv.appendChild(timelinebutton);
        timelineinnertextdiv.appendChild(timelineinnertext);
        timelinediv.appendChild(timelineinnertextdiv);
    document.getElementById("floating-panel").appendChild(timelinediv);
        
}

var timelinebuttonlistener = function(foo){    
    //alert(foo.tname);
    var timelinebuttoncheck = document.getElementById(foo.tname + "_" + foo.tid + "_id");
    //alert(timelinebuttoncheck);
    timelinebuttoncheck.addEventListener("click", function ontimelinebuttonclick(){
        //alert(foo.tname);
        if(timelinebuttoncheck.checked === true){
            foo.tvisible = true;
            
        }
        else {foo.tvisible = false;}
        
        initMap();
    });
}

var createcontrollist = function(){
    
    function removechildnodes(){
    var myNode = document.getElementById("layer");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
    var myNode2 = document.getElementById("floating-panel");
    while (myNode2.firstChild) {
    myNode2.removeChild(myNode2.firstChild);
    }
    }
    
    removechildnodes();
    
    for(var i = 0; i < data.length; i++){
        if (data[i].value === false){  ///checks for value in data json            
            createcontrollistelement(data[i]);
            checkboxcontrollistener(data[i]);
            if(data[i].type === "dynamic"){
                var b = data[i].tdata;
                var tdatalength = b.length; //alert(tdatalength);
                for(var t = 0; t<tdatalength; t++){
                    createtimelinebutton(b[t]);
                    timelinebuttonlistener(b[t]);
                    
                    
                }
                
                
            }
            //data[i].visible = true;
            removelayer(data[i]);
            //createtimelinebutton();
            
            
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
        if(foo.type === "dynamic"){
            var a = foo.tdata;
            a[0].tvisible = true;
            var tdatalength = a.length; //alert(tdatalength);
            for(var t = 0; t<tdatalength; t++){
                    createtimelinebutton(a[t]);
                    timelinebuttonlistener(a[t]);
                }
        
        }
        
        else if (foo.type === "static"){
            foo.visible = true;
        }
        //alert("checked: " + foo.name + " " + foo.visible);
        //console.log(foo);
            
    }
    else{
        if(foo.type === "dynamic"){
            var a = foo.tdata;
            var tdatalength = a.length;
            for(var f = 0; f<tdatalength; f++){
            a[f].tvisible = false;
            }
            function removechildnodes(){
            var myNode2 = document.getElementById("floating-panel");
                while (myNode2.firstChild) {
                    myNode2.removeChild(myNode2.firstChild);
                }
            }
            
            removechildnodes();
            
        
        }
        
        else if (foo.type === "static"){
            foo.visible = false;
        }
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
        if(foo.type === "dynamic"){
            var a = foo.tdata;
            var tdatalength = a.length;
            for(var f = 0; f<tdatalength; f++){
            a[f].tvisible = false;
            }
            
        
        }
        
        else if (foo.type === "static"){
            foo.visible = false;
        }
        foo.value = true;
        createcontrollist();
        initMap();
    });
}


