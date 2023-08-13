/** product: calculate the product of an array of numbers. */
// [2, 3, 4]
function product(nums) {
  if (nums.slice(1).length === 0) return nums[0];
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */
// ["hello", "hi", "hola"]
function longest(words) {
  if (words.length === 1) return words[0].length;
  if (words[0].length < longest(words.slice(1))) return longest(words.slice(1));
  else return words[0].length;
}

/** everyOther: return a string with every other letter. */
// "he ll o"  ===> "hlo"
// ba na na  s ta nd ===> "bnn tn"
function everyOther(str) {
  if (
    (str.length === 2 && str.length % 2 === 0) ||
    (str.length === 1 && str.length % 2 > 0)
  )
    return str[0];
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */
// "tacocat"
function isPalindrome(str) {
  if (str.length === 2 || str.length === 3)
    return str[0] === str[str.length - 1];
  return isPalindrome(str.slice(1, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
// ["duck", "cat", "pony"] ,"cat" ==> 1
// ["duck", "cat", "pony"] ,"porcupine"  ==>    -1
function findIndex(arr, val, indx = 0) {
  if (val === arr[indx]) return indx;
  if (val !== arr[indx] && indx < arr.length)
    return findIndex(arr, val, indx + 1);
  return -1;
}

/** revString: return a copy of a string, but in reverse. */
("porcupine"); // 'enipucrop'
function revString(str) {
  if (str.length === 1) return str[0];
  return str[str.length - 1] + revString(str.slice(0, str.length - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}
let animals = ["duck", "cat", "pony"];

console.log(product([2, 3, 4]));
console.log(longest(["hello", "hi", "hola"]));
console.log(everyOther("hello"));
console.log(everyOther("banana stand"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("tacodog"));
console.log(revString("porcupine"));
console.log(findIndex(animals, "cat")); // 1
console.log(findIndex(animals, "porcupine")); // -1

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
