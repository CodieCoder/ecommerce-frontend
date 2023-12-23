"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/utils/utils";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import * as PopoverPrimitive from "@radix-ui/react-popover";

type buttoPropsType = ButtonProps & React.RefAttributes<HTMLButtonElement>;

type contentPropsType = Omit<
  PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>,
  "ref"
> &
  React.RefAttributes<HTMLDivElement>;

export interface IComboSelect {
  name?: string;
  options:
    | { label: React.ReactNode; value: string | boolean | number }[]
    | undefined;
  placeholder?: string;
  noSearchResult?: string;
  value?: string | boolean | number;
  onSelect?: (value: string | boolean | number | undefined) => void;
  buttonProps?: buttoPropsType;
  contentProps?: contentPropsType;
}

export const ComboSelect: React.FC<IComboSelect> = ({
  name,
  options,
  placeholder,
  noSearchResult,
  value,
  onSelect,
  buttonProps,
  contentProps,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
          {...buttonProps}
        >
          {value ? value : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn("w-[200px] p-0", contentProps?.className)}
        {...contentProps}
      >
        <Command>
          <CommandInput placeholder={placeholder} name={name} />
          <CommandEmpty>
            {noSearchResult ? noSearchResult : "Nothing found"}
          </CommandEmpty>
          <CommandGroup>
            <div className="max-h-60 overflow-y-auto">
              {options
                ? options.map((option, index) => (
                    <CommandItem
                      key={index}
                      onSelect={(currentValue) => {
                        onSelect &&
                          onSelect(
                            currentValue === value ? undefined : currentValue
                          );
                        setOpen(false);
                      }}
                      className="cursor-pointer"
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value?.toString().toLowerCase() ===
                            option.value.toString().toLowerCase()
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                        name={name}
                      />
                      {option.label}
                    </CommandItem>
                  ))
                : null}
            </div>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
