/*Problem 15: Rotate Array by N Elements
Write a function that takes an array and a number n as arguments and rotates the array to the left by n elements.
Example:
For the input array [1, 2, 3, 4, 5] and n = 2, the output should be [3, 4, 5, 1, 2].
 */
var array = [1, 2, 3, 4, 5];
var n = 2;
var rotateArr = [];
for (i = 0; i <array.length; i++) {
  var index = (i + n )% array.length;
  rotateArr.push(array[index]);
}
console.log(rotateArr) 