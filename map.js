function square(element){
    return element*element;

}
numbers=[2,3,4,5,6,7,8,9,10];
//const result=numbers.map(x=>x*x);
const result=numbers.find(x=>x>4);
console.log(result);