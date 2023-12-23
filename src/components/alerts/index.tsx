import { AlertCircle, X } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn, uppercaseFirstLetter } from "@/utils/utils";

interface ICustomAlert {
  type?: "success" | "warning" | "error" | "info" | "default";
  title?: React.ReactNode;
  show?: boolean;
  children: React.ReactNode;
  containerClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  infoIcon?: boolean;
  closeIcon?: boolean;
}

const CustomAlert: React.FC<ICustomAlert> = ({
  type = "default",
  title,
  show,
  children,
  containerClassName,
  contentClassName,
  titleClassName,
  infoIcon,
  closeIcon,
}) => {
  return show ? (
    <div className="py-2">
      <Alert
        variant={type && type === "error" ? "destructive" : "default"}
        className={containerClassName}
      >
        <div className="flex">
          <div className="w-[96%] flex align-middle items-center">
            <div className="inline-block">
              {infoIcon ?? <AlertCircle className="h-4 w-4" />}
            </div>
            <div className="ml-4">
              {type && type !== "default" ? (
                <div className="">
                  {title ?? (
                    <AlertTitle
                      className={cn(
                        "inline-block font-bold tracking-wide",
                        titleClassName
                      )}
                    >
                      {uppercaseFirstLetter(type)}
                    </AlertTitle>
                  )}
                </div>
              ) : null}
              <div>
                <AlertDescription
                  className={cn("inline-block ml-3", contentClassName)}
                >
                  {children}
                </AlertDescription>
              </div>
            </div>
          </div>
          {closeIcon ? (
            <div>
              <X size={18} className="cursor-pointer" />
            </div>
          ) : null}
        </div>
      </Alert>
    </div>
  ) : null;
};

export default CustomAlert;
