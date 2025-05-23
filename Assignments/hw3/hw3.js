// 1. Write a JavaScript function that reverses a number. Example x = 32243; Expected Output: 34223
function reverseNumber(x) {
  const reversedStr = x.toString().split('').reverse().join('');
  return parseInt(reversedStr, 10) * Math.sign(x);
}
console.log("1. Input: 32243, Output:", reverseNumber(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}
console.log("2. Input: 'madam', Output:", isPalindrome('madam'));

// 3. Write a JavaScript function that generates all combinations of a string. Example string: 'dog' Expected Output: d, do, dog, o, og, g
function allSubstrings(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}
console.log("3. Input: 'dog', Output:", allSubstrings('dog'));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Example string: 'webmaster' Expected Output: 'abeemrstw'
function alphabetize(str) {
  return str.split('').sort((a, b) => a.localeCompare(b)).join('');
}
console.log("4. Input: 'webmaster', Output:", alphabetize('webmaster'));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Example string: 'the quick brown fox' Expected Output: 'The Quick Brown Fox'
function toTitleCase(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log("5. Input: 'the quick brown fox', Output:", toTitleCase('the quick brown fox'));

// 6. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string. Example string: 'Web Development Tutorial' Expected Output: 'Development'
function longestWord(str) {
  return str
    .split(' ')
    .reduce((longest, word) =>
      word.length > longest.length ? word : longest
    , '');
}
console.log("6. Input: 'Web Development Tutorial', Output:", longestWord('Web Development Tutorial'));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Note: we do not count 'y' as vowel here. Example string: 'The quick brown fox' Expected Output: 5
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log("7. Input: 'The quick brown fox', Output:", countVowels('The quick brown fox'));

// 8. Write a JavaScript function that accepts a number as a parameter and checks whether the number is prime or not. Note: a prime number is >1 and has no positive divisors other than 1 and itself.
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
console.log("8. Input: 17, Output:", isPrime(17));

// 9. Write a JavaScript function which accepts an argument and returns the type. Possible typeof returns: object, boolean, function, number, string, undefined.
function typeOf(value) {
  if (value === null) return 'null';
  return typeof value;
}
console.log("9. Input: () => {}, Output:", typeOf(() => {}));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(i === j ? 1 : 0);
    }
    matrix.push(row);
  }
  return matrix;
}
console.log("10. Input: 4, Output:", identityMatrix(4));

// 11. Write a JavaScript function which takes an array of numbers and finds the second lowest and second greatest numbers. Sample array: [1,2,3,4,5] Expected Output: 2,4
function secondLowestGreatest(arr) {
  const unique = Array.from(new Set(arr)).sort((a, b) => a - b);
  return [unique[1], unique[unique.length - 2]];
}
console.log("11. Input: [1,2,3,4,5], Output:", secondLowestGreatest([1,2,3,4,5]));

// 12. Write a JavaScript function which says whether a number is perfect. A perfect number equals the sum of its proper divisors. Example: 6 => 1+2+3 = 6; 28 => 1+2+4+7+14 = 28
function isPerfect(n) {
  if (n < 2) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i + (i !== n / i ? n / i : 0);
    }
  }
  return sum === n;
}
console.log("12. Input: 28, Output:", isPerfect(28));

// 13. Write a JavaScript function to compute the factors of a positive integer.
function factors(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result.push(i);
  }
  return result;
}
console.log("13. Input: 28, Output:", factors(28));

// 14. Write a JavaScript function to convert an amount to coins. Sample: amountTocoins(46, [25,10,5,2,1]) => [25,10,10,1]
function amountTocoins(amount, coins) {
  const result = [];
  for (const coin of coins) {
    while (amount >= coin) {
      result.push(coin);
      amount -= coin;
    }
  }
  return result;
}
console.log("14. Input: 46, [25,10,5,2,1], Output:", amountTocoins(46, [25,10,5,2,1]));

// 15. Write a JavaScript function to compute the value of b^n where n is the exponent and b is the base.
function power(b, n) {
  return b ** n;
}
console.log("15. Input: b=2, n=3, Output:", power(2, 3));

// 16. Write a JavaScript function to extract unique characters from a string. Example: "thequickbrownfoxjumpsoverthelazydog" => "thequickbrownfxjmpsvlazydg"
function uniqueChars(str) {
  let result = '';
  for (const ch of str) {
    if (!result.includes(ch)) result += ch;
  }
  return result;
}
console.log("16. Input: 'thequickbrownfoxjumpsoverthelazydog', Output:", uniqueChars('thequickbrownfoxjumpsoverthelazydog'));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function letterOccurrences(str) {
  const counts = {};
  for (const ch of str) {
    counts[ch] = (counts[ch] || 0) + 1;
  }
  return counts;
}
console.log("17. Input: 'hello', Output:", letterOccurrences('hello'));

