import { useEffect, useRef } from 'react';
import { Particle } from './lib/Particle';

export const TitaniumBackground = () => {
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

        const PARTICLE_COUNT = Math.floor((width * height) / 15000); // Density control
        const particles: Particle[] = [];

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle(width, height));
        }

        // ANIMATION LOOP
        const animate = () => {
            // Slight trails for "Screen" feel
            ctx.fillStyle = 'rgba(10, 10, 10, 0.2)'; // Brand Dark with alpha
            ctx.fillRect(0, 0, width, height);

            // Draw Static Grid (Subtle)
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 1;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.update(width, height);

                // Draw "tail" or path if moving
                if (Math.abs(p.x - p.targetX) > 1 || Math.abs(p.y - p.targetY) > 1) {
                    ctx.beginPath();
                    ctx.strokeStyle = p.color === '#00f3ff' ? 'rgba(0, 243, 255, 0.1)' : 'rgba(75, 85, 99, 0.1)';
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p.targetX, p.targetY);
                    ctx.stroke();
                }

                p.draw(ctx);
            }

            // Draw connections between aligned nodes (The Circuit)
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 243, 255, 0.05)';
            ctx.lineWidth = 1;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];

                    const SameX = Math.abs(p1.x - p2.x) < 1;
                    const SameY = Math.abs(p1.y - p2.y) < 1;
                    const dist = Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);

                    if ((SameX || SameY) && dist < 300) {
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                    }
                }
            }
            ctx.stroke();

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setSize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ mixBlendMode: 'screen', opacity: 0.8 }}
        />
    );
};
