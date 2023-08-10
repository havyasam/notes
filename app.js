const container=document.queryselector("#main")
const btn=document.querySelector("#btn")

btn.addEventListener("click",addNote)

function addNote(){
  const note=document.createElement("div")
  note.classList.add("note")
  note.innerHTML=`    <div  id="main">
  <i class="fa-regular fa-pen-to-square">notes</i>
  <div class="note">
  <div class="tool">
      <i class="fa-solid fa-save"></i>
      <i   class="fa-solid fa-trash"></i>
      </div>
      <textarea name="" id="" cols="30" rows="10"></textarea>

  </div>

</div>

</div>`;


  const save=note.querySelector(".save")
  const trash=note.querySelector(".fa-trash") 
  const textarea=note.querySelector('textarea');

  save.addEventListener("click",saveNotes)
  textarea.addEventListener("input",saveNotes)
  trash.addEventListener("click",()=>{
    note.remove()
    saveNotes()
  })


  container.appendChild(note)
 
 
}
function saveNotes(){

const notes=document.querySelectorAll(".note textarea")
const data=Array.from(notes).map(note=>note.value)
console.log(notes,data)

if(data.length===0){
  localStorage.removeItem("notes");

}
else
localStorage.setItem("notes",JSON.stringify(data))
}

function loadNotes(){
  const lsNotes=JSON.parse(localStorage.getItem("notes"))
  if(lsNotes!==null){
    lsNotes.forEach(noteText=>{
      addNote()
      const notes=document.querySelectorAll(".note textarea")
      const lastNote=notes[notes.length-1]
      lastNote.value=noteText
    })
  }
  else{
  addNote()
  }

}
loadNotes()

