import { useAppSelector } from "@/store/redux/hooks";
import { memo } from "react";
import { getMediaUrl } from "../../utils/index.utils";
import { MediaFilesTypeEnum } from "../../../types";
import LogoTextPreview from "./logoText.preview";
import { getCreateCardState } from "@/store/redux/reducers/createCard.reducer";

const LogoImagePreview = () => {
  const { shopLogo, shopLogoConfig } = useAppSelector(getCreateCardState);
  const imageUrl = getMediaUrl(shopLogo);

  return (
    <div className={"pt-4 text-center"}>
      <div className={"mt-5"}>
        <img
          src={imageUrl}
          alt={"MediaFilesTypeEnum.Logo"}
          width={100}
          height={100}
          className={`mx-auto`}
          style={{
            width: `${shopLogoConfig.size}rem`,
            height: `${shopLogoConfig.size}rem`,
            borderColor: `${shopLogoConfig.borderColor}`,
            borderWidth: `${shopLogoConfig.borderWidth}px`,
            borderRadius: `${shopLogoConfig.rounded}%`,
            opacity: `${shopLogoConfig.opacity}`,
          }}
        />
        <LogoTextPreview />
      </div>
    </div>
  );
};

export default memo(LogoImagePreview);
