    
var form = document.getElementById("studentForm");

var studentList = document.getElementById("studentList");

var studentTable = document.getElementsByClassName("student-table")[0];

form.addEventListener("submit", function(event) {

    event.preventDefault();
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;

    var gender = document.querySelector(
        'input[name="gender"]:checked'
    );
    if (gender === null) {
    alert("Please select your gender");
    return;
}

gender = gender.value;

     // Create a new table row

    var row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td>
            <button type="button" onclick="deleteRow(this)">Delete</button>
        </td>
    `;

    // Add row to the table

    studentList.appendChild(row);
    studentTable.style.display = "table";

     // Clear form

    form.reset();
});


function deleteRow(button) {
    // button.closest("tr").remove();
     var confirmDelete = confirm("Are you sure you want to delete this student?");

    if (confirmDelete) {
        button.closest("tr").remove();
        alert("Student deleted successfully!");
    }
}

