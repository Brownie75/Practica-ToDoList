//boton de cerrar para las listas
var nodeList = document.getElementsByTagName("LI");
var textito = document.getElementById("textito");
var completed = document.getElementById("completed");
var pending = document.getElementById("pending");

for(let i = 0; i < nodeList.length; i++){
    var span = document.createElement("SPAN");
    var txt = "\u00d7";

    span.className = "close";
    span.innerText= txt;
    nodeList[i].appendChild(span);
}

//cerrar el elemento
var close = document.getElementsByClassName("close");
for(let i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector("ul");
list.addEventListener("click",function(ev){
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle("checked");
        completed.innerHTML = "Tareas completadas: "+countList();
        pending.innerHTML = "Tareas pendientes: "+notChecked();
    }
}, false);


function newElement() {
  textito.style.display = "none";
  var li = document.createElement("li");
  var inputValue = document.getElementById("taskInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("todolist").appendChild(li);
    completed.innerHTML = "Tareas completadas: "+countList();
    pending.innerHTML = "Tareas pendientes: "+notChecked();
  }
  document.getElementById("taskInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        completed.innerHTML = "Tareas completadas: "+countList();
        pending.innerHTML = "Tareas pendientes: "+notChecked();
        emptyList();
      }
    }
  }
function countList(){
    var count = 0;
    for (i = 0; i < nodeList.length; i++) {
      count += (nodeList[i].className == "checked" && nodeList[i].style.display === "") ? 1 : 0;
    }
    return count;
  }
function notChecked(){
  var count = 0;
    for (i = 0; i < nodeList.length; i++) {
      count += (nodeList[i].className == "" && nodeList[i].style.display === "") ? 1 : 0;
    }
    return count;
}
function emptyList(){
    var band = true;
    for (i = 0; i < nodeList.length; i++) {
      if (nodeList[i].style.display == "") {
        band = false;
        break;
      }
    }
    if(band == true) textito.style.display = "";
  }
