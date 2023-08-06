const container=document.getElementById("main")
const btn=document.getElementById("btn")

btn.addEventListener("click",addtext)

function addtext(){
  let note=document.createElement("div")
  note.innerHTML=`<div id="logo">
  <i class="fa-regular fa-pen-to-square">notes</i>

  <div id="notes">
      <i onclick="fun()"class="fa-solid fa-trash"></i>
      <textarea name="" id="text" cols="30" rows="10"></textarea>

  </div>`
 
 
  
  container.appendChild(note)
 
  
  
  
}
function fun(){
  const dele=document.getElementById("delet")
  container.removeChild(container.lastElementChild);
}

