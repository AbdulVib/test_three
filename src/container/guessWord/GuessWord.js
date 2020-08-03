import React from 'react'

import PropTypes from 'prop-types'

export default function GuessWord({ guessedWords }) {
    let content;

    if(guessedWords.length === 0){
        content = (
            <span data-test='guess-instruction'>Try to guess the secret word</span>
        )
    } else{
        const guessedWordRow = guessedWords.map((word, i) => {
            return(
                <tr data-test="guessed-word" key={ i }>
                    <td>{ word.guessedWord }</td>
                    <td>{ word.letterMatchCount }</td>
                </tr>
            )
        })
        content = (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table className="table table-sm">
                    <thead className="thead-light">
                        <tr>
                            <th>Guess</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        { guessedWordRow }
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div data-test='component-guessed-word'>
            { content }
        </div>
    )
}

GuessWord.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
}