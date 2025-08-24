function vowelsAndConsonants(s) {
    let array= [];
    const vowel = "aeiou";
    for (let i = 0; i < s.length; i++){
        if (vowel.includes(s[i])){
            console.log(s[i]);
        } else {
            array.push(s[i]);
        }
    }
    array.forEach((element) => console.log(element))
}
vowelsAndConsonants("javascript")