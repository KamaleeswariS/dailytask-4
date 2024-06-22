// Do the below programs in arrow functions.
// A) Print odd numbers in an array

// ** Arrow Function 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var printOddNumbers = arr => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
};
printOddNumbers(numbers);

// B) Convert all the strings to title caps in a string array

var convertToTitleCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));

var strArray = ["hello", "world", "javascript"];
console.log(convertToTitleCaps(strArray));

// C) Sum of all numbers in an array

var numbers = [1, 2, 3, 4, 5];
var sumOfNumbers = arr => arr.reduce((sum, num) => sum + num, 0);
console.log(sumOfNumbers(numbers));


// D) Return all the prime numbers in an array

var findPrimes = arr => {
    return arr.filter(num => {
        if (num < 2) return false;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findPrimes(numArray));

// E) Return all the palindromes in an array

var wordsArray = ["level", "hello", "radar", "noon", "world"];
var findPalindromes = arr => arr.filter(word => word === word.split('').reverse().join(''));

console.log(findPalindromes(wordsArray));

















