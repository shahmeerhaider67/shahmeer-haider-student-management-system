var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var School = /** @class */ (function () {
    function School(name) {
        this.students = [];
        this.teachers = [];
        this.name = name;
    }
    School.prototype.addStudent = function (stdObj) {
        this.students.push(stdObj);
    };
    School.prototype.addTeacher = function (teachObj) {
        this.teachers.push(teachObj);
    };
    return School;
}());
var Student = /** @class */ (function () {
    function Student(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
    return Student;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teacher;
}(Student));
var school1 = new School("PIAIC");
var school2 = new School("FAST");
var s1 = new Student("Bilal", 20, school1.name);
var s2 = new Student("Shahmeer", 17, school1.name);
var s3 = new Student("Ali", 18, school2.name);
var s4 = new Student("Abdullah", 20, school2.name);
var t1 = new Teacher("Sir Zia", 50, school1.name);
var t2 = new Teacher("Sir Inam", 30, school2.name);
var t3 = new Teacher("Sir Qasim", 40, school2.name);
//add students
school1.addStudent(s1);
school1.addStudent(s2);
school2.addStudent(s3);
school2.addStudent(s4);
//add teachers
school1.addTeacher(t1);
school2.addTeacher(t2);
school2.addTeacher(t3);
console.log(school1);
console.log(school2);
// console.log(t1)
// console.log(t2)
// console.log(t3)
