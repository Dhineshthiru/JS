function Employee(name,age,baseSalary)
{
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
let monthlyBonus = 1000;
let calculateFinalSalary = function(){
    let finalSalary = baseSalary + monthlyBonus;
    console.log('Final salary is:' +finalSalary);
}
this.getEmpDetails = function(){
    console.log('Name:'+this.name +'|Age:'+this.age);
    calculateFinalSalary();
}
}