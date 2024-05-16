/*function zoomIn(object){
    var list=document.getElementsByClassName("img");
    list = [].slice.call(list);

    var img = list.indexOf(object);
    alert(img);
};

document.getElementsByClassName('img').addEventListener('click', zoomIn(this));

var list=document.getElementsByClassName("img");
list = [].slice.call(list); 

function getPosition(label)
    {
       alert(list.indexOf(label));
    }
    */

var zoomies = document.getElementsByClassName("img");
//zoomies.addEventListener('click', zoomIn(Element));



function zoomIn(object){
    alert("xyz");
    //var e = object.target
    //e.classList.add("zoomed");
}

for (var i = 0; i < zoomies.length; i++) {
    zoomies[i].addEventListener('click', zoomIn(), false);
}

function xyz(event){
    event.classList.toggle("zoomed");
}