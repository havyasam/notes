const container = document.getElementById("main");
const btn = document.getElementById("btn");

// Event listener: Triggered when "Add Note" button is clicked
btn.addEventListener("click", addText);

// Load notes from localStorage when the page loads
loadNotesFromLocalStorage();

// Function: Add a new note with a textarea
function addText() {
    // Create a new <div> element for the note
    let note = document.createElement("div");
    note.innerHTML = `
        <div id="logo">
            <i class="fa-regular fa-pen-to-square">notes</i>
            <div class="notes">
                <i class="fa-solid fa-trash"></i>
                <textarea class="hello" name="" id="text" cols="30" rows="10"></textarea>
            </div>
        </div>`;

    // Find the trash icon within the note
    const trash = note.querySelector(".fa-trash");

    // Event listener: Triggered when the trash icon is clicked
    trash.addEventListener("click", () => {
        note.remove();
    });

    // Add the note to the container
    container.appendChild(note);

    // Find the textarea within the note
    const textarea = note.querySelector('textarea');

    // Load saved content from localStorage
    const savedContent = localStorage.getItem('note_' + Date.now());
    if (savedContent) {
        textarea.value = savedContent;
    }

    // Event listener: Triggered when the content of the textarea changes
    textarea.addEventListener('input', () => {
        const content = textarea.value;
        localStorage.setItem('note_' + Date.now(), content); // Save content to localStorage
    });
}

// Function: Load saved content from localStorage for all textareas
function loadNotesFromLocalStorage() {
    const notes = document.querySelectorAll(".note textarea");
    notes.forEach((textarea, index) => {
        const savedContent = localStorage.getItem('note_' + (index + 1));
        if (savedContent) {
            textarea.value = savedContent;
        }
    });
  }