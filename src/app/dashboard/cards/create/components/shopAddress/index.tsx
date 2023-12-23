import { useAppDispatcher, useAppSelector } from "@/store/redux/hooks";
import {
  getCreateCardState,
  shopAddress,
  shopAddressBackground,
} from "@/store/redux/reducers/createCard.reducer";
import SettingsCard, { DefaultCardTitle } from "../settingsContainer";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const ShopAddress = () => {
  const dispatch = useAppDispatcher();
  const { hide } = useAppSelector(getCreateCardState).shopAddressBackground;

  const toggleShopAddressHide = () => {
    dispatch(shopAddressBackground({ hide: !hide }));
  };

  const Title = () => {
    return (
      <div className={"flex justify-between"}>
        <div>Shop address</div>
        <div>
          <Switch checked={hide} onClick={toggleShopAddressHide} />
        </div>
      </div>
    );
  };

  return (
    <SettingsCard
      cardTitle={
        <DefaultCardTitle>
          <Title />
        </DefaultCardTitle>
      }
    >
      <Textarea
        placeholder="Shop address"
        onChange={(e) =>
          e.target.value?.length <= 250 && dispatch(shopAddress(e.target.value))
        }
        minLength={2}
        maxLength={250}
      />
      <div className="mt-3">
        <div className="font-bold pb-2">Opacity</div>
        <Slider
          defaultValue={[1]}
          max={1}
          step={0.1}
          className={""}
          onValueChange={(value) =>
            dispatch(shopAddressBackground({ opacity: value[0] }))
          }
        />
      </div>
    </SettingsCard>
  );
};

export default ShopAddress;
