import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WelcomingInfo from '../components/WelcomingInfo/WelcomingInfo';

const mockedName = 'Rocky';

describe('Testing user name display', () => {
    it("should display a greeting message with the user's firstname", () => {
        render(
            <WelcomingInfo firstName={mockedName} loading={false} error={''} />
        );
        const name = screen.getByText('Rocky');
        expect(name).toBeDefined;
    });
});
