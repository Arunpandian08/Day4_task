//1.a Print odd numbers in an array

const oddNum = (function myArray(num){
    let val =[]
    for(let ind=0;ind<num.length;ind++){
         if(num[ind]%2 !== 0){ 
            val.push(num[ind])
        } 
    }return val;
})([2,4,5,7,11,12,13]);
console.log(oddNum);

//1.b Convert all the strings to title caps in a string array

 const title =(function (str){
    str=str.toLowerCase().split(" ");
    for(let ind = 0 ; ind<str.length ; ind++){
     str[ind]=str[ind].charAt(0).toUpperCase() + str[ind].slice(1)
         }
         return str.join(" ");   
})("this is my code");
console.log(title);

//1.c Sum of all numbers in an array

const result = (function(num){
    let sum=0
    for(let i=0;i<=num.length;i++){
       sum+=i
    }
    return sum;
})([1,2,3,4,5,6,7,8,9,10]);
console.log(result);

//1.d Return all the prime numbers in an array

var  numbers = [5, 9, 63, 7,29, 35, 6, 55, 23]
var prime = [];

const isPrime =(function (arr) {
      for (var j = 2; j <= arr / 2; j++) {
       if ((arr % j) == 0) { // modulous
        return false;
       } 
     }
     return true;
})
for (let ind = 0; ind < numbers.length; ind++) {
  if (isPrime(numbers[ind])) {
      prime.push(numbers[ind])
  }
}
console.log(prime);

//1.e Return all the palindromes in an array

const palindromesArray = (function() {
    const  isPalindrome = function(word) {
        return word === word.split('').reverse().join('');
    };

    const findPalindromesInArray = function(array) {
        let palindromes = [];

        for (let  i = 0; i < array.length; i++) {
            if (isPalindrome(array[i])) {
                palindromes.push(array[i]);
            }
        }

        return palindromes;
    };
    let wordsArray = ["level", "hello", "civic", "world", "radar"];
    
    return findPalindromesInArray(wordsArray);
   
})();
console.log( palindromesArray);


//1.f  Return median of two sorted arrays of the same size.

const findMedianSortedArrays = (function() {
    const mergeSortedArrays = function(arr1, arr2) {
        let mergedArray = [];
        let i = 0;
        let j = 0;

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                mergedArray.push(arr1[i]);
                i++;
            } else {
                mergedArray.push(arr2[j]);
                j++;
            }
        }
        while (i < arr1.length) {
            mergedArray.push(arr1[i]);
            i++;
        }
        while (j < arr2.length) {
            mergedArray.push(arr2[j]);
            j++;
        }

        return mergedArray;
    };

    return function(arr1, arr2) {
        const mergedArray = mergeSortedArrays(arr1, arr2);
        const length = mergedArray.length;

        if (length % 2 === 0) {
            const middle1 = mergedArray[length / 2 - 1];
            const middle2 = mergedArray[length / 2];
            return (middle1 + middle2) / 2;
        } else {
            return mergedArray[Math.floor(length / 2)];
        }
    };
})();
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const median = findMedianSortedArrays(arr1, arr2);
console.log(median);



//1.g Remove duplicates from an array

const remove_dublicate = (function(array){
    let withOutDub=[]
    for(let value of array){
    if(array.indexOf(value)==array.lastIndexOf(value)){
    withOutDub.push(value)
    }
}return withOutDub;
});
let array=[1,4,4,2,2,5,6,8,9,8,9,25,45,10]
console.log(remove_dublicate(array))

//1.h --> Rotate an array by k times

(function() {
    function rotateArray(arr, k) {
      if (Array.isArray(arr) && arr.length > 0) {
        const n = arr.length;
        const effectiveRotation = k % n;
  
        for (let i = 0; i < n; i++) {
          const rotatedIndex = (i - effectiveRotation + n) % n;
          const temp = arr[i];
          arr[i] = arr[rotatedIndex];
          arr[rotatedIndex] = temp;
        }
  
        return arr;
      } else {
        return 'Invalid input. Please provide a non-empty array.';
      }
    }
    let arr = [1, 2, 3, 4, 5];
  rotateArray(arr, 2);
  console.log(arr);
})();
  
