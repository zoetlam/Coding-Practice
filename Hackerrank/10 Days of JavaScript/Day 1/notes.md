# Day 1

## 1. Arithmetic Operators (Area & Perimeter of Rectangle)

### Problem  
- Write two functions:  
  1. **`getArea(length, width)`** → return the area of a rectangle.  
  2. **`getPerimeter(length, width)`** → return the perimeter of a rectangle.  

### My Approach  
- Area: formula is **length × width** → `area = length * width`.  
- Perimeter: formula is **2 × (length + width)** → `perimeter = (length + width) * 2`.  
- Used `let` variables to store results and **`return`** them.  
- Did not use `console.log()` because HackerRank prints the returned values automatically.  

### What I Learned  
- Practiced **function declaration** syntax in JavaScript:  

  ```javascript
  function getArea(length, width) {
      return length * width;
  }

  function getPerimeter(length, width) {
      return 2 * (length + width);
  }


## 2. Functions

### Problem
- Write a function to calculate **factorial** of a given number `n`.

### My Approach

#### Iterative (Using While Loop)
- Initialize `result = 1`.  
- Multiply `result` by `value` until `value` decreases to 1.  
- Use **`value--`** to decrement each step.  
- Return `result`.  

```javascript
function factorial(value) {
    let result = 1;
    while (value > 1) {
        result = value * result;
        value--;
    }
    return result;
}
```
#### Recursive (Alternative Approach)
- Base case: if n <= 1, return 1.
- Recursive case: factorial(n) = n * factorial(n - 1).

```javascript
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
```
What I Learned
- `value--` is shorthand for value = value - 1.
- Iterative loops are straightforward; recursion is more elegant but can be harder to debug.
- Recursion depth is safe here because of small constraint (1 ≤ n ≤ 10).

## 3.Let and Const (Circle Area & Perimeter)

### Problem
- Declare a **constant** variable `PI` and assign it `Math.PI`.  
- Read a number `r` (radius of a circle).  
- Calculate:  
  - **Area** = PI × r × r  
  - **Perimeter** = 2 × PI × r  
- Print area on the first line, perimeter on the second line.

### My Approach
- Used **`const`** for `PI` because its value never changes.  
- Read input with `readLine()`, which returns a string.  
- Converted to a floating-point number using **`parseFloat()`**:  
  ```javascript
  let r = parseFloat(readLine());
  ```
- Calculated formulas directly and printed with console.log().

### What I Learned
- Difference between let and const:
**`const`** → value cannot be reassigned.
**`let`** → value can change (e.g., user input).
**`parseFloat()`** is used instead of `**parseInt()**` because the radius can be decimal.
`Math.PI` provides a precise constant for π.

