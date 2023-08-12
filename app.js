const main=document.querySelector("#main")
const addbtn=document.querySelector("#btn")

addbtn.addEventListener("click",addNote)

function addNote(){
  const note=document.createElement("div");
  note.classList.add("note");
  note.innerHTML=`<div class="tool">
          <i class="save fa-solid fa-save"></i>
          <i   class=" trash fa-solid fa-trash"></i>
      </div>
      <textarea name="" id="" cols="30" rows="10"></textarea>`
 ;

const save=note.querySelector(".save")
const trash=note.querySelector(".trash")
const textarea=note.querySelector("textarea")

save.addEventListener("click",saveNotes)
textarea.addEventListener("input",saveNotes)
trash.addEventListener("click",()=>{
  note.remove();
  saveNotes()
})

  main.appendChild(note)
 
}
function saveNotes(){
  const notes=document.querySelectorAll(".note textarea")
  const data=Array.from(notes).map(note=>note.value)
  console.log(notes,data)

  if(data.length===0){
    localStorage.removeItem("notes")
  }
  else{
    localStorage.setItem("notes",JSON.stringify(data))

  }

}
function loadNotes(){
  const lsNotes=JSON.parse(localStorage.getItem("notes"))
  if(lsNotes!==null){
    lsNotes.forEach(noteText=>{
      addNote()
      const notes=document.querySelectorAll(".note textarea")
      const lastNote=notes[notes.length-1]
      lastNote.value=noteText;
    })
  }
  else{
    addNote()

  }
}
loadNotes()

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}