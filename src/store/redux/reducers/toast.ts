import { ToastActionElement } from "@/components/ui/toast";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReduxRootStateType } from "../store";

export type ToastType = {
  id?: string;
  type?: "success" | "warning" | "error" | "info" | "default";
  title?: string;
  description?: string;
  action?: ToastActionElement;
};

interface IToast {
  toast: ToastType | null;
}

const initialState: IToast = {
  toast: null,
};

export const ToastSlice = createSlice({
  name: "Toast",
  initialState,
  reducers: {
    reset: () => ({ toast: null }),
    createToast: (state, action: PayloadAction<ToastType>) => {
      return { ...state, toast: action.payload };
    },
  },
});

export const { reset, createToast } = ToastSlice.actions;
export const getToastState = (state: ReduxRootStateType) => state.globalToast;
const ToatsReducer = ToastSlice.reducer;
export default ToatsReducer;
