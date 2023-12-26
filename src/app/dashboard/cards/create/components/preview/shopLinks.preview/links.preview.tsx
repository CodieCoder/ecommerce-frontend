import React from "react";
import { SocialMediaLinksArray, getSocialMedia } from "@/constants/socialLinks";
import { useAppSelector } from "@/store/redux/hooks";
import { getCreateCardState } from "@/store/redux/features/card/reducers";
import { truncateUrl } from "@/utils/utils";
import { ICardLinks } from "@/store/redux/features/card/types";

const EachLinksPreview: React.FC<{ link: ICardLinks }> = ({ link }) => {
  const backgroundColor = `rgba(255, 255, 255, ${link.backgroundOpacity || 1})`;

  const { color } = useAppSelector(getCreateCardState).nameConfig;
  const baseLink = getSocialMedia(link.type)?.baseLink;
  return (
    <div
      className="flex space-x-3 p-2 mx-auto my-4 min-w-[15rem] max-w-[80%] rounded-sm"
      style={{ backgroundColor, color }}
    >
      <div>
        {getSocialMedia(link.type)?.icon ||
          SocialMediaLinksArray[SocialMediaLinksArray.length - 1].icon}
      </div>
      <div className={""}>{truncateUrl(link.link, 25)}</div>
    </div>
  );
};

export default EachLinksPreview;
