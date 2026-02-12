import { useEffect, useRef } from 'react';

/**
 * PROPOSAL 4: DEEP HORIZON
 * Concept: Infinite 3D Plane moving towards viewer. 
 * Best for: "Scalability", "Future", "Global Reach".
 */
export const HorizonBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        const setSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        setSize();
        window.addEventListener('resize', setSize);

        let offset = 0;
        const SPEED = 2;
        const GRID_SIZE = 50;

        const animate = () => {
            ctx.fillStyle = '#0a0a0a'; // Opaque background
            ctx.fillRect(0, 0, width, height);

            // Horizon Line
            const horizon = height * 0.4;
            const fov = 300;

            offset = (offset + SPEED) % GRID_SIZE;

            ctx.lineWidth = 1;

            // Vertical Lines (Perspective)
            // We draw lines from horizon radiating out
            const centerX = width / 2;

            // Draw floor
            for (let z = 0; z < height; z += 5) {
                // Not a real 3D engine, just a retro synthwave hack
                // Let's do a simpler "Moving Floor" effect
            }

            // Let's try a starfield warp instead, simpler in 2D canvas without complex math
            // Actually, let's do the "Warp Speed" stars

            ctx.fillStyle = 'rgba(0,0,0,0.2)';
            ctx.fillRect(0, 0, width, height);

            // Draw Perspective Grid
            ctx.beginPath();
            ctx.strokeStyle = '#7c3aed'; // Purple Grid

            // Horizontal moving lines
            for (let i = 0; i < height - horizon; i += 20) {
                // Non-linear spacing for depth
                const y = horizon + i + (i * i) / 500;
                if (y > height) break;

                // Moving part
                const yOffset = (offset + y) % 20; // glitchy

                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
            }
            // Radiating lines
            for (let i = -width; i < width * 2; i += 100) {
                const x = i + (width / 2 - i) * 0.2; // Perspective
                ctx.moveTo(centerX, horizon);
                ctx.lineTo(i, height);
            }

            ctx.globalAlpha = 0.2;
            ctx.stroke();
            ctx.globalAlpha = 1;

            // Sun/Glow at horizon
            const grad = ctx.createRadialGradient(centerX, horizon, 0, centerX, horizon, 400);
            grad.addColorStop(0, 'rgba(0, 243, 255, 0.2)');
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, width, height);

            requestAnimationFrame(animate);
        };
        const animId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', setSize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ mixBlendMode: 'screen' }} />;
};
