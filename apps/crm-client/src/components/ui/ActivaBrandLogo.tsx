// import React from 'react';

export const ActivaBrandLogo = ({ className = "w-full h-full" }: { className?: string }) => (
    <img
        src="/logo-v2.png"
        alt="ACTIVA S.L."
        className={`${className} object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]`}
    />
);
