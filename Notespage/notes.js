// Script to toggle between notes display and upload form
const newNotesTab = document.getElementById('new-notes-tab');
const uploadForm = document.getElementById('upload-form');
const notesDisplay = document.getElementById('notes-display');

newNotesTab.addEventListener('click', () => {
    uploadForm.classList.toggle('hidden');
    notesDisplay.classList.toggle('hidden');
});
