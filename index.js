// Palindrome Check
function isPalindrome(str) {
    // Convert the string to lowercase to ignore case sensitivity
    str = str.toLowerCase();
    // Initialize left and right pointers
    let left = 0;
    let right = str.length - 1;
    // Iterate through the string from both ends
    while (left < right) {
        // If characters at current positions don't match, return false
        if (str[left] !== str[right]) {
            return false;
        }
        // Move the pointers towards the center
        left++;
        right--;
    }
    // If the loop completes without returning false, it's a palindrome
    return true;
}

// Test cases for Palindrome Check
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true

// Minimum and Maximum Numbers
function findMinMax(arr) {
    // Initialize min and max variables with the first element of the array
    let min = arr[0];
    let max = arr[0];
    // Iterate through the array to find min and max
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return { min, max };
}

// Test cases for Minimum and Maximum Numbers
console.log(findMinMax([3, 5, 1, 9, 2])); // { min: 1, max: 9 }
console.log(findMinMax([-1, -5, -3, -9, -2])); // { min: -9, max: -1 }

// Missing Number Identification
function findMissingNumber(arr) {
    // Initialize variables
    let missingNumber;
    // Iterate through the series to find the missing number
    for (let i = 0; i < arr.length - 1; i++) {
        // If the difference between consecutive numbers is more than 1, the missing number is found
        if (arr[i + 1] - arr[i] > 1) {
            missingNumber = arr[i] + 1;
            break;
        }
    }
    return missingNumber;
}

// Test case for Missing Number Identification
console.log(findMissingNumber([11, 12, 14, 15, 16, 18, 19, 20])); // 13