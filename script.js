function Student(id,name,grades) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    
}
let students = [];

function addStudent(id,name,grades){
    const newStudent = new Student(id,name,grades);
    students.push(newStudent);
}
function removeStudent(id) {
    students = students.filter(student => student.id !== id);
}
function showStudents(students){
    students.forEach(student => {
        console.log(student.id,student.name,student.grades);    
    });
    console.log("\n");
}
addStudent(21,"Hardik","B");
showStudents(students);
addStudent(16,"Bhumi","B+");
showStudents(students);
removeStudent(21);
showStudents(students);
addStudent(13,"Namami","A");
showStudents(students);
addStudent(15,"Naman","A+");
showStudents(students);
removeStudent(13);
showStudents(students);