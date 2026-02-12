import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-black flex items-center justify-center p-4">
                    <div className="max-w-md w-full bg-slate-900 border border-red-500/30 rounded-2xl p-8 text-center shadow-2xl">
                        <h1 className="text-3xl font-bold text-red-500 mb-4 font-mono">SYSTEM FAILURE</h1>
                        <p className="text-slate-300 mb-6">
                            Critical integrity violation detected. The rendering engine has encountered an unrecoverable state.
                        </p>
                        <div className="bg-black/50 p-4 rounded-lg text-left text-xs font-mono text-red-400 mb-6 overflow-auto max-h-32">
                            {this.state.error?.toString()}
                        </div>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-colors uppercase tracking-wider"
                        >
                            System Reboot
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
