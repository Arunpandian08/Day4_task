//1.a Print odd numbers in an array

const odd = (arr) => {
    let val = []
    for(let ind=0;ind<arr.length;ind++){
         if(arr[ind] % 2 !== 0){ 
            val.push(arr[ind])
        } 
    }return val
}; 
let oddNum =odd([2,4,5,7,11,13])
 console.log(oddNum)


 //1.b Convert all the strings to title caps in a string array

  const title = (str) => {
    str=str.toLowerCase().split(" ");
    for(let ind = 0 ; ind<str.length ; ind++){
     str[ind]=str[ind].charAt(0).toUpperCase() + str[ind].slice(1)
         }
         return str.join(" ");   
 };
console.log(title("this is my code"))

//1.c Sum of all numbers in an array

const result = (num) => {
    let sum=0
    for(let i=0;i<=num.length;i++){
       sum+=i
    }
    return sum;
}

let num =result([1,2,3,4,5,6,7,8,9,10])
console.log(num)

//1.d Return all the prime numbers in an array

var  numbers = [5, 9, 63, 7, 29, 35, 6, 55, 23]
var prime = [];

const isPrime = (arr) => {
      for (var j = 2; j <= arr / 2; j++) {
       if ((arr % j) == 0) { // modulous
        return false;
       } 
     }
     return true;
}
for (let ind = 0; ind < numbers.length; ind++) {
  if (isPrime(numbers[ind])) {
      prime.push(numbers[ind])
  }
}

console.log(prime);


// 1.e Return all the palindromes in an array

const isPalindrome = (word) => {
    return word === word.split('').reverse().join('');
};

const findPalindromesInArray = function(array) {
    let palindromes = [];

    for (let i = 0; i < array.length; i++) {
        if (isPalindrome(array[i])) {
            palindromes.push(array[i]);
        }
    }

    return palindromes;
};
let wordsArray = ["level", "hello", "civic", "world", "radare"];
let palindromes = findPalindromesInArray(wordsArray);

console.log(palindromes);


