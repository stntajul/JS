function explain_callback(name, age, task){
    console.log('hello ',name);
    console.log('your age ',age);
    task();

}
function washhand(){
    console.log('wash your hand')
}
function shower(){
    console.log('shower your hand')
}
explain_callback('saju',27,washhand);
explain_callback('raju',27,shower);
 