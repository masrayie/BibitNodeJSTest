function collectAnagram (arrString) {
    const data = arrString.slice(0).sort((a,b) => a.length - b.length)
    const anagrams = []
    while (data.length > 0) {
        let word = data[0]
        let group = []
        for (i in data) {
            let arrData = data[i].split('')
            let arrWord = word.split('')
            if (word.length === data[i].length && arrData.every((d) => arrWord.includes(d))) {
                group.push(data[i])
            }
        }
        if (group.length) {
            for (wrd of group) {
                let idxNow = data.indexOf(wrd)
                data.splice(idxNow, 1)
            }
        }
        anagrams.push(group)
    }
    return anagrams
}