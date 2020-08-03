// import React, { useState, useEffect, useContext } from 'react'
import React, { useEffect } from 'react';
import axios from 'axios'
import PropTyps from 'prop-types'

export default function Input({ secretWord }) {
    const [ currentGuess, setCurrentGuess ] = React.useState('') //for writing mock teest we hv to import state like this otherwise it will throw error 

    // useEffect(() => {
    //     axios.get('http://localhost:3030/')
    //         .then(res => console.log(res, ' ress'))
    // }, [])

    return (
        <div data-test="component-input">
            <form className="form-inline">
                <input
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder="Enter Guess"
                    value={ currentGuess }
                    onChange={ e => setCurrentGuess(e.target.value) }
                     
                />
                <button type="submit" className="btn btn-primary mb-2" data-test="submit-button" onClick={ e => {
                    e.preventDefault()
                    //updateGuessesWord
                    //check aginst the secret word nd update success if needed
                    setCurrentGuess("")
                }}>SUBMIT</button>
            </form>
        </div>
    )
}

Input.propTypes = {
    secretWord: PropTyps.string.isRequired
}
