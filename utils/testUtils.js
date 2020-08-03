import checkPropTypes from 'check-prop-types'
/**
 * Return shallow-Wrapper containing nodes with the given data-test value
 * @param { string } val - Value of data-test(attr) for search
 * @returns { ShallowWrapper } 
 */

const findTestByAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes, 
        conformingProps,
        'prop',
        component.name
    )

    expect(propError).toBeUndefined()
}

export {
    findTestByAttr,
    checkProps
}