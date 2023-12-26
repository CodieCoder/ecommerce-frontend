import { ButtonRolesEnum, CustomButton } from "@/components/buttons";
import { ICreateCardReducer } from "@/store/redux/features/card/types";

interface IProps {
  onSaveCard: () => void;
}

const CreateCardActionButtons: React.FC<IProps> = ({ onSaveCard }) => {
  return (
    <div className="py-3 space-x-5 flex justify-end">
      <CustomButton
        label={"Save card"}
        role={ButtonRolesEnum.positive}
        onClick={() => onSaveCard()}
      />
    </div>
  );
};

export default CreateCardActionButtons;
