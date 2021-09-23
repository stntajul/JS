const student = [
    {
        id : 1 ,name : 'tajul'

    },
    {id : 2 , name : 'showmik'},
    {
        id : 3 , name : 'zobayer'

    }
]

// const student2=[];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i].name;
//     student2.push(element);
    
// }
// const names=student.map(x=>x.name);
// console.log(names);
const ids=student.filter(x=>x.id>1);
console.log(ids);

