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