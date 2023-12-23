import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EnvironmentVarbales = {
  BaseUrl: string;
};

const initialState = {
  BaseUrl: "http://localhost:3000",
} as EnvironmentVarbales;

export const environmentVariables = createSlice({
  name: "envVaribles",
  initialState,
  reducers: {
    reset: () => initialState,
    setEnvVariables: (state, action: PayloadAction<any>) => {
      return { ...state, [action.payload.name]: action.payload.value };
    },
  },
});

export const { reset, setEnvVariables } = environmentVariables.actions;
export default environmentVariables.reducer;
