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
