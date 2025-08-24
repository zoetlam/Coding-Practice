function vowelsAndConsonants(s) {
    let array= [];
    const vowels = "aeiou";
    for (let i = 0; i < s.length; i++){
        if (vowels.includes(s[i])){
            console.log(s[i]);
        } else {
            array.push(s[i]);
        }
    }
    
    array.forEach((element) => console.log(element))
}
vowelsAndConsonants("javascript")

function vowelsAndConsonants2(s){
    const vowels = "aeiou";
    for (const ch of s) if (vowels.includes(ch)) console.log(ch);
    for (const ch of s) if (!vowels.includes(ch)) console.log(ch);
}