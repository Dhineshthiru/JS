    class Employee {
    set EmployeeDetails( name,id,phone){
     this.name  = name;
     this.id = id;
     this.phone = phone;
    }
    getEmpName(){
        return this.name;
    }
    getEmpId(){
        return this.id;
    }
    getEmpPhoneNum(){
        return this.phone;
    }
}
let emp1 = new Employee();
emp1.setEmployeeDetails('Dhinesh',1001,7904170898);
console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getEmpPhoneNum());