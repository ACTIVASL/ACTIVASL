// import React from 'react';

export const ActivaBrandLogo = ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]`}>
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>
            <filter id="metallic" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" result="blur" />
                <feSpecularLighting in="blur" surfaceScale="4" specularConstant="1" specularExponent="25" lightingColor="#e0f2fe" result="specOut">
                    <fePointLight x="-5000" y="-10000" z="20000" />
                </feSpecularLighting>
                <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
                <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" />
            </filter>
        </defs>
        <g filter="url(#metallic)">
            <path d="M 50 85 C 15 65, 10 30, 50 45 C 60 38, 75 35, 85 20" stroke="url(#logoGradient)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M 65 20 L 85 20 L 85 40" stroke="url(#logoGradient)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        </g>
    </svg>
);
