var h = ($( window ).height()) - 100;
       
    $(document).ready(function(){
    $("datalist").css({"height" : h, "width" : "100%", "float" : "left", "padding" : "0px", "border" : "0px", "position":"relative"});
    });

var mapIframe = document.getElementById("mframe").contentWindow;
//mapIframe = inside iframe//

var mapframe = mapIframe.document.getElementById("layer");
//mapframe = inside mapframe html you can do any changes from here//


    
    

