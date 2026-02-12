import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Software } from './Software';

describe('Software Component', () => {
    it('renders the core value proposition', () => {
        render(<Software />);
        expect(screen.getByText(/Soberanía Digital/i)).toBeInTheDocument();
        expect(screen.getByText(/Tu software/i)).toBeInTheDocument();
    });
});
