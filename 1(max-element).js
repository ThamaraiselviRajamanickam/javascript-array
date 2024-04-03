/*Problem 1: Find the Maximum Element
Write a function that takes an array of numbers as an argument and returns the largest number in the array.
Example:
For the input array [5, 2, 8, 12, 3], the output should be 12.
//  */
// var inputArray=[5,2,8,12,3];
// var maxValue=Math.max(...inputArray)
// console.log(`The maximum number of array is: ${maxValue}`)
var array=[5,2,6,8,12,3]
var max=array[0];
for(i=0;i<array.length;i++){
    if(array[i]>max){
        max=array[i];
    }
} console.log(max)
