// Select DOM elements
const newNotesTab = document.getElementById('new-notes-tab');
const uploadForm = document.getElementById('upload-form');
const notesDisplay = document.getElementById('notes-display');
const addClassBtn = document.getElementById('add-class-btn');
const addNotesBtn = document.getElementById('add-notes-btn');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');
const exampleNotes = document.getElementById('example-notes');
const studyMethodsSection = document.getElementById('study-methods');

// Initially hide the upload form
uploadForm.classList.add('hidden');

notesDisplay.classList.toggle('hidden');

// Handle "New Notes" tab click
newNotesTab.addEventListener('click', () => {
    notesDisplay.classList.toggle('hidden');
    uploadForm.classList.toggle('hidden'); // Show/hide upload form
    addClassBtn.classList.toggle('hidden'); // Hide add class button when showing upload form
    addNotesBtn.classList.toggle('hidden'); // Hide add notes button when showing upload form

    // Toggle button text
    newNotesTab.textContent = uploadForm.classList.contains('hidden')
        ? '+ New Notes'
        : 'Back';
});

// Handle form validation on submission
uploadForm.addEventListener('submit', (event) => {
    const textInput = document.getElementById('text-input').value.trim();
    const fileInput = document.getElementById('file-input').files.length;

    if (!textInput && fileInput === 0) {
        event.preventDefault();  // Prevent submission if inputs are empty
        alert('Please provide either a note description or a file.');
    }
});

// Handle sidebar toggle
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    sidebarToggle.textContent = sidebar.classList.contains('collapsed') ? '→' : '←';
});

// Handle "Class A" tab click
document.getElementById('class-a-btn').addEventListener('click', () => {
    // Hide the notes display and upload form
    notesDisplay.classList.add('hidden');
    uploadForm.classList.add('hidden');
    
    // Show the example notes
    exampleNotes.classList.remove('hidden');
    studyMethodsSection.classList.remove('hidden');

    // Optionally, hide the buttons
    addClassBtn.classList.add('hidden');
    addNotesBtn.classList.add('hidden');

    // Reset the new notes tab text
    newNotesTab.textContent = '+ New Notes';
});
