const getLetterMatchCount = (guessedWord, secretWord) => {
    const secretLetterSet = new Set(secretWord.split(''))
    const secretGuessedSet = new Set(guessedWord.split(''))

    return [...secretLetterSet].filter(letter => secretGuessedSet.has(letter)).length
}

export {
    getLetterMatchCount
}