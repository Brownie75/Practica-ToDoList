//boton de cerrar para las listas
var nodeList = document.getElementsByClassName("elemento d-flex");
var textito = document.getElementById("textito");
var completed = document.getElementById("completed");
var pending = document.getElementById("pending");

for(let i = 0; i < nodeList.length; i++){
    var span = document.createElement("button");
    var txt = "\u00d7";

    span.className = "btn btn-danger";
    span.innerText= txt;
    nodeList[i].appendChild(span);
}

//cerrar el elemento
var close = document.getElementsByClassName("btn btn-danger rounded-0 w-25");
for(let i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector("ul");
list.addEventListener("click",function(ev){
    if(ev.target.tagName === "LI"){
        ev.target.parentElement.classList.toggle("checked")
        ev.target.classList.toggle("list-group-item-dark");
        ev.target.classList.toggle("text-decoration-line-through");
        completed.innerHTML = "Tareas completadas: "+countList();
        pending.innerHTML = "Tareas pendientes: "+notChecked();
    }
}, false);



function newElement() {
  textito.style.display = "none";
  var section = document.createElement("div");
  section.className = "elemento d-flex"
  var li = document.createElement("li");
  var inputValue = document.getElementById("taskInput").value;
  //text element
  var t = document.createTextNode(inputValue);

  //list
  li.className = "list-group-item cursor-pointer w-75 align-content-center";
  li.role = "button"
  li.style.height = "50px";
  li.appendChild(t);
  section.appendChild(li);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("todolist").appendChild(section);
    completed.innerHTML = "Tareas completadas: "+countList();
    pending.innerHTML = "Tareas pendientes: "+notChecked();
  }
  document.getElementById("taskInput").value = "";
  
  
    var span = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    span.className = "btn btn-danger rounded-0 w-25";
    span.appendChild(txt);
    section.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.parentElement.removeChild(div);
      completed.innerHTML = "Tareas completadas: "+countList();
      pending.innerHTML = "Tareas pendientes: "+notChecked();
      emptyList();
    }
  }
  
  }
function countList(){
    var count = 0;
    for (i = 0; i < nodeList.length; i++) {
      count += (nodeList[i].className == "elemento d-flex checked" && nodeList[i].style.display === "") ? 1 : 0;
    }
    return count;
  }
function notChecked(){
  var count = 0;
    for (i = 0; i < nodeList.length; i++) {
      count += (nodeList[i].className == "elemento d-flex" && nodeList[i].style.display === "") ? 1 : 0;
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
