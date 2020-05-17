import { greet } from './greet';

describe('greet', () => {
    it('should include the name in the message', () => {
        //expect(greet('Mosh')).toBe('Welcome Mosh'); // fragile test
        expect(greet('Mosh')).toContain('Mosh');
    })
})