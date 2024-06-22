// A) Do the below programs in anonymous function & IIFE
//Print odd numbers in an array

//**anonymous**
var array=[1,2,3,4,5,6,7,8,9,10];
var printOddNumbers=function(array){
    for(var i = 0 ; i< array.length ; i++){
        if(array[i]%2!=0){
            console.log(array[i]);
        }
    }
}
printOddNumbers(array);

//**IIFE**/
(function(array){
    for(var i=0;i<array.length;i++){
        if(array[i]%2!==0){
            console.log(array[i]);
        }
    }
})(array);

// B) Convert all the strings to title caps in a string array
//**anonymous**/
var strArray = ["hello", "world", "javascript"];

var convertToTitleCaps = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
};

console.log(convertToTitleCaps(strArray));

//**IIFE**/
var strArray = ["hello", "world", "javascript"];

var titleCapsArray = (function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
})(strArray);
console.log(titleCapsArray);

// C) Sum of all numbers in an array*/
//**anonymous**/
var numbers = [1, 2, 3, 4, 5];
var sumOfNumbers = function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
console.log(sumOfNumbers(numbers));

//**IIFE**/
var numbers = [1, 2, 3, 4, 5];
var sum = (function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
})(numbers);
console.log(sum);

// D) Return all the prime numbers in an array
//**anonymous**/
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var findPrimes = function(arr) {
    return arr.filter(function(num) {
        if (num < 2) return false; //0 and 1 are not prime numbers
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};
console.log(findPrimes(numArray));

//**IIFE**/
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var primes = (function(arr) {
    return arr.filter(function(num) {
        if (num < 2) return false; //0 and 1 are not prime numbers
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
})(numArray);
console.log(primes);

// E) Return all the palindromes in an array
//**anonymous**/
var wordsArray = ["level", "hello", "radar", "noon", "world"];
findPalindromes = function(arr) {
    return arr.filter(function(word) {
        var reversed = word.split('').reverse().join('');
        return word === reversed;
    });
};
console.log(findPalindromes(wordsArray));

//**IIFE**/
var wordsArray = ["level", "hello", "radar", "noon", "world"];
var palindromes = (function(arr) {
    return arr.filter(function(word) {
        var reversed = word.split('').reverse().join('');
        return word === reversed;
    });
})(wordsArray);
console.log(palindromes);

//  F) Return median of two sorted arrays of the same size.
//**anonymous**/
var array1 = [1, 3, 5];
var array2 = [2, 4, 6];
var findMedianSortedArrays = function(arr1, arr2) {
    var merged = arr1.concat(arr2);
    var sorted = merged.sort(function(a, b) {
        return a - b;
    });
    var len = sorted.length;
    if (len % 2 === 0) {
        return (sorted[len / 2 - 1] + sorted[len / 2]) / 2;
    } else {
        return sorted[Math.floor(len / 2)];
    }
};
console.log(findMedianSortedArrays(array1, array2));

//**IIFE**/
var array1 = [1, 3, 5];
var array2 = [2, 4, 6];

var median = (function(arr1, arr2) {
    var merged = arr1.concat(arr2);
    var sorted = merged.sort(function(a, b) {
        return a - b;
    });
    var len = sorted.length;
    if (len % 2 === 0) {
        return (sorted[len / 2 - 1] + sorted[len / 2]) / 2;
    } else {
        return sorted[Math.floor(len / 2)];
    }
})(array1, array2);

console.log(median);

// G) Remove duplicates from an array
//**anonymous**/
var numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5];
var removeDuplicates = function(arr) {
    return arr.filter(function(num, index, array) {
        return array.indexOf(num) === index;
    });
};
console.log(removeDuplicates(numbers));

//**IIFE**/

var numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5];
var uniqueNumbers = (function(arr) {
    return arr.filter(function(num, index, array) {
        return array.indexOf(num) === index;
    });
})(numbers);
console.log(uniqueNumbers);

// H) Rotate an array by k times
//**anonymous**/

var arr = [1, 2, 3, 4, 5];
var k = 2;
var rotateArray = function(arr, k) {
    var n = arr.length;
    var rotated = arr.slice(k % n).concat(arr.slice(0, k % n));
    return rotated;
};
console.log(rotateArray(arr, k));

//**IIFE**/
var arr = [1, 2, 3, 4, 5];
var k = 2;

var rotatedArray = (function(arr, k) {
    var n = arr.length;
    var rotated = arr.slice(k % n).concat(arr.slice(0, k % n));
    return rotated;
})(arr, k);

console.log(rotatedArray);





















