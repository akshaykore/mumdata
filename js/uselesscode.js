/*
var controldatalength = data.length;

var controldatacontainer = [];


*/

//Refresh list
/*
function removechildnodes(){
    var myNode = document.getElementById("datalist");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
}


//var checkbox = [];




/*
function createdatasetlist(){
    for(var i = 0; i < controldatalength; i++){
        if(data[i].value === true){
                checkbox.push("checkbox_" + data[i].id);
            var node = document.createElement("div");
                node.id = "controldataset";
                checkbox[i] = document.createElement("input");
                checkbox[i].type = "checkbox";
                checkbox[i].id = data[i].name + "_controlcheckbox";
                checkbox[i].checked = false;
                //alert("checking inside: " + data[i].value);
                checkbox[i].onchange = function(){
                                            /*for(var n = 0; n < controldatacontainer.length; n++)
                                            {
                                                if (controldatacontainer[n].id === data[i].id){break;}
                                            }*/
                                            /*
                                            if(checkbox[i].checked)
                                            {
                                                data[i].value = false;
                                                //controldatacontainer.push(data[i]);
                                                //alert("add: " + controldatacontainer.length);
                                                alert("data[i]: " + controldatacontainer.length);
                                            }
                                            
                                            
                                            }
                var textnode = document.createTextNode(data[i].name);
                    textnode.id = "textnode";
                var image = document.createElement("img");
                    image.setAttribute("src", "img_pulpit.jpg");
                    image.setAttribute("width", "5");
                    image.setAttribute("height", "5");
                    image.setAttribute("alt", data[i].name);
            
                
                node.appendChild(checkbox[i]);
                node.appendChild(textnode);
                node.appendChild(image);
    
                document.getElementById("datalist").appendChild(node);  
            
        }
        
        /*function removeduplicate(){
        for(var n = 0; n < controldatacontainer.length; n++)
        {   
            for(var m = 0; m < controldatacontainer.length; m++)
            if (controldatacontainer[n].id === controldatacontainer[m].id)
        {
        controldatacontainer.splice(m,1);
         alert("remove: " + controldatacontainer.length);
        }
                                                    
        }
        }*/
        
        
        
    
    }
    
}


/*function removeduplicates(){
    for(var n = 0; n < controldatacontainer.length; n++)
     {   for(var m = n+1; m < controldatacontainer.length; m++)
          {
            if (controldatacontainer[n] === controldatacontainer[m])
               {
                  controldatacontainer.splice(n,1);
                 //alert("remove: " + controldatacontainer.length);
                }
              else 
              {
                  break;
              }
                                                    
            }
                                                    
                                                    
    }
    alert("remove: " + controldatacontainer.length);

}*/

/*function show(){
    
var final = removeduplicates();

for (var f = 0; f < final; f++){
    alert(final[f]);
    console.log(controldatacontainer[f].name);
}
    
}



//alert(finalcontroldatacontainer.length);
*/
/*
function removeduplicates(){
    var tempObj = {};
    var s = 1;
    if(arr == null)
    {
        alert('sorry DOM cannot be found');
        return false;    
    }
    for(var v = 0; v < controldatacontainer.length; v++){
        tempObj[controldatacontainer[v]] = s;
        s++;
    }
    var final = [];
    for(var key in tempObj){
        final.push(key);
    }
    
    console.log("lol!!");
    console.log(controldatacontainer.length);
} 

*/

    
/*
var dataname = []; //all names of datasets needed for lightbox

var datajsonlength = data.length;

function pushname(){

    for(var i = 0; i<datajsonlength; i++){
    if (data[i].value = true){
    dataname.push(data[i].name);
    }
    else{null;}
    
}

}

pushname();



console.log("dataname: " + dataname.length);

var datanamelength = dataname.length;


    function createdatasetlist() {
    for (var i = 0; i<datanamelength; i++){
        if (data[i].value = true){
        var node = document.createElement("div");
        node.id = "lightboxdata";
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = dataname[i] + "_checkbox";
        checkbox.value = data[i].id;
        checkbox.checked = false;
        checkbox.onchange = function(){
                                        if(this.checked)
                                        {   if (data[checkbox.value].value = 0 ){ null; }
                                            else if (data[checkbox.value].value = 1){
                                                temp.push(data[checkbox.value]);
                                                data[checkbox.value].value = 0;
                                                
                                            }
                                            
                                            alert(temp.length);}
                                        
                                        else {null;}
                                        }
    var textnode = document.createTextNode(dataname[i]);
    node.appendChild(checkbox);
    node.appendChild(textnode);
    document.getElementById("datalist").appendChild(node);
        
        }
    
                                        }
                                }


    
*/

