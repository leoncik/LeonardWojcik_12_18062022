import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WelcomingInfo from '../components/WelcomingInfo/WelcomingInfo';

const mockedName = 'Rocky';

describe('Testing user name display', () => {
    it('should split the first name of the user', () => {
        // render(<WelcomingInfo firstName={mockedName} loading={false} />); // ! Error
        const welcomingText = screen.getByTestId('welcoming-info-name');
        expect(welcomingText.innerText).toBe('Bonjour Rocky');
    });
});
