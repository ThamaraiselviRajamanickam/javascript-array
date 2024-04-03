/*Problem 12: Find the Intersection of Two Arrays
Write a function that takes two arrays as arguments and returns an array containing the elements that are common to both arrays.
Example:
For the input arrays [1, 2, 3, 4] and [3, 4, 5, 6], the output should be [3, 4].
 */
// function findIntersection(arr1, arr2) {
//     return arr1.filter(element => arr2.includes(element));
// }
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// console.log(findIntersection(array1, array2)); // Output: [3, 4]
var input=[1, 2, 3, 4];
var vowels=[3, 4, 5, 6];
count=[];
for(i=0;i<=input.length;i++){
    if(vowels.includes(input[i])){
    count.push(input[i])
    }
    
} console.log(count)

