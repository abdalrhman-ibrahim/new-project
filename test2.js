let i = 1;
while(i <=10){
    if (i===8)
    {
        i++;
        continue;
    }
    else{
        console.log(i);
        i++;
    }
}

let a = 984;
let b = 587;
operator="-";

if(operator=="+"){
    console.log(a+b);
}
 else if(operator=="-"){
    console.log(a-b);
}
else if(operator=="*"){
    console.log(a*b);
}
else if(operator=="/"){
    console.log(b!==0 ? a/b : "Division by zero error");
}
else if(operator=="%"){
    console.log(a%b);
}
/* print even num from 10 to 50*/ 

for (let i=10; i<=50 ;i++){
    if(i%2==0){
        console.log(i);
    }
}
// /* print odd num from 7 to 77*/
for (let i = 7; i<=77; i++){
    if(i%2!=0 && i%3==0){
        console.log(i);
    }
} 
/* print numbers from 100 to 1 that are divisible by 5 and 2 */
for (let i=100; i>=1; i--){
    if(i%5==0 && i%2==0)
        console.log(i)
}

