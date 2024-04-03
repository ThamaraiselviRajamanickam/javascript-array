/*Problem 8: Find the Median of Array Elements
Write a function that takes an array of numbers as an argument and returns the median of all the elements in the array.
Example:
For the input array [5, 2, 8, 12, 3], the output should be 5.
 */
// var array=[5, 2, 8, 12, 3];
// var median=0;
// var total=0;
// if(array.length %2 ==0){
//     var mid=array.length/2;
//     total=array[i-1]+array[i]
//     median=Math.floor(total/2)

// }else{
//     var middle=Math.floor(array.length/2)
//     median=array[middle]
// }console.log(median)

var array=[5, 2, 8, 12, 3];
var median=0;
var total=0;
if(array.length % 2==0){
 //  var num=array.length/2;
    total=array.length[i-1] + array[i]
    median=Math.floor(total/2)
   }
else{
    var middle=Math.floor(array.length/2);
    median=array[middle]
}console.log(median)