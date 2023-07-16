const studentContainer = document.getElementById('student-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Sample student data
const students = [
    { name: 'Theophilus Nkrumah', room: 'Dubai',course: 'ES-300', image: 'theo.jpg' },
    { name: 'Jane Smith', room: 'Novotel',course: 'CE-200', image: 'jane.jpg' },
    // Add more student objects as needed
];

// Function to generate the HTML for a student card
function createStudentCard(student) {
    const card = document.createElement('div');
    card.classList.add('student-card');

    const image = document.createElement('img');
    image.src = student.image;
    card.appendChild(image);

    const name = document.createElement('h2');
    name.textContent = student.name;
    card.appendChild(name);

    const room = document.createElement('p');
    room.textContent = `Room: ${student.room}`;
    card.appendChild(room);

    const course = document.createElement('p');
    course.textContent = `Course: ${student.course}`;
    card.appendChild(course);

    return card;
}

// Function to find a student based on the search query
function findStudent(query) {
    const foundStudent = students.find(student =>
        student.name.toLowerCase() === query.toLowerCase()
    );
    return foundStudent;
}

// Function to render the student card
function renderStudentCard(student) {
    studentContainer.innerHTML = '';

    if (!student) {
        studentContainer.textContent = 'No student found.';
        return;
    }

    const card = createStudentCard(student);
    card.classList.add('student-page'); // Add the student-page class
    studentContainer.appendChild(card);

}

// Event listener for search button click
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    const student = findStudent(query);
    renderStudentCard(student);
});

// Event listener for Enter key press in search input
searchInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        const query = searchInput.value.trim();
        const student = findStudent(query);
        renderStudentCard(student);
    }
});




