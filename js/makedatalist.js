var dataset = [
    {"id" : 0,
        "name":"Existing Land Use Ward A Part 1",
        "type":"PDF",
        "url":"http://akshaykore.github.io/mumbaidata" + "/layer/residential.png",
        "author":"MCGM",
        "year":"1992"},
    {"id" : 0,
        "name":"Ward A Part 2",
        "type":"PDF",
        "url":"http://akshaykore.github.io/mumbaidata" + "/layer/residential.png",
        "author":"MCGM",
        "year":"1992"}
];




var createdatasetelement = function(element){
    var li = document.createElement('LI');
    
    var a = document.createElement('a');
        a.href = dataset[element].url;
        a.target = '_blank';
    
    var div = document.createElement('DIV');
        div.id = 'datasetdiv';
    
    var pname = document.createElement('p');
        pname.className = 'name';
        pname.setAttribute = ('class', 'name');
    var pnametext = document.createTextNode(dataset[element].name);
        pname.appendChild(pnametext);
    
    var pauthor = document.createElement('p');
        pauthor.className = 'author';
    var pauthortext = document.createTextNode(dataset[element].author);
        pauthor.appendChild(pauthortext);
    
    var pyear = document.createElement('p');
        pyear.className = 'year';
    var pyeartext = document.createTextNode(dataset[element].year);
        pyear.appendChild(pyeartext);
    
    var ptype = document.createElement('p');
        ptype.className = 'type';
    var ptypetext = document.createTextNode(dataset[element].type);
        ptype.appendChild(ptypetext);
    
    div.appendChild(pname);
    div.appendChild(pauthor);
    div.appendChild(pyear);
    div.appendChild(ptype);
    
    a.appendChild(div);
    
    li.appendChild(a);
    
    document.getElementById("datasetlist").appendChild(li);
    
    
}


var datasetlenght = dataset.length;

var makedatalist = function(){
    
    for (var i = 0; i<datasetlenght; i++){
        createdatasetelement(i);
        }
    
}