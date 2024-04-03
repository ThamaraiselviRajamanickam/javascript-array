/*Problem 2: Find the Minimum Element
Write a function that takes an array of numbers as an argument and returns the smallest number in the array.
Example:
For the input array [5, 2, 8, 12, 3], the output should be 2.
//  */
// var input=[5,2,8,12,3]
// function arrMin(arr){
//     if(arr.length==0){
//         return null;
//     }
//     return Math.min(...arr)
// }
// console.log(arrMin(input))

var input=[5,2,8,12,3]
var min=input[0];
for(i=0;i<input.length;i++){
    if(input[i]<min){
        min=input[i]
    }
}console.log(min)