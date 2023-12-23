import { ButtonRolesEnum, CustomButton } from "@/components/buttons";

const CreateCardActionButtons = () => {
  return (
    <div className="p-3 space-x-5 flex justify-end">
      <CustomButton label={"Cancel"} role={ButtonRolesEnum.secondary} />

      <CustomButton label={"Save card"} role={ButtonRolesEnum.positive} />
    </div>
  );
};

export default CreateCardActionButtons;
