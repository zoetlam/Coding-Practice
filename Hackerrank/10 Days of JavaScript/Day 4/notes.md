# Day 4:

## 1. Rectangle Object

### Problem
- Write a function `Rectangle(a, b)` that returns an **object** with the following properties:
  - `length` = a  
  - `width` = b  
  - `perimeter` = 2 * (a + b)  
  - `area` = a * b 

⚠️ Important: The task says **return an object**, not print values.  
HackerRank’s locked code will use the object and print its properties automatically.

### My Approach
- Defined a function `Rectangle(a, b)`.  
- Used an **object literal** with required keys: `length`, `width`, `perimeter`, and `area`.  
- Returned this object directly.  

```javascript
function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    };
}
```

### What I Learned
- Always **read the problem carefully**: sometimes it asks to print, sometimes to return.
- `return object` → must create an object with exact property names.
- HackerRank locked code will handle printing, so do not use console.log inside this function.
- Difference reminder:
    - `console.log` → print to console.
    - `return value` → return a single result (e.g., number, string).
    - `return object` → return an object with multiple properties.

---

## 2. Count Objects

### Problem
- You are given an array of objects.  
- Each object has two properties: `x` and `y`.  
- Task: **Return the number of objects where `x == y`.**  

⚠️ Important: The function must **return** the count, not print it. HackerRank’s locked code will handle the output.

---

### My Approach
- Created a function `getCount(objects)` that receives an array of objects.  
- Initialized a counter `result = 0`.  
- Iterated over the array using a `for...of` loop.  
- If `element.x === element.y`, incremented the counter.  
- Returned the final count.  

```javascript
function getCount(objects) {
    let result = 0;
    for (let element of objects) {
        if (element.x === element.y) {
            result++;
        }
    }
    return result;
}
```
### What I Learned
- Always check if the problem asks for return vs print.
- Practiced iterating over arrays of objects with `for...of`.
- Learned how to access object properties using dot notation (`element.x`, `element.y`).
- Problems may look wordy, but the key idea is simple: filter and count.