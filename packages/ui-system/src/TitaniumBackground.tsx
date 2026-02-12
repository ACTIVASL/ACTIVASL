import { useEffect, useRef } from 'react';

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

        // CONFIG: ENTERPRISE GRID
        const GRID_SPACING = 60; // Grid cells
        const PARTICLE_COUNT = Math.floor((width * height) / 15000); // Density control

        // PARTICLES (Data Packets)
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
            // Movement State
            targetX: number;
            targetY: number;
            wait: number;

            constructor() {
                // Snap to grid
                this.x = Math.round((Math.random() * width) / GRID_SPACING) * GRID_SPACING;
                this.y = Math.round((Math.random() * height) / GRID_SPACING) * GRID_SPACING;
                this.targetX = this.x;
                this.targetY = this.y;

                this.vx = 0;
                this.vy = 0;
                this.wait = Math.random() * 50;

                this.size = Math.random() > 0.9 ? 2.5 : 1.5; // Some larger "Hub" nodes
                // Strictly Corporate Palette
                this.color = Math.random() > 0.7 ? '#00f3ff' : '#4b5563'; // Cyan (Active) or Gray (Infrastructure)
            }

            pickNewTarget() {
                const direction = Math.floor(Math.random() * 4); // 0: U, 1: R, 2: D, 3: L
                const dist = Math.floor(Math.random() * 3 + 1) * GRID_SPACING; // Move 1-3 grid units

                switch (direction) {
                    case 0: this.targetY -= dist; break; // Up
                    case 1: this.targetX += dist; break; // Right
                    case 2: this.targetY += dist; break; // Down
                    case 3: this.targetX -= dist; break; // Left
                }

                // Keep bounds
                if (this.targetX < 0) this.targetX = 0;
                if (this.targetX > width) this.targetX = width;
                if (this.targetY < 0) this.targetY = 0;
                if (this.targetY > height) this.targetY = height;
            }

            update() {
                // Linear Interpolation for smooth "Mechanical" slide
                const dx = this.targetX - this.x;
                const dy = this.targetY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 1) {
                    // Arrived
                    this.x = this.targetX;
                    this.y = this.targetY;

                    if (this.wait > 0) {
                        this.wait--;
                    } else {
                        this.pickNewTarget();
                        this.wait = Math.random() * 60 + 20; // Pause at nodes (Processing data)
                    }
                } else {
                    // Move
                    this.x += dx * 0.05; // Ease out
                    this.y += dy * 0.05;
                }
            }

            draw() {
                if (!ctx) return;

                // Draw Node
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;

                // Glow for active nodes
                if (this.color === '#00f3ff') {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = '#00f3ff';
                } else {
                    ctx.shadowBlur = 0;
                }

                ctx.fill();
                ctx.shadowBlur = 0; // Reset
            }
        }

        const particles: Particle[] = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
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

            // Optimization: Only draw grid near particles or just a fixed pattern? 
            // Fixed pattern is too heavy for full screen usually. 
            // Let's just draw connections between particles if aligned.

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.update();

                // Draw "tail" or path if moving
                if (Math.abs(p.x - p.targetX) > 1 || Math.abs(p.y - p.targetY) > 1) {
                    ctx.beginPath();
                    ctx.strokeStyle = p.color === '#00f3ff' ? 'rgba(0, 243, 255, 0.1)' : 'rgba(75, 85, 99, 0.1)';
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p.targetX, p.targetY);
                    ctx.stroke();
                }

                p.draw();
            }

            // Draw connections between aligned nodes (The Circuit)
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 243, 255, 0.05)';
            ctx.lineWidth = 1;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];

                    // Share X or Share Y axis? (Aligned)
                    // Use a tolerance because of float interpolation
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
