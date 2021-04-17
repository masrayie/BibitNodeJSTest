function findFirstStringInBracket(str){
    if(str.length > 0) {
        let indexFirstBracketFound = str.indexOf("(");
        let indexFirstCloseBracketFound = str.indexOf(")");
        if(indexFirstBracketFound >= 0 && indexFirstCloseBracketFound >= 0) {
                return str.substring(indexFirstBracketFound+1,indexFirstCloseBracketFound)
        } else {
            return '';
        }
    } else {
        return '';
    }
}

console.log('Origin String:', 'Budi(sukirman)', 'Results:', findFirstStringInBracket('Budi(sukirman)'))