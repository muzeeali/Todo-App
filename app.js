
 var list=document.getElementById("list")


function addTodo(){
    
    var todo=document.getElementById("todo")
    var li=document.createElement("li")
   var liText =document.createTextNode(todo.value)
  

  


// edit button


   var editB=document.createElement("button")
   var editText=document.createTextNode("EDIT")
   editB.appendChild(editText)
   editB.setAttribute("class", "btn")
   editB.setAttribute("onclick", "edit(this)")


//    del button 

   var delB=document.createElement("button")
   var delText=document.createTextNode("DELETE")
   delB.appendChild(delText)
   delB.setAttribute("class", "btn")
   delB.setAttribute("onclick", "del(this)")


   li.appendChild(liText)
   list.appendChild(li)
   li.appendChild (editB)
   li.appendChild(delB)
   
  
    todo.value=""
}
function del(e){
    e.parentNode.remove()
}
function dellAll(){
    list.innerHTML=""
}
function edit(e){
  var val=  e.parentNode.firstChild.nodeValue;
 var newValue= prompt("Enter new value",val)
 e.parentNode.firstChild.nodeValue=newValue


}