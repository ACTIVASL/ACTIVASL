import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  hoverable?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties; // Added to fix build
}

export const Card = ({
  children,
  className = '',
  noPadding = false,
  hoverable = false,
  onClick,
  style,
}: CardProps) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  // Removed unused opacity state

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverable) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative bg-white/95 backdrop-blur-xl rounded-2xl border border-white/80 ring-1 ring-[#00B2A9]/20 transition-all duration-300 overflow-hidden group ${hoverable
        ? 'hover:shadow-[0_20px_40px_-12px_rgba(0,178,169,0.1)] hover:-translate-y-1 cursor-pointer active:scale-[0.99] active:shadow-sm'
        : 'shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)]'
        } ${className}`}
      onClick={() => {
        // Haptic feedback for cards
        if (hoverable && typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(5);
        if (onClick) onClick();
      }}
      style={{
        background:
          'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 249, 251, 0.96) 100%)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        ...style,
      }}
    >
      {/* SPOTLIGHT OVERLAY */}
      {hoverable && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 178, 169, 0.06), transparent 40%)`,
          }}
        />
      )}
      <div className={`relative z-10 ${noPadding ? '' : 'p-6 md:p-8'}`}>{children}</div>
    </div>
  );
};
