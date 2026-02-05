let marks=[85,97,44,37,76,60];
let sum=0;
console.log(marks);
console.log(marks.length);

for(let val of marks){
    sum = sum + val;
}
 console.log("Sum of total number is :", sum);

 let avg = sum/marks.length;
 console.log("Avg of total number is : ", avg);


// print all marks

 for(let mark of marks ){
     console.log(mark);
 }