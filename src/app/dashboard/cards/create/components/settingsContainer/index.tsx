import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn, combinedClassNames } from "@/utils/utils";

interface ISettingsCard extends React.HTMLAttributes<HTMLDivElement> {
  cardTitle?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
}
const SettingsCard: React.FC<ISettingsCard> = (props) => {
  return (
    <div
      className={combinedClassNames(
        "h-auto mt-3 w-[24rem] mx-auto py-0",
        props.className
      )}
    >
      <Card {...props} className="py-0">
        {props.cardTitle || props.description ? (
          <CardHeader className="py-0">
            {props?.cardTitle ? (
              <CardTitle className="p-0 text-sm">{props.cardTitle}</CardTitle>
            ) : null}
            {props.description ? (
              <CardDescription>{props.description}</CardDescription>
            ) : null}
          </CardHeader>
        ) : null}
        <CardContent className="pt-2 mx-auto">{props?.children}</CardContent>
        {props.footer ? (
          <CardFooter className="flex justify-between">
            {props.footer}
          </CardFooter>
        ) : null}
      </Card>
    </div>
  );
};

export const DefaultCardTitle: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div className={cn("w-auto mx-auto pt-4 pb-2 mb-2 border-b", className)}>
      {children}
    </div>
  );
};

export default SettingsCard;
