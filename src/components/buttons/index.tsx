import { ButtonProps } from "../ui/button";
import { Button as ShadButton } from "../ui/button";
import { MdDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";

export interface IButton extends ButtonProps {
  label?: React.ReactNode;
  role?: ButtonRolesEnum;
  icon?: React.ReactNode;
  loading?: boolean;
}

export enum ButtonRolesEnum {
  delete = "delete",
  save = "save",
  edit = "edit",
  submit = "submit",
  default = "default",
  positive = "positive",
  negative = "negative",
  warning = "warning",
  secondary = "secondary",
}

export const customSize = (
  size: IButton["size"]
): { container?: string; icon?: string } => {
  switch (size) {
    case "default":
      return { container: "p-3", icon: "text-md" };
    case "icon":
      return { container: "p-2 h-7 w-7", icon: "text-md" };
    case "lg":
      return { container: "p-8", icon: "text-md" };
    case "sm":
      return { container: "p-1", icon: "text-sm" };
    default:
      return { container: "py-2 px-4 h-auto", icon: "" };
  }
};

const iconClassName = "text-lg";
const commonClassName =
  "cursor-pointer rounded font-bold bg-sky-600 text-white hover:bg-sky-500 active:shadow-[inset_0px_0px_10px_rgba(0,0,0,0.3)]";

export const prededfinedButttons = (props: IButton) => {
  const result: IButton = { ...props };
  // if (!result.role) return result;

  const size = customSize(result.size);
  let customClassName = "";
  // let label = result.label;

  if (props.role === ButtonRolesEnum.delete) {
    customClassName = `bg-[#f44] hover:bg-[#f77]`;
    result.icon = <MdDelete />;
  } else if (props.role === ButtonRolesEnum.edit) {
    result.icon = <BiSolidEditAlt />;
  } else if (props.role === ButtonRolesEnum.secondary) {
    customClassName = `bg-slate-500 hover:bg-slate-400`;
  }

  result.className = `${commonClassName} ${size.container} ${customClassName} ${
    result.className || ""
  }`;
  result.size = undefined;

  return result;
};

export const CustomButton: React.FC<IButton> = (props) => {
  const newProps = prededfinedButttons(props);

  return (
    <ShadButton {...newProps}>
      {props.children ? (
        props.children
      ) : (
        <>
          <span>{newProps?.icon}</span>
          <span>{newProps?.label}</span>
        </>
      )}
    </ShadButton>
  );
};
