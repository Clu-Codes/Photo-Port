import React from 'react';

// render simulates a DOM in node.js and cleanup removes the components from the DOM to prevent memory leakage and purify data & variables from conflicting in other tests
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);
describe('About component', () => {
    // test to verify that the component is rendering
    it('renders', () => {
        render(<About />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})
