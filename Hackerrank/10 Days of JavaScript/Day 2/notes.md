# Day 2
## 1. Conditional Statements (If-Else)

### Problem
Map a given score (0–35) to a grade letter using conditional logic.

### My Approach
- Checked score ranges starting from highest (A) to lowest (F).
- Used if-else chain with `<=` and `>` operators.
- Added an "Invalid score" case for out-of-range inputs and if input was wrong type (not a number).

### What I Learned
- Order of conditions matters (start from lower range).
- Careful with `>=` and `<=` to include correct edges.
- Writing conditions in descending order avoids overlap.

### Example
Input: `11`  
Output: `D`

---

# 2.Conditional Statement (Switch)

### Problem
Given a string, return a letter category (A–D) depending on its first character.

### My Approach
- Accessed the first character using `s[0]`.
- Used a `switch` statement to match groups of letters.
- Grouped cases into categories A–D.
- Returned the corresponding letter.

### What I Learned
- Syntax of `switch` in JavaScript.
- Must use `break` after each case to prevent fall-through.
- Easier to access string characters using `s[0]` than `s.charAt(0)`.

### Complexity
- Time: O(1) → Only checks the first character, regardless of string length.
- Space: O(1) → Only one variable `letter`.

## Example
Input: `"engineer"`  
Output: `"A"`

---

## 3. Loops (Vowels and Consonants)

### Problem
- Given a string `s`, print:
  1. Each **vowel** (`a, e, i, o, u`) on a new line, in the order they appear.  
  2. Each **consonant** (non-vowel) on a new line, also in the same order.  

### My Approach
- Defined a string of vowels:  
  ```javascript
  const vowel = "aeiou";
  ```

- Used a for loop to iterate through each character in the string.
- Checked if the character is a vowel using .includes():
If vowel → print immediately.
If consonant → push into an array.
After loop, used .forEach() to print consonants in order.
```javascript
function vowelsAndConsonants(s) {
    let array = [];
    const vowel = "aeiou";
    for (let i = 0; i < s.length; i++) {
        if (vowel.includes(s[i])) {
            console.log(s[i]);
        } else {
            array.push(s[i]);
        }
    }
    array.forEach((element) => console.log(element));
}
```

### What I Learned
- How to use loops to traverse a string character by character.
- `.includes()` is a simple way to check membership inside a string/array.
- Difference between printing immediately vs storing for later.
- Arrow functions `array.forEach((element) => console.log(element))` make iteration concise.