import { describe, it, expect } from 'vitest';
import userInfoFactory from '../factories/userInfoFactory';

import { MOCKED_KEY_DATA, formattedCalories } from '../__mocks__/keyData';

describe('Testing session formatting', () => {
    it('should convert calories into Kcal', () => {
        const formattedData = userInfoFactory().formatCalories(MOCKED_KEY_DATA);
        expect(formattedData).toEqual(formattedCalories);
    });
});
