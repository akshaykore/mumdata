        




var data = [
    
    {
        "id" : 0,
        "name":"residential",
        "url":"http://localhost/~akshaykore/layer/residential.png",
        "visible":true,
        "author":"MCGM",
        "value":true
    },
    
    {
        "id" : 1,
        "name":"commercial",
        "url":"https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 2,
        "name":"name1",
        "url":"http://localhost/~akshaykore/layer/industrial.png",
        "visible":false,
        "author":"MCGM",
        "value":true
    },

    {   "id" : 3,
        "name":"name2",
        "url":"http://localhost/~akshaykore/layer/residential.png",
        "visible":false,
        "author":"MCGM",
        "value":true
    },
    
    {   "id" : 4,
        "name":"name3",
        "url":"http://localhost/~akshaykore/layer/all.png",
        "visible":false,
        "author":"MCGM",
        "value":true
    }

    

];

var temp = [
    
    {
        "id" : 0,
        "name":"residential",
        "url":"https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg",
        "visible":false,
        "author":"MCGM",
        "value":false
    },
    
    {
        "id" : 1,
        "name":"commercial",
        "url":"https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg",
        "visible":false,
        "author":"MCGM",
        "value":false
    },
    
    {   "id" : 2,
        "name":"name1",
        "url":"http://localhost/~akshaykore/layer/industrial.png",
        "visible":true,
        "author":"MCGM",
        "value":0
    },

    {   "id" : 3,
        "name":"name2",
        "url":"http://localhost/~akshaykore/layer/residential.png",
        "visible":true,
        "author":"MCGM",
        "value":false
    },
    
    {   "id" : 4,
        "name":"name3",
        "url":"http://localhost/~akshaykore/layer/all.png",
        "visible":false,
        "author":"MCGM",
        "value":false
    }

    

];


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
        alert("checked: " + foo.name + " " + foo.visible);
        console.log(foo.visible);

        
            
    }
    else{
        
        foo.value = true;
        foo.visible = false;
        alert("unchecked: " + foo.name + " " + foo.visible);
        console.log(foo.visible);
        

    }
        
    });

        
}




/*

document.getElementById("cl").addEventListener("click", function myclick(){
    alert("hello yo"); 
});

*/

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
        image.setAttribute("src", listelement.url);
        image.setAttribute("width", "5");
        image.setAttribute("height", "5");
        image.setAttribute("alt", listelement.name);
        image.id = "legendstyle";
    
    node.appendChild(checkbox);
    node.appendChild(nameofelement);
    node.appendChild(image);
    
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






///reloads iframe
function reload() {
    document.getElementById('mframe').src += '';
} 


//map//


