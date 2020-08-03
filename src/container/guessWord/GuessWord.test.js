import React, { Component } from 'react';
import { mount, shallow, ShallowWrapper } from 'enzyme'

//comps
import GuessWord from './GuessWord'

//helper
import { findTestByAttr, checkProps } from '../../../utils/testUtils'

//schema as per the component
const defaultprops = {
    guessedWords: [{ guessedWord: 'qwerty', letterMatchCount: 3 }]
}

/**
 * Factory func to create a ShallowWrapper for the congrats component
 * @function setup
 * @param { object } props - comp props specific to this setup
 * @param { object } state - initial state for setup
 * @returns { ShallowWrapper } 
 */

const setup = ( props = {}, state = null ) => {
    const setUpProps = { ...defaultprops, ...props }
    const wrapper = shallow(<GuessWord { ...setUpProps  } />)
    return wrapper
    // return shallow(<App {...props}/>) //without child
    // return mount(<App {...props}/>) // with child
} 


describe('Name of the group', () => {
    
    it('dows not thrw warning with expected props', () => {
        checkProps(GuessWord, defaultprops)
    });

    describe('if there is no word guessed', () => {
        let wrapper;
        
        beforeEach(() => {
            wrapper = setup({ guessedWords: [] })
        })
        
        it('renders without an error', () => {
            const component = findTestByAttr(wrapper, 'component-guessed-word')
            expect(component.length).toBe(1)
        }); 

        it('render instruction to guess a word', () => {
            const instruction = findTestByAttr(wrapper, 'guess-instruction')
            expect(instruction.text().length).not.toBe(0)
        })
       
    });

    describe('if there are words guessed', () => {
        let wrapper;

        const guessedWords = [
            { guessedWord: 'train', letterMatchCount: 3 },
            { guessedWord: 'agile', letterMatchCount: 1 },
            { guessedWord: 'party', letterMatchCount: 5 }
        ]

        beforeEach(() => {
            wrapper = setup({ guessedWords })
        })

        it('renders without crashing ', () => {
            const component = findTestByAttr(wrapper, 'component-guessed-word')
            expect(component.length).toBe(1)
        });

        it('renders `guesses word` section ', () => {
            const guessedWordsNode = findTestByAttr(wrapper, 'guessed-words')
            expect(guessedWordsNode.length).toBe(1)
        });
        
        it('total numbers of guessed words ', () => {
            const guessedWordsNode = findTestByAttr(wrapper, 'guessed-word')
            expect(guessedWordsNode.length).toBe(guessedWords.length)
        });
    
    });

});

