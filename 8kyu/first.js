function findAverage(array) {
  // your code here
  console.log (array);
  
   if (array.length===0){
     return 0;
   }
  
 let sum = 0;
let avg;
  
  for (i=0;i<array.length;i++){
   sum = sum + array[i];
   }
 
   avg = sum / array.length;
  return avg;
}