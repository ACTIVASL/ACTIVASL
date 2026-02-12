import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Global declaration removed to avoid conflict with lib.dom.d.ts
// If you get "Property 'startViewTransition' does not exist", update your tsconfig lib to include 'dom' with recent version or un-comment below but ensure modifiers match.
/*
declare global {
    interface Document {
        startViewTransition?: (callback: () => Promise<void> | void) => {
            finished: Promise<void>;
            ready: Promise<void>;
            updateCallbackDone: Promise<void>;
        };
    }
}
*/

export const ViewTransitions = () => {
    const location = useLocation();
    const lastLocation = useRef(location.pathname);

    useEffect(() => {
        // If path hasn't changed, do nothing
        if (lastLocation.current === location.pathname) return;

        // If browser doesn't support View Transitions, just update ref
        if (!document.startViewTransition) {
            lastLocation.current = location.pathname;
            return;
        }

        // Since React Router updates the DOM immediately, we can't easily intercept *before* the update 
        // without using a data router. However, for a simple "fade/slide" effect between pages
        // that have just mounted, we can try to snap the 'new' state.
        // BUT the standard way with React 18+ strict mode and BrowserRouter is tricky (flushSync).

        // BETTER STRATEGY FOR VITER/REACT-ROUTER without Data Router:
        // We are already seeing the NEW page here. The "Old" snapshot is gone.
        // To do this properly we need to hook into the Router's navigation *before* it happens.
        // Since we are using standard BrowserRouter, that's hard.

        // FALLBACK: "Enter" Animation.
        // We update the body class to trigger a CSS animation.
        document.body.classList.remove('page-transition-enter');
        // Force reflow
        void document.body.offsetWidth;
        document.body.classList.add('page-transition-enter');

        lastLocation.current = location.pathname;
    }, [location]);

    return null;
};
