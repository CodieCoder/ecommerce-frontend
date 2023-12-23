"use client";

import React from "react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useAppDispatcher, useAppSelector } from "@/store/redux/hooks";
import { getToastState, reset } from "@/store/redux/reducers/toast";

export function Toaster() {
  const { toast, toasts } = useToast();

  const globalToast = useAppSelector(getToastState);
  const dispatch = useAppDispatcher();

  const runToast = React.useCallback(() => {
    if (globalToast.toast) {
      toast({
        title: globalToast.toast.title,
        description: globalToast.toast.description,
        action: globalToast.toast.action,
      });
      setTimeout(() => dispatch(reset()), 100);
    }
  }, [globalToast]);

  React.useEffect(() => {
    runToast();
  }, [globalToast]);

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
