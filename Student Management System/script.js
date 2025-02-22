let students = [];
let editingIndex = -1;

document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let rollNumber = document.getElementById("rollNumber").value.trim();
    let name = document.getElementById("name").value.trim();
    let gender = document.getElementById("gender").value;
    let standard = document.getElementById("standard").value.trim();
    let dob = document.getElementById("dob").value;

    if (!rollNumber || !name || !standard || !dob) {
        alert("All fields are required!");
        return;
    }

    if (editingIndex === -1) {
        students.push({ rollNumber, name, gender, standard, dob });
    } else {
        students[editingIndex] = { rollNumber, name, gender, standard, dob };
        editingIndex = -1;
    }

    document.getElementById("studentForm").reset();
    displayStudents();
});

function displayStudents() {
    let tbody = document.querySelector("#studentTable tbody");
    tbody.innerHTML = "";
    students.forEach((student, index) => {
        let row = `<tr>
            <td>${student.rollNumber}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.standard}</td>
            <td>${student.dob}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function editStudent(index) {
    let student = students[index];
    document.getElementById("rollNumber").value = student.rollNumber;
    document.getElementById("name").value = student.name;
    document.getElementById("gender").value = student.gender;
    document.getElementById("standard").value = student.standard;
    document.getElementById("dob").value = student.dob;
    editingIndex = index;
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}