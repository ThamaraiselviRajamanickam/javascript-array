/*Problem 11: Find the Index of an Element
Write a function that takes an array and an element as arguments and returns the index of the element in the array. If the element is not found, return -1.
Example:
For the input array [5, 2, 8, 12, 3] and the element 8, the output should be 2.
 */
// function findIndex(arr, element) {
//     return arr.indexOf(element);
// }
// const array = [5, 2, 8, 12, 3];
// const element = 8;
// console.log(findIndex(array, element)); 
// var arr=[5,3,6,8,12,9]
// var ele=8;
// function add(arr,ele){
//     var x=arr.indexOf(ele);
//   console.log(x);

// }
// add(arr,ele)0
// var arr=[1,2,3,4,5]
// var ele=3;
// function indexNum(arr,ele){

// var result=arr.indexOf(ele)
// console.log(result)
// }

// indexNum(arr,ele)


var input=[1,4,6,8,9]
var target=6
for(i=0;i<input.length;i++){
  if(input[i]==target){
    var index=i
  }
  
}console.log(index)