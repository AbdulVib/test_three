import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme'
import Input from './Input'

import { findTestByAttr, checkProps } from '../../../utils/testUtils'

/**
 * setUup func for Input comp
 * @returns {ShallowWrapper}
 */
const setUp = (secretWord="party") => {
    return shallow(<Input secretWord={secretWord}/>)
}

describe('Input', () => {
    it('should render input withut error', () => {
        const wrapper = setUp()
        const inputComponent = findTestByAttr(wrapper, 'component-input')
        expect(inputComponent.length).toBe(1)    
    });
    it('doesnt throw warning expected props', () => {
        checkProps(Input, { secretWord: 'party'} )
    });
});

describe('state control input field', () => {
    let mockSetCurrentGuess = jest.fn();
    let wrapper;
    beforeEach(() => {
        mockSetCurrentGuess.mockClear()
        React.useState = jest.fn(() => ['', mockSetCurrentGuess])
        wrapper = setUp()
    })

    it('updates the value of input box onChage', () => {
        const inputBox = findTestByAttr(wrapper, 'input-box')

        const mockEvent = { target: { value: 'train' } }
        inputBox.simulate('change', mockEvent)

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')

    });

    it('clears the filed on clicking submit button', () => {
        const submitButtion = findTestByAttr(wrapper, 'submit-button')

        submitButtion.simulate('click', { preventDefault() {} } )

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
        
    });
})

