/*### Problem
- Write a function `reverseString(s)` that:
  1. Tries to reverse the string `s` using `split()`, `reverse()`, and `join()`.  
  2. If an exception is thrown, catch it and print the **exception’s message**.  
  3. Always print `s`:  
     - If no exception → print the reversed string.  
     - If exception → print the original string.  */

function reverseString(s) {
    try {
        let arr = s.split("");
        let reverse = arr.reverse();
        let joinReverse = reverse.join("");
        console.log(joinReverse);
    }
    catch (error)
        {
            console.log(error.message);
            console.log(s);
        }
    
    
}