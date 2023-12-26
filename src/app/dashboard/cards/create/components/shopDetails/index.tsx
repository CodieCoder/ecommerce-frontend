import { useAppDispatcher } from "@/store/redux/hooks";
import {
  shopDetails,
  shopDetailsBackground,
} from "@/store/redux/features/card/reducers";
import SettingsCard, { DefaultCardTitle } from "../settingsContainer";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ShopDetails = () => {
  const dispatch = useAppDispatcher();
  return (
    <SettingsCard cardTitle={<DefaultCardTitle>About shop</DefaultCardTitle>}>
      {/* <Input
        placeholder="About shop"
        onChange={(e) =>
          e.target.value?.length <= 250 && dispatch(shopDetails(e.target.value))
        }
        minLength={2}
        maxLength={250}
      /> */}
      <Textarea
        placeholder="About shop"
        onChange={(e) =>
          e.target.value?.length <= 250 && dispatch(shopDetails(e.target.value))
        }
        minLength={2}
        maxLength={120}
      />
      <div className="mt-3">
        <div className="font-bold pb-2">Background opacity</div>
        <Slider
          defaultValue={[1]}
          max={1}
          step={0.1}
          className={""}
          onValueChange={(value) =>
            dispatch(shopDetailsBackground({ opacity: value[0] }))
          }
        />
      </div>
    </SettingsCard>
  );
};

export default ShopDetails;
