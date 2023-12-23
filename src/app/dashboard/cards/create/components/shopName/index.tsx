import { memo } from "react";
import ShopNameField from "./shopName";
import ShopNameConfig from "./config";
import SettingsCard, { DefaultCardTitle } from "../settingsContainer";

const ShopName = () => {
  return (
    <SettingsCard cardTitle={<DefaultCardTitle>Shop name</DefaultCardTitle>}>
      <div className="mx-auto">
        <ShopNameField />
        <div className="mt-4">
          <ShopNameConfig />
        </div>
      </div>
    </SettingsCard>
  );
};

export default memo(ShopName);
