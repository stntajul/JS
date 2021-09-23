class Parent{
    constructor(){
        this.fatherName='Schewerznegger'
    }
    
}
class Child extends Parent{
    constructor(name){
        super();
        this.name=name;


    }
    getFullName()
    {
        return this.name+' '+this.fatherName;
    }
}
const baby = new Child('ashis');
console.log(baby.getFullName());