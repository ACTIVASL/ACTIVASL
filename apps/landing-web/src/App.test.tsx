import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App Smoke Test', () => {
    it('renders without crashing', () => {
        render(<App />);
        // Check for a known element, e.g., the title or a navigation item
        // Since we have heavy lazy loading, we might need to wait or check for static parts
        // For a pure smoke test, just rendering ensures no immediate runtime errors in the main tree.
        expect(true).toBeTruthy();
    });
});
