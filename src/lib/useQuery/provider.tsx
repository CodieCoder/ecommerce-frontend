"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const UseQueryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [client] = React.useState(new QueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
export default UseQueryProvider;
