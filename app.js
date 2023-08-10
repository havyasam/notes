const container=document.queryselector("main")
const btn=document.querySelector("btn")

btn.addEventListener("click",addtext)

function addtext(){
  let note=document.createElement("div")
  note.classList.add("note")
  note.innerHTML=`<div id="logo">
  <i class="fa-regular fa-pen-to-square">notes</i>

  <div id="notes">
      <i  class="fa-solid fa-trash"></i>
      <textarea class="hello" name="" id="text" cols="30" rows="10"></textarea>

  </div>`


  const save=note.querySelector(".save")
  const trash=note.querySelector(".fa-trash") 
  const textarea=note.querySelector('textarea');


  container.appendChild(note)
 
 
}
function saveNotes(){

const notes=document.querySelectorAll(".note textarea")
const data=Array.from(notes).map(note=>note.value)
console.log(notes,data)
}

