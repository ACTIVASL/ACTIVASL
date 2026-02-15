// CONFIG: ENTERPRISE GRID
export const GRID_SPACING = 60; // Grid cells

export class Particle {
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

    // Bounds
    width: number;
    height: number;

    constructor(w: number, h: number) {
        this.width = w;
        this.height = h;

        // Snap to grid
        this.x = Math.round((Math.random() * w) / GRID_SPACING) * GRID_SPACING;
        this.y = Math.round((Math.random() * h) / GRID_SPACING) * GRID_SPACING;
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
        if (this.targetX > this.width) this.targetX = this.width;
        if (this.targetY < 0) this.targetY = 0;
        if (this.targetY > this.height) this.targetY = this.height;
    }

    update(w: number, h: number) {
        this.width = w;
        this.height = h;

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

    draw(ctx: CanvasRenderingContext2D) {
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
