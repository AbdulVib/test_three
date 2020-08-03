import React, { Component } from 'react';
import { mount, shallow, ShallowWrapper } from 'enzyme'

//comps
import Congrats from './Congrats'

//helper
import { findTestByAttr, checkProps } from '../../../utils/testUtils'

//
const defaultprops = { success: false }

/**
 * Factory func to create a ShallowWrapper for the congrats component
 * @function setup
 * @param { object } props - comp props specific to this setup
 * @param { object } state - initial state for setup
 * @returns { ShallowWrapper } 
 */

const setup = ( props = {}, state = null ) => {
    const setUpProps = { ...defaultprops, ...props }
    const wrapper = shallow(<Congrats { ...setUpProps  }/>)
    return wrapper
    // return shallow(<App {...props}/>) //without child
    // return mount(<App {...props}/>) // with child
} 


describe('Congrats', () => {

    it('renders without an error', () => {
        const wrapper = setup({ success: false })
        const component = findTestByAttr(wrapper, 'component-congrats')  // type of Array 
        expect(component.length).toBe(1)
    });
    
    it('renders no text when `success` props is false ', () => {
        const wrapper = setup({ success: false })
        const component = findTestByAttr(wrapper, 'component-congrats')  // type of Array 
        expect(component.text()).toBe('')
    });
    
    it('show congrats message when `success` props is true ', () => {
        const wrapper = setup({ success: true })
        const component = findTestByAttr(wrapper, 'congrats-message')  // type of Array 
        expect(component.text()).not.toBe('')
    });
    
    it('doesnt throw warnig with expected props', () => {
        const expectedProps = { success: false }
        checkProps(Congrats, expectedProps)
    });
    

})