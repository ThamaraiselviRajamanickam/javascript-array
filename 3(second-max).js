/*Problem 3: Find the Second Maximum Element
Write a function that takes an array of numbers as an argument and returns the second largest number in the array.
Example:
For the input array [5, 2, 8, 12, 3], the output should be 8.
 */
 
// function arraysMax(arr){
//     if(arr.length < 2 ){
//         return null
//     }
//     arr.sort((a,b) => b-a)
//     return arr[1]

// }console.log(arraysMax(input))
// var input=[1,3,6,8]
// var sor=input.sort((a,b)=>b-a)
//      console.log(sor[1])

var array=[5,8,12,2,3];

var max;
var smax;
if(array[0]<array[1]){
     max=array[0]
     smax=array[1]
}else {
     max=array[1]
     smax=array[0]
}
for(i=2;i<array.length;i++){
     if(array[i]<max)
     {
          smax=max;
          max=array[i]
     }else if(array[i]<smax){
          smax=array[i]
     }
}console.log(smax)