# Day 0

## 1. Hello, World!

### Problem
Print "Hello, World!" to the console and then print the input string.

### My Approach
- Used `console.log()` to print output in JavaScript.
- First line is always `"Hello, World!"`.
- Second line prints the input string using the given variable.

### Example
Input:  Welcome to 10 Days of JavaScript!

Output:  
Hello, World!
Welcome to 10 Days of JavaScript!

## 2. Data Types

### Problem
Given three inputs as **strings**:
- `secondInteger` → an integer in string form
- `secondDecimal` → a floating-point number in string form
- `secondString` → a phrase

Do the following and print each result on a new line:
1) Sum `firstInteger = 4` with the integer value of `secondInteger`.
2) Sum `firstDecimal = 4.0` with the number value of `secondDecimal`.
3) Concatenate `firstString = "HackerRank "` with `secondString` (in that order).

### My Approach
- Convert string numbers to real numbers with **`Number()`**:
  - `Number(secondInteger)` for the integer sum.
  - `Number(secondDecimal)` for the decimal sum.
- Print each result using `console.log(...)`.
- Concatenate strings with either `+` or `.concat()`:
  - `firstString + secondString` **or** `firstString.concat(secondString)`.

### What I Learned
- **Input on HackerRank** is often provided as strings; you must convert to numbers before math.
- `Number("4")` → `4`, `Number("4.5")` → `4.5`.
  - Alternatives: `parseInt(s, 10)` and `parseFloat(s)`, but `Number()` is simplest here.
- `console.log` prints with a newline by default.
- String concatenation order matters: **`"HackerRank " + secondString`**, not the reverse.

