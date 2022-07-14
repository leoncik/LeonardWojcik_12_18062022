import { describe, it, expect } from 'vitest';
import userPerformanceFactory from '../factories/userPerformanceFactory';

import {
    USER_PERFORMANCE_EN,
    USER_PERFORMANCE_FR,
} from '../__mocks__/performanceData';

describe('Testing session formatting', () => {
    it('should translate user performance names into French', () => {
        const translatedData = userPerformanceFactory().translateSkills(
            USER_PERFORMANCE_EN.kind
        );
        expect(translatedData).toEqual(USER_PERFORMANCE_FR.kind);
    });
});
