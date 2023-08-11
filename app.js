const container=document.querySelector("#main")
const addbtn=document.querySelector("#btn")

addbtn.addEventListener("click",addNote)

function addNote(){
  const note=document.createElement("div");
  note.classList.add("note");
  note.innerHTML=`<div class="tool">
          <i class="fa-solid fa-save"></i>
          <i   class="fa-solid fa-trash"></i>
      </div>
      <textarea name="" id="" cols="30" rows="10"></textarea>`
 ;


 


  container.appendChild(note)
 
 
}
