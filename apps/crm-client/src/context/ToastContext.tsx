/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, ReactNode } from 'react';
import { Toaster, toast } from '@monorepo/ui-system';

interface ToastContextType {
  addToast: (message: string, type?: 'success' | 'error') => void;
  success: (message: string) => void;
  error: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const addToast = (message: string, type: 'success' | 'error' = 'success') => {
    if (type === 'error') {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };

  const success = (message: string) => toast.success(message);
  const error = (message: string) => toast.error(message);

  return (
    <ToastContext.Provider value={{ addToast, success, error }}>
      {children}
      <Toaster
        position="top-center"
        richColors
        theme="light"
        closeButton
        className="toaster-theme"
        toastOptions={{
          style: {
            borderRadius: '16px',
            border: '1px solid rgba(0,0,0,0.05)',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
            fontSize: '14px',
            fontWeight: 600,
          }
        }}
      />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
