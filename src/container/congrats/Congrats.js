import React from 'react'

import { bool, String } from 'prop-types'

export default function Congrats(props) {
    return (
        props.success ? (
            <div data-test="component-congrats" className="alert alert-success">
                <span data-test="congrats-message">
                    Congratulation! you guessed the right word ...
                </span>
            </div>
        ) : <div data-test="component-congrats"></div>

    )
}

Congrats.propTypes = {
    success: bool.isRequired
    // success: String
}
