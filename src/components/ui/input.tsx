import * as React from "react";

import { cn } from "@/utils/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixnode?: React.ReactNode;
}
//  "flex h-10 w-full border-input bg-backgroundtext-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <span className={`h-10 flex items-center rounded-md border px-3 `}>
        <input
          type={type}
          className={cn(
            "flex w-full border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {props.prefixnode ? props.prefixnode : null}
      </span>
    );
  }
);
Input.displayName = "Input";

export { Input };
