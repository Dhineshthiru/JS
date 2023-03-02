class Employee {
    constructor(eid,ename)
{
    this.eid = eid;
    this.ename = ename;
}
}
Employee.prototype.sal = 5000;
Employee.prototype.display = function(){
    console.log(this.eid,this.ename,this.sal);
}
emp1.obj = new Employee(101,"David");
emp1.obj.display();
emp2.obj = new Employee(102,"Billa");
emp2obj.display();