// 18. Write a function for searching JavaScript arrays with a binary search. Note: binary search splits the array until it finds the desired value.
function binarySearch(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}
console.log("18. Input: [1,2,3,4,5], 4, Output:", binarySearch([1,2,3,4,5], 4));

// 19. Write a JavaScript function that returns array elements larger than a number.
function greaterThan(arr, num) {
  return arr.filter(x => x > num);
}
console.log("19. Input: [1,2,3,4,5], 3, Output:", greaterThan([1,2,3,4,5], 3));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. Sample list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function randomId(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = '';
  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}
console.log("20. Input: 8, Output:", randomId(8));

// 21. Write a JavaScript function to get all possible subsets of a fixed length (e.g., 2) from an array. Sample: [1,2,3], length=2 => [[2,1],[3,1],[3,2]]
function subsetsOfLength(arr, k) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (k === 2) result.push([arr[j], arr[i]]);
    }
  }
  return result;
}
console.log("21. Input: [1,2,3], 2, Output:", subsetsOfLength([1,2,3], 2));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter, and counts occurrences of that letter. Sample: 'microsoft.com', 'o' => 3
function countLetter(str, letter) {
  let count = 0;
  for (const ch of str) {
    if (ch === letter) count++;
  }
  return count;
}
console.log("22. Input: 'microsoft.com', 'o', Output:", countLetter('microsoft.com', 'o'));

// 23. Write a JavaScript function to find the first non-repeated character. Sample: 'abacddbec' => 'e'
function firstNonRepeatedChar(str) {
  const charCount = {};
  for (const ch of str) charCount[ch] = (charCount[ch] || 0) + 1;
  for (const ch of str) {
    if (charCount[ch] === 1) return ch;
  }
  return null;
}
console.log("23. Input: 'abacddbec', Output:", firstNonRepeatedChar('abacddbec'));

// 24. Write a JavaScript function to apply Bubble Sort algorithm (descending). Sample: [12,345,4,...,213] => [3223,546,455,...,1]
function bubbleSort(arr) {
  const a = arr.slice();
  const n = a.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (a[j] < a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a;
}
console.log("24. Input: [12,345,4,546,122,84,98,64,9,1,3223,455,23,234,213], Output:", bubbleSort([12,345,4,546,122,84,98,64,9,1,3223,455,23,234,213]));

// 25. Write a JavaScript function that accepts a list of country names and returns the longest. Sample: ["Australia","Germany","United States of America"] => "United States of America"
function longestCountryName(countries) {
  return countries.reduce(
    (longest, country) => country.length > longest.length ? country : longest,
    ""
  );
}
console.log("25. Input: ['Australia','Germany','United States of America'], Output:", longestCountryName(['Australia','Germany','United States of America']));

// 26. Write a JavaScript function to find the longest substring in a string without repeating characters.
function longestUniqueSubstring(str) {
  let start = 0, maxStr = "";
  const indexMap = {};
  for (let i = 0; i < str.length; i++) {
    if (indexMap[str[i]] >= start) {
      start = indexMap[str[i]] + 1;
    }
    indexMap[str[i]] = i;
    const current = str.slice(start, i + 1);
    if (current.length > maxStr.length) maxStr = current;
  }
  return maxStr;
}
console.log("26. Input: 'abcabcbb', Output:", longestUniqueSubstring('abcabcbb'));

// 27. Write a JavaScript function that returns the longest palindromic substring. Example: "bananas" => "anana"
function longestPalindromicSubstring(s) {
  if (!s) return "";
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i);
    const len2 = expandAroundCenter(s, i, i + 1);
    const len = Math.max(len1, len2);
    if (len > end - start + 1) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.slice(start, end + 1);
}
function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--; right++;
  }
  return right - left - 1;
}
console.log("27. Input: 'bananas', Output:", longestPalindromicSubstring('bananas'));

// 28. Write a JavaScript program to pass a JavaScript function as parameter.
function callFunction(fn, ...args) {
  return fn(...args);
}
console.log("28. Input: (a,b)=>a*b, 3,4, Output:", callFunction((a, b) => a * b, 3, 4));

// 29. Write a JavaScript function to get the function name.
function getFunctionName(fn) {
  return fn.name || 'anonymous';
}
function sampleFunction() {}
console.log("29. Input: sampleFunction, Output:", getFunctionName(sampleFunction));
