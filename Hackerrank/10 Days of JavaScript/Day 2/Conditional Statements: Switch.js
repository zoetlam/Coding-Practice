/*
Given a string, return a letter category based on the first character:
- {a, e, i, o, u} → "A"
- {b, c, d, f, g} → "B"
- {h, j, k, l, m} → "C"
- {n, p, q, r, s, t, v, w, x, y, z} → "D"
*/

function getLetter(s) {
  let letter;
  // Write your code here
  switch (s[0]) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      letter = "A";
      break;

    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      letter = "B";
      break;

    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      letter = "C";
      break;

    default:
      letter = "D";
  }

  return letter;
}
