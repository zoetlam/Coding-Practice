/*
Topic: Conditional Statements (If-Else)
Problem: Given a score (0–30), return the corresponding letter grade.

Rules:
- 25 < score ≤ 30 → "A"
- 20 < score ≤ 25 → "B"
- 15 < score ≤ 20 → "C"
- 10 < score ≤ 15 → "D"
- 5 < score ≤ 10 → "E"
- 0 ≤ score ≤ 5  → "F"

Approach:
- Use a chain of if-else statements to check ranges in descending order.
- Return the first matching grade.
*/

function getGrade(score) {
    let grade;
    // Write your code here
     if(score <= 5 && score >= 0){
        grade = "F";
     } else if (score <= 10){
        grade = "E";
     } else if (score <= 15){
        grade = "D";
     } else if (score <= 20){
        grade = "C";
     } else if (score <= 25){
        grade = "B";
     } else if (score <= 30){
        grade = "A";
     } else{
        grade = "Invalid score";
     }
    return grade;
}
