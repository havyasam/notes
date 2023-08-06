const container=document.getElementById("main")
const btn=document.getElementById("btn")

btn.addEventListener("click",addtext)

function addtext(){
  let note=document.createElement("div")
  note.innerHTML=`<div id="logo">
  <i class="fa-regular fa-pen-to-square">notes</i>

  <div id="notes">
      <i  class="fa-solid fa-trash"></i>
      <textarea name="" id="text" cols="30" rows="10"></textarea>

  </div>`
 const trash=note.querySelector(".fa-trash")
 
  trash.addEventListener("click",()=>{
    note.remove()
  })
  
  container.appendChild(note)
 
  
  
  
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode")
}