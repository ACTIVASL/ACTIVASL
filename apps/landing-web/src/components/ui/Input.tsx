import { motion } from 'framer-motion';
import { useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export const Input = ({ label, error, className, ...props }: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    return (
        <div className="relative group">
            <motion.div
                animate={isFocused ? "focused" : "idle"}
                variants={{
                    idle: { scale: 1, opacity: 0.5 },
                    focused: { scale: 1.02, opacity: 1 },
                }}
                className={clsx(
                    "absolute -inset-0.5 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 blur transition duration-500",
                    isFocused && "opacity-50"
                )}
            />
            <div className="relative">
                <input
                    {...props}
                    onFocus={(e) => {
                        setIsFocused(true);
                        props.onFocus?.(e);
                    }}
                    onBlur={(e) => {
                        setIsFocused(false);
                        setHasValue(!!e.target.value);
                        props.onBlur?.(e);
                    }}
                    onChange={(e) => {
                        setHasValue(!!e.target.value);
                        props.onChange?.(e);
                    }}
                    className={twMerge(
                        "w-full bg-slate-950/80 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-brand-primary/50 transition-all font-inter",
                        "peer", // for label peer-focus
                        className
                    )}
                    placeholder={label} // Required for peer-placeholder-shown
                />
                <label
                    className={clsx(
                        "absolute left-4 transition-all duration-200 pointer-events-none text-slate-500 font-display font-medium tracking-wide",
                        // State: Focused or Has Value -> Move up
                        (isFocused || hasValue || props.value) ? "-top-2.5 text-xs bg-slate-950 px-1 text-brand-primary" : "top-3.5 text-base"
                    )}
                >
                    {label}
                </label>

                {/* Status Indicator Icon could go here */}
            </div>
            {error && (
                <p className="mt-1 text-xs text-red-500 font-bold animate-pulse">
                    /!/ {error}
                </p>
            )}
        </div>
    );
};
