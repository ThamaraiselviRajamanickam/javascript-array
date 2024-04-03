/*Problem 7: Find the Average of Array Elements
Write a function that takes an array of numbers as an argument and returns the average of all the elements in the array.
Example:
For the input array [5, 2, 8, 12, 3], the output should be 6.

 */
var inputArray=[5,2,8,12,3];
var sum=0;
for(i=0;i<inputArray.length;i++){
  sum+=inputArray[i]
  var result=sum/inputArray.length
}console.log(result)

