"use client";

import { ReduxStore } from "./store";
import { Provider } from "react-redux";

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <Provider store={ReduxStore}>{children}</Provider>;
