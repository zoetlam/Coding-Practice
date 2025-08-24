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

### My Approach - Solution 1 (for loop + array + forEach)
- Iterate through the string once.  
- If the character is a vowel → print immediately.  
- If it is a consonant → push it into an array.  
- After the loop ends, print all consonants using **forEach**.  

```javascript
function vowelsAndConsonants(s) {
    const vowels = "aeiou";
    const consonants = [];

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        } else {
            consonants.push(s[i]);
        }
    }

    consonants.forEach(ch => console.log(ch));
}
```
- Time Complexity: O(n) → single pass through the string.
- Space Complexity: O(n) → stores consonants in an array.

### Solution 2 Using for...of (Two Loops, No Extra Array)
- Use `for...of` loop for cleaner iteration.
- First loop prints vowels.
- Second loop prints consonants.
- No extra memory allocation.
```javascript
function vowelsAndConsonants(s) {
    const vowels = "aeiou";

    // Print vowels
    for (const ch of s) {
        if (vowels.includes(ch)) console.log(ch);
    }

    // Print consonants
    for (const ch of s) {
        if (!vowels.includes(ch)) console.log(ch);
    }
}
```
- Time Complexity: O(n) → two passes, but still linear.
- Space Complexity: O(1) → no extra array needed.

### What I Learned
- Practiced different loop styles in JavaScript (`for`, `forEach`, `for...of`).  
- Learned the trade-offs between **time efficiency** and **space efficiency**:  
  - One-pass with extra memory vs. two-pass with no extra memory.  
- Saw that `for...of` is clean and allows `break`/`continue`, while `forEach` cannot break early.  
- Reinforced the use of **`.includes()`** for membership checks in strings.  
- Writing two solutions to the same problem improved my ability to think about **alternative approaches**.