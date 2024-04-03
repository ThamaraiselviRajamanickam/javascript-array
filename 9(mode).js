/*Problem 9: Find the Mode of Array Elements
Write a function that takes an array of numbers as an argument and returns the mode of all the elements in the array.
Example:
For the input array [5, 2, 8, 12, 3, 8], the output should be 8.
 */
// var array=[5,2,8,12,3,8]
// var maxCount=0;
// var mode=0;
// for(i=0;i<array.length;i++){
// let count=0;
// for(j=0;j<array.length;j++)
// {
//     if(array[i]===array[j]){
//         count++;
//     }
// }

// if (count > maxCount) {
//     maxCount = count;
//     mode = array[i];
// }

// }console.log(mode)

var input=[5,2,8,12,3,8]
var mode=0;
var maxCount=0;
for(i=0;i<input.length;i++){
    var count=0;
    for(j=0;j<input.length;j++)
    {
        if(input[i]==input[j]){
        count++;
        }
    }
if(count>maxCount){
    maxCount=count;
    mode=input[i];
}
}console.log(mode)