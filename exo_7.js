function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
}


let phrase = "I Love programming";
let phraseInversee = reverseWords(phrase);
console.log(phraseInversee); 
