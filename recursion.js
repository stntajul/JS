function fact(n){
    if(n==0)
    return 1;
    else if(n==2)
    return 2;
    else
    return n*fact(n-1);

}
console.log(fact(3));