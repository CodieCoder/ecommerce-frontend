import React from "react";
import { getMediaUrl } from "../../utils/index.utils";
import { useAppSelector } from "@/store/redux/hooks";
import LogoImagePreview from "./logo.preview";
import ShopAddressPreview from "./shopAddress.preview";
import ShopDetailsPreview from "./shopDetails.preview";
import ShopLinksPreview from "./shopLinks.preview";
import { getCreateCardState } from "@/store/redux/reducers/createCard.reducer";

const BackgroundImagePreview: React.FC = () => {
  const { background } = useAppSelector(getCreateCardState);
  const getBackgroundImage = React.useCallback(
    () => getMediaUrl(background.image),
    [background.image]
  );
  const bkgImage = getBackgroundImage();
  const bkgColour = React.useMemo(() => background.colour, [background.colour]);

  return (
    <div
      className={"h-full rounded-md p-2 overflow-y-auto"}
      style={{
        backgroundImage: `url(${bkgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: bkgColour,
      }}
    >
      <LogoImagePreview />
      <div className="">
        <ShopDetailsPreview />
      </div>
      <div className="">
        <ShopAddressPreview />
      </div>

      <div className="mt-4">
        <ShopLinksPreview />
      </div>
    </div>
  );
};

export default React.memo(BackgroundImagePreview);
