# Day 3

## 1.Array

### Problem
Given an array with number. Find **the seconde largest number** in the array.

### Approach
- I choose to use spread parameter `[...]` and `new Set(variable)` to remove duplicated number in array. set its name is `uniqueNums`
- Sort out all numbers in array from highest to lowest with `Sort()` syntax.
- When all sorted choose the seconde element in the array. `uniqueNums[1]`

### What I Learned
- `new Set(variable)` removes duplicates, but must be spread (`[...new Set()]`) to convert back into an array.
- Sorting numerically in JavaScript requires a compare function:  
  - `.sort((a, b) => b - a)` → descending order.  
  - `.sort((a, b) => a - b)` → ascending order.
- Compare function behavior:  
  - Negative → `a` comes before `b`.  
  - Positive → `b` comes before `a`.  
  - Zero → leave unchanged.

### Complexity
- Removing duplicates: **O(n)**  
- Sorting: **O(n log n)**  
- Selecting second element: **O(1)**  
➡️ Overall: **O(n log n)** time, **O(n)** space.

### Example
Input: `[5, 4, 7, 2, 3, 3, 5, 1]`  
Output: `5`

--- 
## 2. Try, Catch, and Finally (Reverse a String)

### Problem
- Write a function `reverseString(s)` that:
  1. Tries to reverse the string `s` using `split()`, `reverse()`, and `join()`.  
  2. If an exception is thrown, catch it and print the **exception’s message**.  
  3. Always print `s`:  
     - If no exception → print the reversed string.  
     - If exception → print the original string.  

### My Approach
- Used `try...catch` to handle possible runtime errors.  
- Inside the `try` block:  
  - `s.split("")` → convert string into array of characters.  
  - `.reverse()` → reverse the array.  
  - `.join("")` → join characters back into a string.  
  - Print the reversed string.  
- If input is **not a string** (e.g., number, boolean, object), `.split()` will throw an error.  
- In the `catch` block:  
  - Print `error.message`.  
  - Print the original `s`.  

```javascript
function reverseString(s) {
    try {
        let arr = s.split("");
        let reversed = arr.reverse();
        let joined = reversed.join("");
        console.log(joined);
    } catch (error) {
        console.log(error.message);
        console.log(s);
    }
}
```
### What I Learned
- `try...catch` is used when code might throw an error at runtime.
- Useful when:
  - Working with user input (unpredictable types).
  - Handling JSON parsing, API responses, or file operations.
  - Preventing a program from crashing unexpectedly.
- `catch(error)` gives access to the error object, and error.message is the human-readable message.
- In this problem, if s is not a string → `.split("")` throws an exception → caught by catch.
- Even when an error occurs, the program **continues running safely**.

---

## 3. Throw (Error Handling)

### Problem
- Implement the function `isPositive(a)` with the following rules:  
  - If `a > 0` → return `"YES"`.  
  - If `a == 0` → throw an `Error` with the message `"Zero Error"`.  
  - If `a < 0` → throw an `Error` with the message `"Negative Error"`.  


### My Approach
- Used a `switch(true)` structure instead of `if...else if`.  
- Each case checks a condition:  
  - `a > 0` → return `"YES"`.  
  - `a === 0` → throw `"Zero Error"`.  
  - `a < 0` → throw `"Negative Error"`. 

```javascript
function isPositive(a) {
    switch (true) {
        case (a > 0): return "YES";
        case (a === 0): throw new Error("Zero Error");
        case (a < 0): throw new Error("Negative Error");
    }
}
```
### What I Learned
- The `throw` keyword is for signaling exceptional states — not valid results.
- Returning `"Zero Error"` would mix error flow with normal output; **throwing an Error** clearly separates them.
- Using `switch(true)` can sometimes be more readable than a long `if...else` if chain.
- I also learned that `switch` may use slightly less memory than multiple `if...else` conditions because it evaluates once and jumps to the matching case. (In practice, the performance difference is minor for small inputs, but `switch` can be cleaner and more efficient for many conditions).
- **Return** vs **Throw**:
  - Use `return` when a valid result can be provided.
  - Use `throw` when the input/state is invalid and should not be processed further.
- **Switch** vs **If-Else**:
  - Both solve the problem, but `switch(true)` can be cleaner and may use less memory for multiple conditions.
  - Readability and intent are often more important than micro-optimizations.