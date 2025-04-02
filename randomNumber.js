
const prompt =require("prompt-sync")();


let X0,//seed
 a=1664525,//multiplier
 c = 1013904223,//increment
 m = 9973,//modulus
 n;//required random numbers

 let X =[],R =[];
 X0 =Math.floor(Math.random()*10000);
 X.push(X0);
 //  console.log(X0);
//  console.log(X[0]);
//  a = Math.floor(Math.random()*50);
//  console.log(a);
//  c = Math.floor(Math.random()*50);
//  console.log(c);
//  m = Math.floor(Math.random()*100);
//  console.log(m);
 n = parseInt(prompt("How many random numbers can you generate?"),10);
 console.log(n,"Random Numbers will be generated");


 function generateSeeds(){
    for(let i = 0;i < n; i++){
        X[i+1] = (a*X[i]+c) % m;
    }
    return X;
 }
// console.log(generateSeeds());
generateSeeds();
const randomNumber = () =>{
    for(let i = 0 ; i < n ; i++){
        R[i] = X[i+1]/m;
    }
    return R;

}
console.log(randomNumber());

