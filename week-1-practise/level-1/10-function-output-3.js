function concatenate(firstWord, secondWord, thirdWord) {
    // Write the body of this function to concatenate three words together
    return firstWord.concat(secondWord).concat(thirdWord);
}
/*function s(w1, w2) {
    return w1.concat(w2);
}

var result = s('code', 'your');
console.log(result);*/

var result = concatenate('code', 'your', 'future');
console.log(result); // expected result = "codeyourfuture"