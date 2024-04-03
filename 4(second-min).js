// /*Problem 4: Find the Second Minimum Element
// Write a function that takes an array of numbers as an argument and returns the second smallest number in the array.
// Example:
// For the input array [5, 2, 8, 12, 3], the output should be 3.
//  */
 var input=[5,2,18,12,3]
// function arraysMin(arr){
//     if(arr.length < 2){
//         return null
//     }
//     arr.sort((a,b) => a-b)
//     return arr[1]
// }
// console.log(arraysMin(input))
var sore=input.sort((a,b)=>a-b)
console.log(sore[1])