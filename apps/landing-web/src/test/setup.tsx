import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Mock framer-motion
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
        span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
        p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
        section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
        img: ({ children, ...props }: any) => <img {...props} />,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
    useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
    useTransform: () => 0,
    useSpring: () => 0,
    useInView: () => true,
    useAnimation: () => ({ start: vi.fn() }),
}));

// Mock lucide-react
vi.mock('lucide-react', () => ({
    Sparkles: () => <div data-testid="icon-sparkles" />,
    ArrowRight: () => <div data-testid="icon-arrow-right" />,
    MonitorPlay: () => <div data-testid="icon-monitor-play" />,
    GraduationCap: () => <div data-testid="icon-graduation-cap" />,
    CheckCircle2: () => <div data-testid="icon-check-circle" />,
    Award: () => <div data-testid="icon-award" />,
    Globe: () => <div data-testid="icon-globe" />,
}));

// Mock IntersectionObserver
const IntersectionObserverMock = function () {
    return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
    };
};
vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
