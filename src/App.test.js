import React from 'react';
import { shallow, ShallowWrapper, mount, ReactWrapper } from 'enzyme'
import App from './App'

import { findTestByAttr } from '../utils/testUtils'

//
import hooksAction from './actions/hookAction'

const mockGetSecretWord = jest.fn()

/**
 * @returns {ReactWrapper}
 */
const setUp = () => {

    mockGetSecretWord.mockClear()
    hooksAction.getSecretWord = mockGetSecretWord

    // use mount bcz useEffect is not called on shallow 
    // return shallow(<App />)
    return mount(<App />)
}

describe('renders without crashing', () => {
    it('renders app component', () => {
        const wrapper = setUp()
        const component = findTestByAttr(wrapper, 'component-app') 
        expect(component.length).toBe(1)
    });
});

describe('getSecretdWord calls', () => {
    it('getSecretWord get calls on app mount', () => {
        setUp()
        
        //chek to see if the secret word is updated or not
        expect(mockGetSecretWord).toHaveBeenCalled()
    });

    it('secretWord doent update on App Update', () => {
        const wrapper =  setUp()
        mockGetSecretWord.mockClear()
        wrapper.setProps()

        expect(mockGetSecretWord).not.toHaveBeenCalled()
    });
})


