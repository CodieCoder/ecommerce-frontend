import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export interface IModal {
  children: React.ReactNode;
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?(open: boolean): void;
  modal?: boolean;
}

const Modal: React.FC<IModal> = (props) => {
  return (
    <Dialog
      modal={props.modal}
      open={props.open}
      onOpenChange={props.onOpenChange}
    >
      {/* <DialogTrigger asChild>{props.trigger}</DialogTrigger>
      <DialogHeader>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogDescription>{props.description}</DialogDescription>
      </DialogHeader> */}
      <DialogContent className="sm:max-w-[425px]">
        {props.children}
      </DialogContent>
      {/* <DialogFooter>{props.footer}</DialogFooter> */}
    </Dialog>
  );
};

export default Modal;
