import { useAppDispatcher, useAppSelector } from "@/store/redux/hooks";
import SingleFileUpload from "@/components/mediaUpload/singleUpload";
import { Slider } from "@/components/ui/slider";
import {
  getCreateCardState,
  setShopLogo,
  shopLogoConfig,
} from "@/store/redux/reducers/createCard.reducer";
import ColourPicker from "@/lib/ColourPicker";
import Modal from "@/components/modal";
import { CustomButton } from "@/components/buttons";
import { useState } from "react";
import SettingsCard, { DefaultCardTitle } from "../settingsContainer";

const LogoImage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatcher();
  const { borderColor } = useAppSelector(getCreateCardState).shopLogoConfig;

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <SettingsCard cardTitle={<DefaultCardTitle>Logo</DefaultCardTitle>}>
      <SingleFileUpload dispatch={(file) => dispatch(setShopLogo(file))} />
      <div className="mt-5">
        <div className="font-bold pb-2">Logo shape</div>
        <Slider
          defaultValue={[50]}
          max={50}
          step={1}
          className={""}
          onValueChange={(value) =>
            dispatch(shopLogoConfig({ rounded: value[0] }))
          }
        />
      </div>
      <div className="mt-5">
        <div className="font-bold pb-2">Logo Size</div>
        <Slider
          defaultValue={[5]}
          max={15}
          step={1}
          className={""}
          onValueChange={(value) =>
            dispatch(shopLogoConfig({ size: value[0] }))
          }
        />
      </div>
      <div className="mt-5">
        <div className="font-bold pb-2">Border width</div>
        <Slider
          defaultValue={[3]}
          max={10}
          step={1}
          className={""}
          onValueChange={(value) =>
            dispatch(shopLogoConfig({ borderWidth: value[0] }))
          }
        />
      </div>
      <div className="mt-5">
        <CustomButton label={"Border colour"} onClick={toggleModal} />
      </div>
      <div className="mt-5">
        <div className="font-bold pb-2">Opacity</div>
        <Slider
          defaultValue={[1]}
          max={1}
          step={0.1}
          className={""}
          onValueChange={(value) =>
            dispatch(shopLogoConfig({ opacity: value[0] }))
          }
        />
      </div>
      <Modal open={isModalOpen} onOpenChange={toggleModal}>
        <ColourPicker
          onChangeHandler={(color) => {
            dispatch(shopLogoConfig({ borderColor: color }));
            toggleModal();
          }}
          currentColor={borderColor}
        />
      </Modal>
    </SettingsCard>
  );
};

export default LogoImage;
