import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WelcomingInfo from '../components/WelcomingInfo/WelcomingInfo';

const mockedName = 'Rocky';
const expectedOutput = 'Bonjour <span class="_user-name_c5t9o_1">Rocky</span>';

describe('Testing user name display', () => {
    it("should display a greeting message with the user's firstname", () => {
        render(<WelcomingInfo firstName={mockedName} loading={false} />);
        const welcomingText = screen.getByTestId('greeting');
        expect(welcomingText.innerHTML).toBe(expectedOutput);
    });
});
