
// const prompt =require("prompt-sync")();


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
// console.log(R);


//using kolmogorov-Smirnov test for testing uniformity

//sorting the array R

R.sort((a,b)=> a - b);//sorts in string not numbers
console.log(R);
let dPositive = [],dNegative = [],D, alpha = 0.05 ; 
for(i = 0;i<n;i++){
    dPositive[i] = i/n - R[i];
    dNegative[i] = R[i] - (i-1)/n;  
}
max1 = Math.max(...dPositive);
max2 = Math.max(...dNegative);

 D = Math.max(max1,max2);
 let dAlpha = 0.565;
 function checkUniformity(){
    if( D <= dAlpha){
        console.log("The sequence of random numbers are uniformly distributed and not rejected.");
    }
    else{
        console.log("The sequence of random numbers are not unifromly distributed and rejected");
    }
 };
checkUniformity();

