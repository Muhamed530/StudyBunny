// Select the upload form and the new notes tab
const uploadForm = document.getElementById('upload-form');
const newNotesTab = document.getElementById('new-notes-tab');
const notesDisplay = document.getElementById('notes-display');
const classA = document.getElementById('class-a-btn');

// Add click event listener to the new notes tab
newNotesTab.addEventListener('click', () => {
    notesDisplay.classList.toggle('hidden');
    // Toggle the 'hidden' class on the upload form
    uploadForm.classList.toggle('hidden');
    
    // Optional: Change button text based on form visibility
    if (uploadForm.classList.contains('hidden')) {
        newNotesTab.textContent = '+ New Notes'; // Reset to original text
    } else {
        newNotesTab.textContent = 'Back'; // Change text when form is visible
    }
});

uploadForm.addEventListener('submit', function(event) {
    const textInput = document.getElementById('text-input').value.trim();
    const fileInput = document.getElementById('file-input').files.length;

    // Check if both inputs are empty or both are filled
    if (textInput === '' && fileInput === 0) {
        event.preventDefault(); // Prevent form submission
        alert('Please provide either a note description or a file');
    }
});


// Class A button click event
classA.addEventListener('click', function() {
    // Clear previous content in notesDisplay
    notesDisplay.innerHTML = ''; // Clear any previous content

    // Create and append the study methods container
    const studyMethodsContainer = document.createElement('div');
    studyMethodsContainer.id = 'study-methods';
    studyMethodsContainer.classList.add('notes-section');
    studyMethodsContainer.innerHTML = `
        <h3>Study Methods and Habits</h3>
        <ul>
            <li><strong>Method 1:</strong> Active Recall - Test yourself regularly.</li>
            <li><strong>Method 2:</strong> Spaced Repetition - Review material at increasing intervals.</li>
            <li><strong>Method 3:</strong> Pomodoro Technique - Study for 25 minutes, then take a 5-minute break.</li>
            <li><strong>Method 4:</strong> Summarization - Write summaries of what you've learned.</li>
        </ul>
    `;
    notesDisplay.appendChild(studyMethodsContainer);

    // Create and append the notes container
    const notesContainer = document.createElement('div');
    notesContainer.id = 'notes';
    notesContainer.classList.add('notes-section');
    notesContainer.innerHTML = `
        <h3>Class A Notes</h3>
        <ul>
            <li><strong>Note 1:</strong> Introduction to Class A topics.</li>
            <li><strong>Note 2:</strong> Important concepts covered in the first week.</li>
            <li><strong>Note 3:</strong> Key takeaways from the latest lecture.</li>
            <li><strong>Note 4:</strong> Sample problems and solutions.</li>
        </ul>
    `;
    notesDisplay.appendChild(notesContainer);
});