// create interface

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Marie',
    lastName: 'Curie',
    age: 25,
    location: 'USA',
}

const student2: Student = {
    firstName: 'Albert',
    lastName: 'Einstein',
    age: 30,
    location: 'Germany',
}

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
    const row= document.createElement('tr');

    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
