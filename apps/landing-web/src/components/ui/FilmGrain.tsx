import { } from 'react';

export const FilmGrain = () => {
    const opacity = 0.03;

    return (
        <div
            className="fixed inset-0 z-[9999] pointer-events-none mix-blend-overlay"
            style={{ opacity }}
        >
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.85"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </div>
    );
};
