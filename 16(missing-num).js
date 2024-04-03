/*Problem 16: Find the Missing Number
Write a function that takes an array of numbers as an argument and returns the missing number in the sequence.
Example:
For the input array [1, 2, 4, 5, 6], the output should be 3.
 */
function aa(array){
var n=array.length+1;
var sum=0;
for(i=0;i<array.length;i++){
sum +=array[i];
}
var total=(n*(n+1))/2;
var missingNum=total-sum
console.log(missingNum)
}
var array=[1,2,3,4,6]
aa(array)