import * as React from "react";
import { create } from "zustand";

type Toast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
};

interface ToastStore {
  toasts: Toast[];
  addToast: (toast: Toast) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (toast) =>
    set((state) => ({
      toasts: [...state.toasts, toast],
    })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}));

export function useToast() {
  const addToast = useToastStore((state) => state.addToast);
  return {
    toast: addToast,
  };
}
