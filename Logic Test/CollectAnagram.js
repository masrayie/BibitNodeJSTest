function collectAnagram (arrString) {
    const data = arrString.slice(0)
    const anagrams = []
    while (data.length > 0) {
        let word = data[0]
        let idxpop = []
        let group = []
        for (i in data) {
            if (word.length === data[i].length) {
                idxpop.push(i)
                group.push(data[i])
            }
        }
        if (idxpop.length) {
            for (idx of idxpop) {
                data.splice(idx, 1)
            }
        }
        anagrams.push(group)
    }
    return anagrams
}

console.log(collectAnagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']))