import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

afterEach(cleanup)

describe('contact component', () => {
    it('renders', () => {
        render(<ContactForm/>)
    });

    it('renders', () => {
        const { asFragment } = render(<ContactForm/>)
        expect(asFragment()).toMatchSnapshot()
      });


    //   Working on these other tests 20.4.7
    //   it('renders', () => {
    //     const { getByTestId } = render(<Gallery currentCategory={portrait} />)
    //     expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
    //   });  
})