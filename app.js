class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getGrade() {
        if (this.marks >= 80) {
            return "A";
        } else if (this.marks >= 70) {
            return "B";
        } else if (this.marks >= 60) {
            return "C";
        } else {
            return "F";
        }
    }
}

// Create students
let students = [
    new Student("Ali", 85),
    new Student("Sara", 72),
    new Student("Ahmed", 45),
    new Student("Zara", 91),
    new Student("Hamza", 63),
    new Student("Ayesha", 38)
];

students.forEach(student => {
    let label = student.marks >= 50 ? "Pass" : "Fail";
    console.log(student.name + " - " + student.marks + " - Grade: " + student.getGrade() + " - " + label);
});

let passingNames = students
    .filter(student => student.marks >= 50)
    .map(student => student.name);

let totalMarks = students.reduce((total, student) => total + student.marks, 0);
let classAverage = totalMarks / students.length;

let sortedStudents = [...students].sort((a, b) => b.marks - a.marks);
let [topStudent] = sortedStudents;

console.log("Passing Names:", passingNames);
console.log("Class Average:", classAverage);
console.log("Top Scorer:", topStudent.name);