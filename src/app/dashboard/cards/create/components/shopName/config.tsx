import React from "react";
import { CustomButton } from "@/components/buttons";
import Modal from "@/components/modal";
import { Switch } from "@/components/ui/switch";
import ColourPicker from "@/lib/ColourPicker";
import { useAppDispatcher, useAppSelector } from "@/store/redux/hooks";
import {
  getCreateCardState,
  shopNameConfig,
} from "@/store/redux/features/card/reducers";

const ShopNameConfig = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const dispatch = useAppDispatcher();
  const { fontWeight, color } = useAppSelector(getCreateCardState).nameConfig;

  const toggleBoldness = () => {
    dispatch(shopNameConfig({ fontWeight: !fontWeight }));
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="flex space-x-4">
      <CustomButton label={"Text colour"} onClick={toggleModal} />
      <div className="mt-3 flex space-x-3">
        <div className="font-bold">Text boldness</div>
        <Switch checked={fontWeight} onClick={toggleBoldness} />
      </div>
      <Modal open={isModalOpen} onOpenChange={toggleModal}>
        <ColourPicker
          onChangeHandler={(color) => {
            dispatch(shopNameConfig({ color: color }));
            toggleModal();
          }}
          currentColor={color}
        />
      </Modal>
    </div>
  );
};

export default ShopNameConfig;
