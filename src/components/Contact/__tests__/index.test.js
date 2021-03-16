import React from 'react';
import { cleanup, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact is rendering', () => {
    it('renders', () => {
        render(<Contact></Contact>);
    });

    it('matches h1 tag id', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact Me')
    });

    it('matches submit form id', () => {
        const { getByRole } = render(<Contact />);
        expect(getByRole('button')).toHaveTextContent('Submit')
    })
})
