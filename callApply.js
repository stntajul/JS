const Person = {
    name : 'abul',
    id : 10,
    salary : 15000,
    chargeBill : function(amount){
        //console.log(this);
        return (this.salary-amount);
    }


}
const anotherPerson= {
    name : 'kabul',
    id : 11,
    salary : 25000
}

//** used bind */
// const pSalary=Person.chargeBill(2000);
// //console.log(pSalary);
// const anotherBillCharge=Person.chargeBill.bind(anotherPerson);
// console.log(anotherBillCharge(5000));
//*used call*/
//console.log(Person.chargeBill.call(anotherPerson,500));
//*used apply*/
console.log(Person.chargeBill.apply(anotherPerson,[500]));