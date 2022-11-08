import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { App } from './app';

interface CryptoPlus extends Crypto {
    randomBytes: (arr: number) => void;
    subtle: SubtleCrypto;
}

Object.defineProperty(global.self, 'crypto', {
    value: {
        getRandomValues: (arr: number) =>
            (crypto as CryptoPlus).randomBytes(arr),
    },
});
(global.crypto as CryptoPlus).subtle = {} as SubtleCrypto; // this gets around the 'auth0-spa-js must run on a secure origin' error

describe('Given App component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <App />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('React', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
