// Select DOM elements
const newNotesTab = document.getElementById('new-notes-tab');
const uploadForm = document.getElementById('upload-form');
const notesDisplay = document.getElementById('notes-display');
const addClassBtn = document.getElementById('add-class-btn');
const addNotesBtn = document.getElementById('add-notes-btn');
const homeTitle = document.querySelector('.notes-header h2');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

// Handle "New Notes" tab click
newNotesTab.addEventListener('click', () => {
    notesDisplay.classList.toggle('hidden');
    uploadForm.classList.toggle('hidden');
    addClassBtn.classList.toggle('hidden');
    addNotesBtn.classList.toggle('hidden');
    homeTitle.classList.toggle('hidden');

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
