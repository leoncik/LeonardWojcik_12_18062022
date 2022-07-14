import { describe, it, expect } from 'vitest';
import userActivityFactory from '../factories/userActivityFactory';

import {
    MOCKED_SESSIONS,
    formattedSessions,
} from '../__mocks__/activitySessions';

describe('Testing session formatting', () => {
    it('should return the last 7 sessions formatted', () => {
        const formattedData = userActivityFactory().getSession(MOCKED_SESSIONS);
        expect(formattedData).toEqual(formattedSessions + '1');
    });
});
