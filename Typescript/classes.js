var Employee = /** @class */ (function () {
    function Employee() {
        this.empno = 101;
        this.ename = "abc";
        this.sal = 20000;
        this.attendance = 18;
    }
    Employee.prototype.print = function () {
        console.log(this.empno, this.ename, this.sal, this.attendance);
    };
    return Employee;
}());
var emp = new Employee();
var emp1 = new Employee();
emp1.empno = 102;
var emp2 = new Employee();
emp2.empno = 103;
emp.print();
emp1.print();
emp2.print();
var emp_array = [emp, emp1, emp2];
