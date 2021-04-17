function findFirstStringInBracket(str){
    if(str.length > 0) {
        let indexFirstBracketFound = str.indexOf("(");
        if(indexFirstBracketFound >= 0) {
            let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
            let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
            if (indexClosingBracketFound > 0) {
                return wordsAfterFirstBracket.substring(1,indexClosingBracketFound)
            } else {
                return '';
            }
        } else {
            return '';
        }
    } else {
        return '';
    }
}

console.log(findFirstStringInBracket('bu(diasda))asda'))