function fullName(firstName,lastName){

    let name='';
    for(let i=0;i<arguments.length;i++)
    {
         name+=arguments[i]+' ';
    }
    return name;
}
const name=fullName('abir','hasan','joy');
console.log(name);