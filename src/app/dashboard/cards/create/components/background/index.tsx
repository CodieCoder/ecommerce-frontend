import { useAppDispatcher, useAppSelector } from "@/store/redux/hooks";
import SingleFileUpload from "@/components/mediaUpload/singleUpload";
import SettingsCard, { DefaultCardTitle } from "../settingsContainer";
import {
  setBackgroundImage,
  setBackgroundColour,
  getCreateCardState,
} from "@/store/redux/features/card/reducers";
import Modal from "@/components/modal";
import { useState } from "react";
import ColourPicker from "@/lib/ColourPicker";
import { CustomButton } from "@/components/buttons";

const CardBackground = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatcher();
  const { background } = useAppSelector(getCreateCardState);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <SettingsCard cardTitle={<DefaultCardTitle>Background</DefaultCardTitle>}>
      <SingleFileUpload
        dispatch={(imageFile: FileList | undefined) =>
          dispatch(setBackgroundImage(imageFile))
        }
      />
      <div className="mt-5">
        <CustomButton label={"Background colour"} onClick={toggleModal} />
      </div>
      <Modal open={isModalOpen} onOpenChange={toggleModal}>
        <ColourPicker
          onChangeHandler={(color) => {
            dispatch(setBackgroundColour(color));
            toggleModal();
          }}
          currentColor={background.colour}
        />
      </Modal>
    </SettingsCard>
  );
};

export default CardBackground;
