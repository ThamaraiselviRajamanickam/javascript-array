/*Problem 6: Find the Sum of Array Elements
Write a function that takes an array of numbers as an argument and returns the sum of all the elements in the array.
Example:
For the input array [5, 2, 8, 12, 3], the output should be 30
 */
// inputAaaray=[5,2,8,12,3];

// function findSum(inputAaaray) {
//     let sum = 0;
//     for (let i = 0; i < inputAaaray.length; i++) {
//         sum += inputAaaray[i];
//     }
//     return sum;
// }
// console.log(findSum(inputAaaray))

var inputAaaray=[5,2,8,12,3];
var sum=0;
for(i=0;i<inputAaaray.length;i++){
    sum+=inputAaaray[i]
}
console.log(sum)