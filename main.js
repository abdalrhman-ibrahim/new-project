let a= 4;
let b = 2;
let operator = '%';
if (operator === '+'){
    console.log(a+b);
}
if (operator === '-'){
    console.log(a-b);
}
if (operator === '*'){
    console.log(a*b);
}

if (operator === '/'){
    console.log(a/b);
}
if (operator === '%'){
    console.log(a%b);
}
console.log("----------------------------------------------------------");
let c = "Abdalrhman ibrahim";

for (let i=c.length-1;i>=0;i--){
    console.log(c[i]);
}
console.log("----------------------------------------------------------");

function factorial(n){
    if (n === 0){
        return 1;
    }else
    return n * factorial(n-1);
}
console.log(factorial(5));
console.log("----------------------------------------------------------");
for (let m= 0 ; m <=100 ; m++)
{
    if (m % 3 ===0  )
    {
        console.log("fizz");
    }else if (m % 5 ===0 )
    {
        console.log("buzz");
    }else if (m % 3 ===0 && m % 5 ===0 )
    {
        console.log("fizzbuzz");
    }else
    {
        console.log(m);
    }
}

