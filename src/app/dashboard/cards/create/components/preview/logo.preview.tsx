import { useAppSelector } from "@/store/redux/hooks";
import { memo } from "react";
import { getMediaUrl } from "../../utils/index.utils";
import LogoTextPreview from "./logoText.preview";
import { getCreateCardState } from "@/store/redux/features/card/reducers";

const LogoImagePreview = () => {
  const { logo, logoConfig } = useAppSelector(getCreateCardState);
  const imageUrl = getMediaUrl(logo);

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
            width: `${logoConfig.size}rem`,
            height: `${logoConfig.size}rem`,
            borderColor: `${logoConfig.borderColor}`,
            borderWidth: `${logoConfig.borderWidth}px`,
            borderRadius: `${logoConfig.rounded}%`,
            opacity: `${logoConfig.opacity}`,
          }}
        />
        <LogoTextPreview />
      </div>
    </div>
  );
};

export default memo(LogoImagePreview);
