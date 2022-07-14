import { describe, it, expect } from 'vitest';
import userAverageSessionsFactory from '../factories/userAverageSessionsFactory';

import {
    MOCKED_SESSIONS,
    formattedSessions,
} from '../__mocks__/lengthSessions';

describe('Testing session formatting', () => {
    it('should return the last 7 sessions formatted', () => {
        const formattedData =
            userAverageSessionsFactory().formatSessionDays(MOCKED_SESSIONS);
        expect(formattedData).toEqual(formattedSessions);
    });
});
