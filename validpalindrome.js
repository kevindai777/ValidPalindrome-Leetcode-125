//Objective is to see wheter a string (not counting it's non-alphanumeric characters)
//is a palindrome.


//O(n) solution that uses 2 pointers to check whether the string is a palindrome.

//Regex to get rid of non-alphanumeric characters
let string = s.replace(/[^(\w|\d)]|[()]/g, '').toLowerCase()
let left = 0
let right = string.length - 1
    
while (left < right) {
    if (string[left] !== string[right]) {
        return false
    }
    left++
    right--
}
    
return true