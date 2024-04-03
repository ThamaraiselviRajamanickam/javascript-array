/*Problem 5: Check if Array is Sorted
Write a function that takes an array of numbers as an argument and returns true if the array is sorted in ascending order, and false otherwise.
Example:
For the input array [1, 2, 3, 4, 5], the output should be true.
 */
var array = [1, 2, 3, 4, 5];
var isSort = true;
for (i = 0; i < array.length; i++) {
  if (array[i] > array[i + 1]) {
    isSort = false;
  }
}
if (isSort == true) {
  console.log(true);
} else {
  console.log(false);
}
