"use client";

import React from "react";
import {
  Select as _Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ISelect {
  name: string;
  onSelect: (value: string) => void;
  placeholder?: string;
  defaultValue?: string | number | readonly string[] | undefined;
  options: { label: string | number | boolean; value: string }[];
}

const CustomSelect: React.FC<ISelect> = (props) => {
  return (
    <_Select onValueChange={props.onSelect} name={props?.name}>
      <SelectTrigger className="w-full bg-white">
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {props.options?.map((option, index) => (
            <SelectItem
              defaultValue={props.defaultValue}
              value={option.value}
              key={`${option.value}-${index}`}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </_Select>
  );
};

export default CustomSelect;
