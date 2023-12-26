import { configureStore } from "@reduxjs/toolkit";
import environmentVarReducer from "./features/globalConfig/envSlice";
import createCardReducer from "./features/card/reducers";

export const ReduxStore = configureStore({
  reducer: {
    environmentVarReducer: environmentVarReducer,
    createCard: createCardReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type ReduxRootStateType = ReturnType<typeof ReduxStore.getState>;
export type ReduxDispatchType = typeof ReduxStore.dispatch;
